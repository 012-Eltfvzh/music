import React from 'react'
import Gambar from '../assets/Gitar_Page.png'

const Content = () => {
  return (
    <div>
          <div className=" w-screen h-screen">
              <img
                  src={Gambar}
                  alt=""
                  className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                  <h1 className="text-white text-5xl md:text-7xl font-bold">
                      Welcome
                  </h1>
              </div>
          </div>
      
    </div>
  )
}

export default Content
