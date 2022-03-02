import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Cart from './components/Cart';
import CartProvider from './context/CartProvider';
import Footer from './components/Footer';

function App() {
  return (
    <>
      <CartProvider>
        <BrowserRouter>
          <NavBar />
          <Switch>
            <Route exact path='/'>
              <ItemListContainer title="Novedades" />
            </Route>
            <Route path='/category/:categoryId'>
              <ItemListContainer title="" />
            </Route>
            <Route path='/item/:itemId'>
              <ItemDetailContainer />
            </Route>
            <Route path='/cart'>
              <Cart />
            </Route>
          </Switch>
          <Footer />
        </BrowserRouter>
      </CartProvider>
    </>
  );
}

export default App;
