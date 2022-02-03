import * as React from 'react';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Image from './BagroundImages/5039684.jpg';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import './App.css'

// const useStyles=makeStyles((theme)=>({
//   main:{
//     minHeight:'100vh',
//     backgroundImage:`url(${Image})`,
//     backgroundRepeat:'no-repeat',
//     backgroundSize:'cover',
//   }
// }));

function App() {
  // const classes=useStyles();
  return (
    <>
      <div className="App" style={{
        minHeight: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
        zIndex: '1'
      }}>
        <Navbar />
        <div className="page-container">
          <div className="content-wrap">
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default App;

// style={{
//   minHeight: '100vh',
//   backgroundImage: `url(${Image})`,
//   backgroundRepeat: 'no-repeat',
//   backgroundSize: 'cover',
//   zIndex: '1'
// }}