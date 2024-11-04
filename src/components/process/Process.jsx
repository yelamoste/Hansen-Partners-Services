import React from 'react'
import '../process/Process.css'
const Process = () => {
    return (

        <div className="processes">
            <div className="selling-process">
                <div className="process-title">The Selling Process</div>
                <div className="process-cont">
                    <div className='step' id='step-sell'></div>
                    <div className="step-cont">
                        <div className="process-step" id='ps1'>Initial Consultation & Planning <br /> 1</div>
                        <div className="process-step" id='ps2'>Devise & Execute Marketing Plan <br /> 2</div>
                        <div className="process-step" id='ps3'>Review Offers & Reach Agreement with Buyer <br /> 3</div>
                        <div className="process-step" id='ps4'>Complete Transaction Process <br /> 4</div>
                        <div className="process-step" id='ps5'>After-Sale Service <br /> 5</div>
                    </div>
                </div>
            </div>
            <div className="buying-process">
                <div className="process-title">The Buying Process</div>
                <div className="process-cont">
                    <div className='step' id="step-buy"></div>
                    <div className="step-cont">
                        <div className="process-step" id='ps1'>Initial Consultation & Planning <br /> 1</div>
                        <div className="process-step" id='ps2'>Search for a Home & Get Pre-Approved <br /> 2</div>
                        <div className="process-step" id='ps3'>Submit an Offer <br /> 3</div>
                        <div className="process-step" id='ps4'>Complete Settlement Process <br /> 4</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Process