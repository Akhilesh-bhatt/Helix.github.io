import * as React from 'react';
import Faq from '../Faq';
import Container from '@mui/material/Container';
import Crousel from '../components/Crousel';
import Dummy from './Dummy';
import heli from './image/helix logo.png'
import gif from './image/5962683 (1).gif'

function Landing() {
    return (
        <>
            <div style={{ marginTop: '5rem' }}>
                <h1>TEAM C-HELIX</h1>
                <div>
                    <img src={heli} alt="image" style={{width:'200px',heigth:'auto'}}/>
                </div>
      

            <hr class="featurette-divider"></hr>
            <div className="centre" style={{ backgroundColor: 'black' }}>
                <div className='container'>
                    <h1 className="display-5 fw-bold lh-1 mb-3" style={{ color: 'white' }}>WHO WE ARE</h1>
                    <p className="lead" style={{ color: 'white' }}>We are the technical club of Civil Engineering department, National Institute of Technology, Hamirpur.  With an inspiration of bolstering the idea echoed by "Civil engineering makes civilisations". Proud to be the part of NIMBUS, one of the largest  technical fest in North India. Resonating with this year's theme UDANTYA : An Occultic Cyberverse, we are ready to spread the magic through our wands.</p>
                </div>
                <hr class="featurette-divider"></hr>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '5rem' ,background:'none'}}>
                <Crousel />
            </div>
                <div className='container' style={{ backgroundColor: 'black' }}>
                    <h1 className="display-5 fw-bold lh-1 mb-3" style={{ color: 'white' }}>WHAT WE DO!</h1>
                    <p className="lead" style={{ color: 'white' }}>We thrive for excellence. We follow the Motto - Learn, Probe, and Work. We provide an environment for the students to dive deeper into their uniqueness, helping them realise their true potential. Here everyone tends to let their imagination run wild and put it into reality. Also, we look for people with the same thirst to join our league.  </p>
                </div>
                <hr class="featurette-divider"></hr>
            </div>

            <Container >
                <Faq />
            </Container>
        </div>
      </>
  )
}

export default Landing;
