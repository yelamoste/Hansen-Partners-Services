import React from 'react'

function ApmtButton(props) {
    return ( props.trigger) ? (
        <div className="main-button-cont">
            <div className="text-cont">
                <button className="exit-cont" onClick={()=> props.setTrigger(false)}>x</button>
                {props.children}
                <div className="form-cont">
                    <button className="submit">Submit</button>
                </div>
            </div>
        </div>
     ) : "";
    
}

export default ApmtButton