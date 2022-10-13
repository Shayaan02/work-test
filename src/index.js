import React from 'react';
import ReactDOM from 'react-dom/client';
import './style/index.css';
import App from './App';

const header = () => {
  return (
    <header className="header">
      <h1> Shayaan Ahmed</h1>
    </header>
  )
}
const footer = () => {
  return (
    <footer className="footer">
      <a href="https://www.linkedin.com/in/shayaan-ahmed-/" target="_blank">Linkedin</a>
      <a href="https://github.com/Shayaan02" target="_blank">Github</a>

    </footer>
  )
}
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {header()}
    <App />
    {footer()}
  </React.StrictMode>
);