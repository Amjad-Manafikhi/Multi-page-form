import React from "react";
import Ons from "./Ons";
export default function Add({ons,setOns,toggleButton}){



    function handleOns(type){
        setOns((prev)=>
            prev.map(elem =>
                elem.type===type ? {...elem,checked:!elem.checked} : elem
            )
        )
    }

    const onsElements=ons.map((elem) =>
            <Ons 
                type={elem.type} 
                discription={elem.discription} 
                key={elem.type} 
                handleOns={handleOns}
                checked={elem.checked}
                price={elem.price}
                toggleButton={toggleButton}
                />
        )
    
    return(
        <>
            <h1>Pick add-ons</h1>
            <p>Add-ons help enhance your gaming experience.</p>
            <section>
                {onsElements}
            </section>
        </>

    )
}