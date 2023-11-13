import React from 'react'
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import Logo from './assets/signature1.png'

const Footer = () => {
  return (
    <div className=' w-ful bg-slate-900 py-5'>
        <footer className=' flex flex-col justify-center items-center space-y-6'>

          <img src={Logo} alt="" className=' w-[100px]'/>
          
          <div className='flex flex-col text-white space-y-4'>
           <div className='  flex flex-col items-center justify-center space-y-2 font-semibold lg:text-xl text-white'>
             <PhoneIcon className=' '/>
             <p className='text-white'>+94 71 535 7959</p>
           </div>

           <div className=' flex flex-col items-center justify-center space-y-2 font-semibold lg:text-xl text-white'>
             <EmailIcon/>
             <p className=' text-white'>isurueranga.0@gmail.com</p>
           </div>
         </div>

         <div className=' flex flex-col items-center justify-center'>
          <p className=' lg:text-lg mb-auto text-white'>This Website Under Developing</p>
          <p className=' text-xs mb-auto text-white'>All Rights Reserved © 2023</p>
         </div>
         
        </footer>
    </div>
  )
}

export default Footer
