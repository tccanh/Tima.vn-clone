import React from 'react';
import jwt_decode from 'jwt-decode';
import setAuthToken from './utils/setAuthToken';
import store from './store';
import './App.scss';
import { Provider } from 'react-redux';
import { Route, BrowserRouter } from 'react-router-dom';
import { setCurrentUser, logoutUser } from './actions/auth.action';
import PrivateRoute from './HOC/PrivateRoute';
import Header from './components/layouts/Header/Header';
import Login from './components/auth/Login/Login';
import Register from './components/auth/Register/Register';
import Profile from './components/Profile/Profile';
import Footer from './components/layouts/Footer/Footer';
import BorrowerPick from './components/Borrower/BorrowerPick/BorrowerPick';
import Home from './components/Home/Home';
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
              <Route exact path="/" component={Home} />
              <Route exact path="/login" component={Login} />
              <Route exact path="/register" component={Register} />
              <PrivateRoute exact path="/profile" component={Profile} />
              {/* Khu vực dành cho bọn đoé có tiền */}
              <PrivateRoute exact path="/borrower" component={BorrowerPick} />

              {/* Khu vực dành cho bọn thừa tiền */}
            </div>
          </div>
          <Footer />
        </div>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
