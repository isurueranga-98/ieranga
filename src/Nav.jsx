import React from 'react'
import logo from './assets/signature.png'
import GitHubIcon from '@mui/icons-material/GitHub';

const Nav = () => {
  return (
    <div >
      <nav >
        <div className='flex flex-row items-center justify-between mt-10 mx-6 md:mx-20 lg:mx-20'>
            <img src={logo} alt="sumz_logo" className=' w-20 md:w-28 lg:w-28'/> 
           
            <button type=' button' className=' rounded-full border border-black bg-black py-0.5 px-2 text-sm text-white transition-all hover:bg-white hover:text-black md:py-1.5 md:px-5 lg:py-1.5 lg:px-5 ' onClick={() => window.open('https://github.com/isurueranga-98')}>
                <GitHubIcon/>
               
            </button>
        </div>
      </nav>
            
        
    </div>
  )
}

export default Nav
