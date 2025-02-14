import React from "react";

export default function FinishingOns({props,toggleButton}){
    return (
            props.checked ? 
            <div className="finishing-ons-card"> 
                <p className="ons-name">{props.type}</p>
                <p className="price">+${toggleButton ? `${props.price*10}/yr` : `${props.price}/mo`}</p>
            </div>
            :
            null
    )
}