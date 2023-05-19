import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import Quiz from './Quiz.tsx'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Quiz />
  </React.StrictMode>,
)
