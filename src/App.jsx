import React from 'react'
import Navbar from './Component/Navbar'
import Content from './Component/Content'
import Peminjaman from './Component/Peminjaman'
import Footer from './Component/Footer'


const App = () => {
  return (
    <div className='min-h-screen'>
      <Navbar/>
      <Content/>
      <Peminjaman/>
      <Footer/>
    </div>
  )
}

export default App
