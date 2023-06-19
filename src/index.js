import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
    <h1>Top {2+3} T.V Series of All Time</h1>
    
    <div className='cards'> 
    <App />
      </div>
  </>
 
);

reportWebVitals();
