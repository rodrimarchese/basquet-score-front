import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css'

function CreatePlayer() {
    return null;
}

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <CreatePlayer/>
  </React.StrictMode>,
)
