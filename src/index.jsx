import React from 'react';
import ReactDOM from 'react-dom';
// Import de l'image
import LOGO from '../logo/logo.png';
//import Header from './components/Header/index.jsx';
//import Content from './components/Content/index.jsx';
// Utilisation
<img src={LOGO} alt="Logo" />
const Index = () => {
  return (
    <div className="container">
      <Header />
      <Content />
    </div>
  );
};
ReactDOM.render(<Index />, document.getElementById('root'));