import React from 'react'
import Photo2 from './assets/photo2.jpg'

const Project = () => {
  return (
    <div className=' flex flex-col items-center justify-center py-10 space-y-5'>
        <div>
            <p className=' text-2xl font-semibold'>My Project</p>
        </div>
        <div className=' flex flex-row items-center justify-center space-x-20 text-xl'>
            <a href="#" className=' hover:underline'>Web Project</a>
            <p>|</p>
            <a href="#" className=' hover:underline'>Data Sceince Project</a>
            <p>|</p>
            <a href="#" className=' hover:underline'>UI UX Project</a>
        </div>

        <div className='grid grid-cols-3 grid-rows-2 gap-10'>
            <div className=' w-[30rem] h-64 items-center rounded-3xl shadow-xl'>
                <a href="" className=''><img src={Photo2} alt="" className='w-[30rem] h-64 object-cover rounded-3xl absolute'/></a>
                <div className=' w-[30rem] h-64 bg-black bg-opacity-30 relative items-end justify-end rounded-3xl'>
                    <p className=' text-white text-center'>fuck</p>

                </div>
            </div>
            <div className=' w-[30rem] h-64 items-center rounded-3xl shadow-xl'>
                
            </div>
            <div className=' w-[30rem] h-64 items-center rounded-3xl shadow-xl'>
                
            </div>
            <div className=' w-[30rem] h-64 items-center rounded-3xl shadow-xl'>
                
            </div>
            <div className=' w-[30rem] h-64 items-center rounded-3xl shadow-xl'>
                
            </div>
            <div className=' w-[30rem] h-64 items-center rounded-3xl shadow-xl'>
                
            </div>
            
            

        </div>
    </div>
  )
}

export default Project