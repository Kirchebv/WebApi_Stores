import React from 'react';
import ShopList from './comp/ShopList';
import Context from './context'

function App() {
  const [shops, setShops] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
      fetch('https://jsonplaceholder.typicode.com/todos?_limit=5')
        .then(response => response.json())
        .then(json => {
          console.log(json);
          setShops(json);
          setLoading(false);
        })
  }, []);

  function removeShop(id) {
    console.log('---del---')
    setShops(shops.filter(todo => todo.id !== id));
  }

  return (
    <Context.Provider value={{removeShop: removeShop}}>
      <div className="wrapper">
        {shops.length ? (
        <ShopList shops={shops}></ShopList>
        ) : (
          loading ? null : <p>No shops!</p>
        )}
      </div>
    </Context.Provider>
  );
}

export default App;
