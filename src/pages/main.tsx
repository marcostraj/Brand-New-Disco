import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './HomePage/HomePage.tsx'
import ContatoPage from './ContatoPage/ContatoPage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contato' element={<ContatoPage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
