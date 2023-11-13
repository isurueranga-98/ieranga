import React from 'react'

import photo2 from './assets/photo2.jpg'

const Aboutme = () => {
  return (
    <div id='About' className=' flex flex-col mx-10 py-10 lg:mx-20 lg:py-7 lg:px-28 lg:justify-between lg:flex lg:flex-col lg:h-full lg:items-center'>
    
        {/* <div>
            <p className=' text-2xl font-semibold'>About Me</p>
        </div> */}

        <div className='flex flex-col-reverse lg:flex-row lg:justify-between lg:items-center lg:space-x-40'>
            <div>
                <img src={photo2} alt="" className=' mt-7 w-[400px] h-[400px] lg:w-[400px] lg:h-[500px] object-cover rounded-3xl shadow-2xl'/>
            </div>


            <div className=' w-90 lg:w-[45rem] space-y-2' >
                <p className=' text-2xl font-semibold'>About Me</p>
                <p className=' text-xl text-justify '>Hello there! I'm Isuru Eranga, currently immersed in the world of technology as I pursue a BSc (Hons) in Computing & Information Systems at Sabaragmuwa University of Sri Lanka. With a passion for harnessing the power of data, I proudly identify as a Data Science Enthusiast. As a Full Stack Developer, I revel in the intricate dance between front-end and back-end technologies, bringing ideas to life through seamless, user-centric interfaces. My creative flair extends to UI/UX design, where I strive to marry aesthetics with functionality. Join me on my journey as I explore the ever-evolving landscape of computing and contribute to the exciting intersection of data science, development, and design.</p>
            </div>
        </div>
    
       

        


    </div>
  )
}

export default Aboutme