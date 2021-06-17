import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import ShopList from './comp/ShopList';
import Nav from './comp/Nav';
import Shop from './comp/Shop'
import Context from './context'

function App() {
  const [shops, setShops] = React.useState([]);
  const [filteredShops, setFilterShops] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  function loadShop() {
    fetch('https://localhost:44314/api/Shop')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setShops(json);
          setFilterShops(json);
          setLoading(false);
        })
  }

  function removeShop(id) {
    return fetch(`https://localhost:44314/api/Shop/${id}`, {method: 'DELETE', mode: 'cors'});
  }

  function getShop(id) {
    return fetch(`https://localhost:44314/api/Shop/${id}`, {method: 'GET', mode: 'cors'});
  }

  function addShop(shop) {
    //fetch(`https://localhost:44314/api/Shop/${id}`, {method: 'DELETE', mode: 'cors'}).then(() => loadShop());
  }

  function updateShop(shop) {
    console.log(shop)
    fetch(`https://localhost:44314/api/Shop/${shop.id}`, {method: 'PUT', mode: 'cors', body: JSON.stringify(shop),headers: {'Content-Type': 'application/json'}});
  }

  function filterList(text){
    let result = shops.filter(function(item){
        return item.store.toLowerCase().search(text.toLowerCase())!== -1;
    }); 
    setFilterShops(result);
}

  return (
    <BrowserRouter>
      <Nav filterList = {filterList}></Nav>
      <Context.Provider value={{getShop: getShop, loadShop:loadShop, removeShop: removeShop, addShop: addShop, updateShop: updateShop}}>
        <Switch>
          <Route exact path="/"><ShopList shops={filteredShops} loading={loading}></ShopList></Route>
          <Route path="/shop/:id"><Shop></Shop></Route>
          <Route path="/new" />
        </Switch>
      </Context.Provider>
    </BrowserRouter>
  );
}

export default App;
