import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Nav from './Nav.jsx'
import Footer from './Footer.jsx'
import Aboutme from './Aboutme.jsx'
import Project from './Project.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <div>
      <Nav/>
      <App/>
      <Aboutme/>
      {/* <Project/> */}
      <Footer/>
      
    </div>
  </React.StrictMode>,
)
