import React from 'react'
import "../frontpage/FrontPage.css"
import placeholder from '/src/assets/placeholder.png';
import star from '/src/assets/star.png';
import stars from '/src/assets/stars.png';
import urban from '/src/assets/urban.png';
import { useState } from 'react';
import ApmtButton from '../appointment/ApmtButton';

const FrontPage = () => {
    const [Apmt, setApmt] = useState(false);
    return (
        <>
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

        </>
    )
}

export default FrontPage