import React from 'react';
import "./Footer.module.css"

const Footer = () => {
    return(

  <footer className="py-3" style={{position
    :'relative',bottom:'0',width:'100%',marginTop:'5rem',backgroundColor:"rgba(0,0,0, 0.7)"}}>
    <p className="text-center my2" style={{color:'white'}}>Made with ❤ by <a href="#" className="px-2 my2fi" style={{textDecoration:'none',color:'white'}}>C-Helix</a></p>
    <ul className="nav justify-content-center  pb-1">
      <li className="nav-item my2i"><a href="#" className="px-2"><i className="fab fa-instagram my2i"style={{color:'white'}}></i></a></li>
      <li className="nav-item my2i"><a href="#" className="px-2"><i className="fab fa-youtube my2i"style={{color:'white'}}></i></a></li>
      <li className="nav-item my2i"><a href="#" className="px-2"><i className="fab fa-linkedin-in my2i"style={{color:'white'}}></i></a></li>
    </ul>
  </footer>

    

    
    )
}

export default Footer;