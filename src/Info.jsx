import React from "react";
import "./Info.css"

export default function () {

    return(
        <>
            <h1>Personal Info</h1>
            <p>Please provide your name, email address, and phone number.</p>
            <label htmlFor="name">Name</label>

            <input type="text" id="name" name="info" placeholder="e.g. Amajd Manafikhi"/>
            
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="info" placeholder="e.g. amjad@gmail.com"/>
            
            <label htmlFor="phone">Phone Number</label>
            <input type="tel" id="phone" name="info" placeholder="e.g. 123-456-7890"
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" required />
        
        </>
    )
}