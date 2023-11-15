import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import HomePage from './HomePage/HomePage.tsx'
import ContatoPage from './ContatoPage/ContatoPage.tsx'
import SobrePage from './SobrePage/SobrePage.tsx'
import { BrowserRouter, Routes, Route } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <BrowserRouter>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/contato' element={<ContatoPage />} />
      <Route path='/sobre' element={<SobrePage />} />
    </Routes>
    </BrowserRouter>
  </React.StrictMode>,
)
