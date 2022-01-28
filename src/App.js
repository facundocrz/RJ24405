import './App.css';
import NavBar from './components/NavBar';
import ItemListContainer from './components/ItemListContainer';
import ItemDetailContainer from './components/ItemDetailContainer';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

function App() {
  return (
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
        <ItemDetailContainer/>
        </Route>
      </Switch>
    </BrowserRouter>

  );
}

export default App;
