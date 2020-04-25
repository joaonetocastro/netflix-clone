import React from 'react';
import './App.css';
import './components/index.css';
import MainScreen from './screens/MainScreen';
import LoginScreen from './screens/LoginScreen';
import {BrowserRouter, Switch, Route} from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path='/'>
          <MainScreen />
        </Route>
        <Route path='/login'>
          <LoginScreen />
        </Route>
        </Switch>
    </BrowserRouter>
    );
}

export default App;
