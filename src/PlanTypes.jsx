import React from "react";
import Arcade from '/icon-arcade.svg';
import Advanced from '/icon-advanced.svg';
import Pro from '/icon-pro.svg';
import "./PlanTypes.css"
import AddingEffect from './AddingEffect.jsx';
export default function(props) {

    const images = {
        Arcade: Arcade,
        Advanced: Advanced,
        Pro: Pro,
      };
      const shadow = {
        WebkitBoxShadow: "0px 10px 29px -12px rgba(0,0,0,0.6)", 
        MozBoxShadow: " 0px 10px 29px -12px rgba(0,0,0,0.6)",   
        boxShadow: "0px 10px 29px -12px rgba(0,0,0,0.6)"      
      };

      const style = {
        borderColor: props.checked ? "blue" : "rgb(150, 150, 150)",
        backgroundColor: props.checked ? "rgb(239, 241, 250)" : "white",
        height:props.toggleButton ? "127px" : "112px",
        ...(props.checked ? shadow : null) // Only add shadow if props.shadow is true

      };

      const [showFreeText, setShowFreeText] = React.useState(false);

        React.useEffect(() => {
        if (props.toggleButton) {
            const timer = setTimeout(() => setShowFreeText(true), 50);
            return () => clearTimeout(timer); // Cleanup
        } else {
            setShowFreeText(false);
        }
        }, [props.toggleButton]);
    
    return (
        <div className="plan-container" onClick={() => props.handlePlan((props.type))} style={style}>
            <img src={images[props.type]}   alt={props.type} width="33"  />
            <h4>{props.type}</h4>
            <p>${props.toggleButton ? 
              <AddingEffect prevNumber={props.price} newNumber={props.price*10} time={500}/>
              : <AddingEffect prevNumber={props.price*10} newNumber={props.price} time={500}/>}{props.toggleButton ? "/yr" : "/mo"}</p>
            {showFreeText&&<p className="free" >2 months free</p>}
        </div>
    )
}