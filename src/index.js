import React from 'react';
//import ReactDOM from 'react-dom/client';
import { createRoot } from 'react-dom/client'
import './index.css';
import App from './App';
import POPOSList from './POPOSList';
import About from './About';
import reportWebVitals from './reportWebVitals';
import { HashRouter as Router, Routes, Route } from 'react-router-dom';
import POPOSDetails from './POPOSDetails';

const rootElement = document.getElementById('root');
const root = createRoot(rootElement);

root.render(
  <Router>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="/" element={<POPOSList />} />
        <Route path="about" element={<About />} />
        <Route path="/details/:id" element={<POPOSDetails />} />
      </Route>
    </Routes>
  </Router>,
  //document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
