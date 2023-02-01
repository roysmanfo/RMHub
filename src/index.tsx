import React from 'react';
import ReactDOM from 'react-dom/client';
import LinkList from './components/LinkList';
import './css/global/global.css';
import './css/global/classes.css'
import Router from './Router'

const LINKS: {rel: string; type: string; href: string;}[] = [
  {
      "rel": "stylesheet",
      "type": "text/css",
      "href": "./css/global/global.css"
  },
  {
      "rel": "stylesheet",
      "type": "text/css",
      "href": "./css/global/classes.css"
  },
]



const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <React.StrictMode>
    <LinkList props = {LINKS} />
    <Router />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
