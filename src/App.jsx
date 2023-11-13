import GitHubIcon from '@mui/icons-material/GitHub';
import FacebookIcon from '@mui/icons-material/Facebook';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import PhoneIcon from '@mui/icons-material/Phone';
import EmailIcon from '@mui/icons-material/Email';
import JSicon from './assets/icons8-javascript.svg'
import Ticon from './assets/icons8-tailwind-css.svg'
import Ricon from './assets/icons8-react.svg'
import Nicon from './assets/icons8-nextjs.svg'
import Picon from './assets/icons8-python.svg'
import Ficon from './assets/icons8-figma.svg'
import NJicon from './assets/icons8-node-js.svg'
import TSicon from './assets/icons8-typescript.svg'
import photo from './assets/photo.png'

function App() {

  return (

    <>
    <div className=' flex-col mx-10 pt-24  lg:mx-20 lg:py-7 lg:pt-20 lg:px-28 lg:justify-between lg:flex lg:flex-row lg:h-full lg:items-center'>

      <div className=' justify-between items-center space-y-5'>
        <p className=' text-3xl lg:text-4xl'>Hello, </p>
        <p className=' text-4xl lg:text-6xl font-bold'>I am <span className=' text-blue-400'>Isuru Eranga</span></p>
        
        <div className=' items-start flex flex-col lg:flex-row  text-xl  lg:text-2xl lg:space-x-3'>
          <p>Data Science Enthusiast</p>
          <p className=' hidden  lg:block'>|</p>
          <p>Full Stack Developer</p>
          <p className=' hidden  lg:block'>|</p>
          <p>UI UX Designer</p>
         </div>

         {/* <p className=' text-l  lg:text-xl'>Reading BSc (Hons) in Computing & Information Systems at Sabaragmuwa University of Sri Lanka</p> */}
        
         <div className='flex flex-row items-center space-x-4 m lg:space-x-7'>
           
                    
                    <div><img src={Ricon} alt="JSicon"  className= '  lg:w-10'/></div>
                    <div><img src={JSicon} alt="JSicon"  className= ' lg:w-14'/></div>
                    <div><img src={NJicon} alt="JSicon"  className= ' lg:w-10'/></div>
                    <div><img src={TSicon} alt="JSicon"  className= ' lg:w-10'/></div>
                    <div><img src={Ticon} alt="JSicon"  className= '  lg:w-12'/></div>
                    <div><img src={Nicon} alt="JSicon"  className= '  lg:w-12'/></div>
                    <div><img src={Picon} alt="JSicon"  className= '  lg:w-12'/></div>
                    <div><img src={Ficon} alt="JSicon"  className= '  lg:w-12'/></div>
                
          </div>

          <div className=' space-x-4'>

            <a href="https://www.linkedin.com/in/isuru-eranga-230300110/"><LinkedInIcon/></a>
            <a href="https://github.com/isurueranga-98" ><GitHubIcon/></a>
            {/* <a href="https://www.facebook.com/profile.php?id=61552382926842"><FacebookIcon/></a> */}
            <a href="#"><FacebookIcon/></a>
         
         </div>

        <div className=' flex flex-row items-center space-x-7'>

          

          <button className=' h-10 font-medium w-32 lg:h-14 border border-black hover:bg-black hover:text-white'>Contact Me</button>
          
          <button className=' h-10 font-medium w-32 lg:h-14 border border-black hover:bg-black hover:text-white'>Resume</button>
          
        </div>
         
         
      </div>

      <div>
          <img src={photo} alt="" className=' mt-7 w-[400px] h-[400px] lg:w-[550px] lg:h-[700px] object-cover rounded-3xl shadow-2xl'/>
      </div>
      
      
      
    </div>

    </>

    // ############################################
    // <>
    
    //   <div className=' flex flex-col justify-center items-center h-[800px] space-y-10'>

    //     <p className=' text-4xl md:text-6xl lg:text-6xl text-cente'>Hello, </p>

    //     <p className=' text-5xl md:text-7xl lg:text-8xl text-center font-bold'>I am <span className=' text-blue-400'>Isuru Eranga</span></p>

    //     <div className=' flex flex-col md:flex-row text-center text-xl md:text-2xl lg:text-3xl space-x-3'>
    //       <p>Data Science Enthusiast</p>
    //       <p className=' hidden md:block lg:block'>|</p>
    //       <p>Full Stack Developer</p>
    //       <p className=' hidden md:block lg:block'>|</p>
    //       <p>UI UX Designer</p>
    //     </div>

    //     <p className=' text-lg md:text-xl lg:text-2xl text-center'>Reading BSc (Hons) in Computing & Information Systems at Sabaragmuwa University of Sri Lanka</p>

    //     <div className=' flex flex-row items-center justify-center'>
    //       {/* <p className=' font-semibold text-xl px-5'>Tech Stucks |</p> */}

    //       <div className='flex flex-row items-center space-x-7 justify-center'>
           
    //         <div><img src={JSicon} alt="JSicon"  className= ' w-16'/></div>
    //         <div><img src={Ricon} alt="JSicon"  className= ' w-12'/></div>
    //         <div><img src={NJicon} alt="JSicon"  className= ' w-12'/></div>
    //         <div><img src={TSicon} alt="JSicon"  className= ' w-12'/></div>
    //         <div><img src={Ticon} alt="JSicon"  className= ' w-14'/></div>
    //         <div><img src={Nicon} alt="JSicon"  className= ' w-14'/></div>
    //         <div><img src={Picon} alt="JSicon"  className= ' w-14'/></div>
    //         <div><img src={Ficon} alt="JSicon"  className= ' w-14'/></div>
         
    //       </div>
    //     </div>

    //     <div className=' space-x-3 mt-7'>

    //       <a href="https://www.linkedin.com/in/isuru-eranga-230300110/"><LinkedInIcon/></a>
    //       <a href="https://github.com/isurueranga-98" ><GitHubIcon/></a>
    //       {/* <a href="https://www.facebook.com/profile.php?id=61552382926842"><FacebookIcon/></a> */}
    //       <a href="#"><FacebookIcon/></a>
         
    //     </div>

    //     <div className='  flex flex-col space-y-3 mt-7 justify-center items-center'>
    //       <div className='  flex flex-row items-center'>
    //         <PhoneIcon className=' '/>
    //         <p className=' text-[18px] mx-3 font-medium'>+94715357959</p>
    //       </div>

    //       <div className='  flex flex-row items-center'>
    //         <EmailIcon/>
    //         <p className=' text-[18px] mx-3 font-medium'>isurueranga.0@gmail.com</p>
    //       </div>
    //     </div>

        
        
    //   </div> 
   
    // </>
  )
}

export default App
