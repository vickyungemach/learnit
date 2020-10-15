import { Provider } from 'react-redux';
import { store } from './store';

import React from 'react';
import './main.scss';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Home from './components/pages/home/Home';
import Header from './components/layout/Header';
import Vocabulary from './components/pages/vocabulary/Vocabulary';
import EditForm from './components/layout/EditForm';
import WordList from './components/pages/wordList/WordList';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import setAuthToken from './utils/setAuthToken';
import PrivateRoute from './components/auth/PrivateRoute';


if (localStorage.token) {
  setAuthToken(localStorage.token);
}

const App = () => {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Header />
          <Switch>
            <PrivateRoute exact path='/' component={Home} />
            <PrivateRoute exact path='/vocabulary' component={Vocabulary} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute exact path='/vocabulary/:title' component={WordList} />
            <PrivateRoute exact path='/add-words/:title' component={EditForm} />
          </Switch>
        </div>

      </Router>
    </Provider>
  );
}

export default App;
