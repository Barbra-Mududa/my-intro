import React, { useState, useEffect } from 'react'
// import Nav from './Nav'
// import Mobile from './Mobile'
// import Socials from './Socials'

function Navbar() {
  const [bg, setBg] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', ()=> {
      return window.scrollY > 50? setBg(true) : setBg(false);
    })
  },[])
  return (
    <header className={`${bg ? 'bg-tertiary h-20' : 'h-24'}
    flex items-center fixed top-0 w-full text-white z-10 translation-all duration-300 `}>
      <div className='mx-auto'> 
        header
      </div>
    </header>
  )
}

export default Navbar