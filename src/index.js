// import React from "react";
// import ReactDOM from "react-dom/client";
// import App from "./App";
// import './index.css';

// //import { ThemeProviderCustom } from "./theme/useThemeContext";
// import { ThemeContextProvider } from './theme/useThemeContext'; // ✅

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   <React.StrictMode>
//     <ThemeContextProvider>
//       <App />
//     </ThemeContextProvider>

//   </React.StrictMode>
// );

import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { ThemeContextProvider } from './theme/useThemeContext';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <ThemeContextProvider>
    <App />
  </ThemeContextProvider>
);
