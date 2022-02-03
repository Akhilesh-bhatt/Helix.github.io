import React from 'react';
import "./Footer.module.css"

const Footer = () => {
    return(
    //     <div className='main-footer'>
    //         <div className='container'>
    //             <div className="row">
    //                 {/* Column1 */}
    //                 <div className="col">
    //                     <h4>C-Helix</h4>
    //                     <ul className='list-unstyled'>
    //                         <li>Nimbus</li>
    //                         <li>India</li>
    //                         <li>National Institute of Technology, Hamipur.</li>
    //                     </ul>
    //                 </div>
                   
    //     </div>
       
    //     <div className="row">
    //       <p className="col-sm">
    //         Made with ❤ by C-Helix
    //       </p>
          
                    

    //             </div>
    //     </div>
    // </div>
    <div className='my'>

    <div className="container">
  <footer className="py-3">
    <ul className="nav justify-content-center border-bottom pb-3 mb-3">
      <li className="nav-item my2i"><a href="#" className="px-2"><i className="fab fa-instagram my2i"style={{color:'white'}}></i></a></li>
      <li className="nav-item my2i"><a href="#" className="px-2"><i className="fab fa-youtube my2i"style={{color:'white'}}></i></a></li>
      <li className="nav-item my2i"><a href="#" className="px-2"><i className="fab fa-linkedin-in my2i"style={{color:'white'}}></i></a></li>
      
    </ul>
    <p className="text-center my2" style={{color:'white'}}>Made with ❤ by <a href="#" className="px-2 my2fi">C-Helix</a></p>
  </footer>
    </div>
    
</div>
    
    )
}

export default Footer;