import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./fonts.css"
import './index.css'
import { disableReactDevTools } from "@fvilers/disable-react-devtools";
import  './i18n';



if (process.env.NODE_ENV === "production") {
  disableReactDevTools();
}


ReactDOM.createRoot(document.getElementById('__waanverse')!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
