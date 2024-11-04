import './App.css'
import Navbar from './components/navbar/Navbar'
import ApmtButton from './components/appointment/ApmtButton'
import { useState } from 'react';
import dot from '../src/assets/dot.png';
import placeholder from '../src/assets/placeholder.png';
import star from '../src/assets/star.png';
import stars from '../src/assets/stars.png';
import urban from '../src/assets/urban.png';
function App() {

  const [Apmt, setApmt] = useState(false);

  return (
    <> 

      <div className="main-cont">
        <Navbar/>
        <div className="front-page">
          <div className="image-bg">
            <img src={placeholder} className='design-bg' id='pic2'/>
            <img src={star} className='design-bg' id='pic3'/>
            <img src={stars} className='design-bg' id='pic4'/>
            <img src={urban} className='design-bg' id='pic5'/>
          </div>
          <p className="page-name">Services</p>
          <button onClick={()=> setApmt(true)} className='apmtsty'>Book an Appointment</button>
          <ApmtButton trigger={Apmt} setTrigger={setApmt}/>
          
        </div>
        <div className="image-bg-full"></div>
        <div className="cmp-section"></div>
        <div className="processes"></div>
        <div className="brief-info"></div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default App
