import React from 'react'
import logo from './assets/signature.png'
import GitHubIcon from '@mui/icons-material/GitHub';

const Nav = () => {
  
  return (
    <div >
      <nav className=' bg-white fixed w-full h-16 items-center justify-center shadow-lg'>

        <div className='flex flex-row items-center justify-between mx-8 lg:mt-5 lg:mx-20 mt-4'>
            <img src={logo} alt="sumz_logo" className=' w-28'/> 

            <div className=' hidden  lg:flex lg:flex-row space-x-10'>
              <a href='#' className=' font-semibold text-lg hover:underline'>About Me</a>
              <a href="#" className=' font-semibold text-lg hover:underline'>Project</a>
              <a href="#" className=' font-semibold text-lg hover:underline'>Contat Me</a>
            </div>
           
            <button type=' button' className=' rounded-full border border-black bg-black  text-sm text-white transition-all hover:bg-white hover:text-black py-1.5 px-5 ' onClick={() => window.open('https://github.com/isurueranga-98')}>
                <GitHubIcon/>  
            </button>

            

        </div>
        
      </nav>
    </div>
  )
}

export default Nav
