import React from 'react'
import "../cmps/Cmps.css"
const Cmps = () => {
    return (

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
                <div className="blob-design"></div>
            </div>

        </div>
    )
}

export default Cmps
