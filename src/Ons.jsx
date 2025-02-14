import React from "react";

export default function Ons (props){
    
    const shadow = {
        WebkitBoxShadow: "0px 10px 29px -12px rgba(0,0,0,0.6)", 
        MozBoxShadow: " 0px 10px 29px -12px rgba(0,0,0,0.6)",   
        boxShadow: "0px 10px 29px -12px rgba(0,0,0,0.6)"      
      };
      
    const style = {
        borderColor: props.checked ? "blue" : "rgb(150, 150, 150)",
        backgroundColor: props.checked ? "rgb(239, 241, 250)" : "white",
        ...(props.checked ? shadow : null) // Only add shadow if props.shadow is true
      };

    return (
        <label htmlFor={props.type} className="ons-container"  style={style}>
            <input type="checkbox" name="info" checked={props.checked} id={props.type} onChange={() => props.handleOns((props.type))}  />
            <div className="ons-discription">
                <h4>{props.type}</h4>
                <p>{props.discription}</p>
            </div>
            <p className="ons-price">+${props.toggleButton ? `${props.price*10}/yr` : `${props.price}/mo`}</p>
        </label>
    )
}