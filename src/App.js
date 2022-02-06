import * as React from 'react';
import { makeStyles } from '@mui/styles';
import CssBaseline from '@mui/material/CssBaseline';
import Image from './BagroundImages/5039684.jpg';
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer';
import './App.css'
import Faq from './Faq';
import Container from '@mui/material/Container';
import Bolg from './Pages/Bolg';
import Landing from './Pages/Landing';
import {
  BrowserRouter,
  Routes,
  Route,
  Link
} from "react-router-dom";
import Crousel from './components/Crousel';



function App() {
  return (
    <>
      <div className="App" style={{
        minHeight: '100vh',
        backgroundImage: `url(${Image})`,
        backgroundRepeat: 'repeat',
        backgroundSize: 'cover',
        zIndex: '1',
        color: 'white',
      }}>
        <BrowserRouter>
        <Navbar />
          <Routes>
            <Route exact path="/" element={<Landing />} />
            <Route exact path="Blog/*" element={<Bolg />} />
          </Routes>
        <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
