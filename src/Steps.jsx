import React from "react";
import "./Steps.css"

export default function Steps (props){
    const style={backgroundColor:"rgb(191,226,253)" , color:"rgb(72,62,255)"};
    const [stepName,setStepName]= React.useState(true);
    React.useEffect(()=>{
        function handleResize (width) {
            console.log(width);
            if (Math.round(width) >= 650) {
              setStepName(true);
            } else {
              setStepName(false);
            }
          }; 
        
          window.addEventListener('resize' , ()=> handleResize(window.innerWidth));
          return window.removeEventListener('resize' ,() => handleResize(window.innerWidth));
        
    },[])


    return(
        <>
            <div className="step-card" onClick={()=>props.onClick(props.id)}>
                <div className="step-circle" style={props.checked ?style: null }>{props.id}</div>
                {stepName && <div className="step-name">
                    <p className="step-number">Step {props.id}</p>
                    <h4 className="step-value">{props.value}</h4>
                </div>}
            </div>
        </>
    )


}