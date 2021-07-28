import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';

import './App.css';

import HeaderProvider from './context/Providers/HeaderProvider';
import DrinkProvider from './context/Providers/DrinkProvider';
import Drinks from './pages/Drinks';
import DrinkDetails from './pages/DrinkDetails';
import FavoriteRecipes from './pages/FavoriteRecipes';


function App() {
  return (
    <DrinkProvider>
      <BrowserRouter>
        <HeaderProvider>
          <Switch>
            <Route exact path="/" component={Drinks} />
            <Route path="/favoritas" component={FavoriteRecipes} />
            <Route exact path="/:id" component={DrinkDetails} />
          </Switch>
        </HeaderProvider>
      </BrowserRouter>
    </DrinkProvider>
  );
}

export default App;