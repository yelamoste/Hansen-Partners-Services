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
        <Navbar />
        <div className="front-page">
          <div className="image-bg">
            <img src={placeholder} className='design-bg' id='pic2' />
            <img src={star} className='design-bg' id='pic3' />
            <img src={stars} className='design-bg' id='pic4' />
            <img src={urban} className='design-bg' id='pic5' />
          </div>
          <p className="page-name">Services</p>
          <button onClick={() => setApmt(true)} className='apmtsty'>Book an Appointment</button>
          <ApmtButton trigger={Apmt} setTrigger={setApmt} />

        </div>
        <div className="image-bg-full"></div>
        <div className="cmp-section">
          <div className="title-compre">
            <p className="text-cont-title">Comprehensive Market Plan</p>
            <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/hqguvxyyi5jciyrzy35v/page-3" alt="" className="author" />
          </div>
          <div className="main-text-cont">
            <div className="text-cont">
              <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/rmtn3r5zpsljdsncbwa4/image-007" alt="Responsive" className='image-logo-compre' />
              <p className="title">Responsive</p>
              <p className="details">I am always available via phone, text, or email.</p>
            </div>
            <div className="text-cont">
              <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/ks8ztlvw2b35q5qgs6xn/image-011" alt="Syndication" className='image-logo-compre' />
              <p className="title">Syndication</p>
              <p className="details">I market your property locally, nationally, and internationally</p>
            </div>
            <div className="text-cont">
              <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/zr3bugldblvebixagfs1/image-009" alt="Virtual Tour" className='image-logo-compre' />
              <p className="title">Virtual Tour</p>
              <p className="details">Let's make your home stand out with a high quality virtual tour.</p>
            </div>
            <div className="text-cont">
              <img src="https://res.cloudinary.com/luxuryp/images/f_auto,q_auto/dywgmsgzddtcsqxagbwh/image-013" alt="Photography" className='image-logo-compre' />
              <p className="title">Photography</p>
              <p className="details">Beautiful, high-end photography is a central part of our marketing plan for your property.</p>
            </div>
          </div>
          <div className="card-cont">

            <img src="https://res.cloudinary.com/luxuryp/images/w_1280,c_limit,f_auto,q_auto/ghtq7jtce7tsgdjtosrs/image-025" alt="" className='author-img' />
            <div className="card-cont-cont">
              <div className="cont-title">Decor Guidance & Intentional Layout</div>
              <div className="cont-details">
                <p className='cont-detail-title'>My Staging Expertise</p>
                <ul className='list'>
                  <li>Unclutter and organize your home</li>
                  <li>Neatly arrange drawers and cabinets</li>
                  <li>Keep pets outdoors or off the premises</li>
                  <li>Play soft music</li>
                </ul>
              </div>
            </div>
          </div>

        </div>
        <div className="processes">
          <div className="selling-process">
            <div className="process-title">The Selling Process</div>
            <div className="process-cont">
              <div className="process-step" id='ps1'>Initial Consultation & Planning</div>
              <div className="process-step" id='ps2'>Devise & Execute Marketing Plan</div>
              <div className="process-step" id='ps3'>Review Offers & Reach Agreement with Buyer </div>
              <div className="process-step" id='ps4'>Complete Transaction Process</div>
              <div className="process-step" id='ps5'>After-Sale Service</div>
            </div>
          </div>
          <div className="buying-process">
            <div className="process-title">The Buying Process</div>
            <div className="process-cont"></div>
          </div>
        </div>
        <div className="brief-info"></div>
        <div className="footer"></div>
      </div>
    </>
  )
}

export default App
