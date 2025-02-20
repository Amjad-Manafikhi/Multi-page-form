import React from "react";
import arcade from '/icon-arcade.svg';
import advanced from '/icon-advanced.svg';
import pro from '/icon-pro.svg';
import PlanTypes from "./PlanTypes";
export default function Plan({checkedPlan,setCheckedPlan,toggleButton,setToggleButton,plans}){
    
    const style={
        color:"rgb(2,41,90)"
    }
    const moveStyle={
        left: "31px"
    }
    
    

    function handlePlan(type){
        setCheckedPlan(type);
    }
    const plansElements=plans.map((elem) =>
        <PlanTypes 
            type={elem.type} 
            price={elem.price} 
            key={elem.type} 
            toggleButton={toggleButton} 
            handlePlan={handlePlan}
            checked={elem.checked}
            />
    )

    return(
        <>
            <h1>Select your plan</h1>
            <p>You have the option of monthly of yearly billing</p>
            <section className="plans-section">
                {plansElements}

            </section>
            <div className="time-duration" style={toggleButton ? {marginTop:"30px"} : null}>
                <input type="checkbox" id="test" className="toggle" onChange={() =>setToggleButton((prev)=>!prev) }/>
                <p className="time" style={!toggleButton ? style : null}>Monthly</p>
                <label htmlFor="test" className="label">
                    <div className="ball" style={toggleButton ? moveStyle : null}></div>
                </label>

                <p className="time" style={toggleButton ? style : null}>Yearly</p>
                
            </div>
            
        </>
    )
}