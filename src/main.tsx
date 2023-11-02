import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import SecondSection from './SecondSection.tsx'
import ThirdSection from './ThirdSection.tsx'
import FourthSection from './FourthSection.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <App />
    <SecondSection />
    <ThirdSection/>
    <FourthSection/>
  </React.StrictMode>,
)
