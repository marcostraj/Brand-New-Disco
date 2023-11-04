import React from 'react'
import ReactDOM from 'react-dom/client'
import Home from './components/main/Home/Home.tsx'
import './index.css'
import SecondSection from './components/main/SecondSection/SecondSection.tsx'
import ThirdSection from './components/main/ThirdSection/ThirdSection.tsx'
import FourthSection from './components/main/FourthSection/FourthSection.tsx'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Home />
    <SecondSection />
    <ThirdSection/>
    <FourthSection/>
  </React.StrictMode>,
)
