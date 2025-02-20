import React from "react";
import "./Steps.css"

export default function Steps (props){
    const style={backgroundColor:"rgb(191,226,253)" , color:"rgb(72,62,255)"};
    /*
    onther way to handle step-name on mobile design
    const [stepName,setStepName]= React.useState(()=> handleResize(window.innerWidth));
    function handleResize (width) {
        console.log(width);
        if (Math.round(width) >= 650) {
          return true;
        } else {
          return false;
        }
      }; 
    React.useEffect(()=>{
        
          window.addEventListener('resize' , ()=> setStepName(handleResize(window.innerWidth)));
          return window.removeEventListener('resize' ,() => setStepName(handleResize(window.innerWidth)));
        
    },[])*/


    return(
        <>
            <div className="step-card" onClick={()=>props.onClick(props.id)}>
                <div className="step-circle" style={props.checked ?style: null }>{props.id}</div>
                <div className="step-name">
                    <p className="step-number">Step {props.id}</p>
                    <h4 className="step-value">{props.value}</h4>
                </div>
            </div>
        </>
    )


}