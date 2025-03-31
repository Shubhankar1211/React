import React from 'react';  //react hamari core fundational library h jo sare refrences lena ka kaam karti h
import ReactDOM from 'react-dom/client'; // ye react ka impementation h web pe
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root')); // ye same id html me h index.html me
root.render(
  <React.StrictMode>
    <App />    
  </React.StrictMode>
);

// react khuda ka dom bhi bnata h vritual dom fir vo main ke dom se campare karta h or kitna dfiff h or uske baad vo change karta h us dom ke andar method h create root
//// ab tka ki khani ye h ki mere pass main fiel index.html h or kahi na kahi se hame uspe react inject karna pata h or react inject karna ka thareka same hi h 
// app.js me hamene ek fucntion bnaya h fir use hamne export kar diya h fir dusri index.js file me use render karaya h or index.hmtl se connect karne ke liye uski class tag ko getelement byid se karke wha index.html me run kiya h
// ye sara react ka flow h 


//vite ka flow bhi yahi h 
//
