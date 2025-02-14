import React from "react";
import FinishingOns from "./FinshingOns";

export default function Finish({ons , plans , toggleButton , handleChangePlan}){
    let subsum=0;
    const finishingPlan=plans.find( (elem) => elem.checked===true )
    const finishingOnsElements=ons.map((elem) =>{ 
        elem.checked ? subsum+=elem.price: null;
        return <FinishingOns props={elem} key={elem.type} toggleButton={toggleButton}/>}
    ) 
    const sum=toggleButton ? (subsum + finishingPlan.price) * 10 :
     subsum + finishingPlan.price;
    

    return(
        <>
            <h4>Finshing up</h4>
            <p>Double-check everything looks OK before confirming.</p>
            <div className="receipt">
                <div className="plan-receipt">
                    <p className="plan-name">{finishingPlan.type}</p>
                    <p className="price">${toggleButton ? `${finishingPlan.price*10}/yr` : `${finishingPlan.price}/mo`}</p>
                </div>
                <button className="change-btn" onClick={handleChangePlan}>Change</button>
                <hr />
                <div className="ons-receipt">
                 {finishingOnsElements}
                </div>


            </div>
                <div className="total">
                    <p>Total (per {toggleButton ? "year" : "month"})</p>
                    <p className="total-sum">${sum}</p>
                </div>


        </>
    )
}