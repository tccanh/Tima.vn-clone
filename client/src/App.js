import React from 'react';
import './App.scss';
import Header from './components/layouts/Header/Header';
import Login from './components/auth/Login/Login';

function App() {
  return (
    <div className="page-wrapper page-home">
      {/* <Header /> */}
      <Login />
    </div>
  );
}

export default App;
