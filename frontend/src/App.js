import Home from './pages/Home'
import ShopList from './comp/ShopList';
import Context from './context'

function App() {
  const [shops, setShops] = React.useState([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(()=>{
      fetch('https://localhost:44314/api/shop')
        .then(response => response.json())
        .then(json => {
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
