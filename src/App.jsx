import React from 'react'
import Header from './Component/Header'
import Router from './Router/Router'
import Footer from './Component/Footer'
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {
  return (
      
      <div className='bg-[#F8F7F4]  z-20'>
            <Header />
            <Router />
            <Footer />
      </div>
  )
}

export default App
