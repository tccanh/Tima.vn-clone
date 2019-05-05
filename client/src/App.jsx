import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import './App.scss';
import { Provider } from 'react-redux';
import { Route, BrowserRouter, Switch } from 'react-router-dom';
import { setCurrentUser, logoutUser } from './actions/auth.action';
import Header from './components/layouts/Header/Header';
import Login from './components/Auth/Login/Login';
import Register from './components/Auth/Register/Register';
if (localStorage.jwtToken) {
  setAuthToken(localStorage.jwtToken);
  const decoded = jwt_decode(localStorage.jwtToken);
  // Set user is authenticated
  store.dispatch(setCurrentUser(decoded));
  // Check for expried token
  const currentTime = Date.now() / 1000;
  if (decoded.exp < currentTime) {
    store.dispatch(logoutUser());
    // clear current profile
    // store.dispatch(clearCurrentProfile());
    //redirect to login
    window.location.href = '/login';
  }
}
function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <div className="page-wrapper page-home">
          <Header />
          <div className="main-page">
            <div className="container py-5">
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
            </div>
          </div>
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
