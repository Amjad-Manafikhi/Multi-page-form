

import { useEffect, useState } from "react"

export default function AddingEffect({prevNumber, newNumber}) {
    const[value, setValue] = useState(prevNumber);
    useEffect(() => {
        
        if (value == newNumber) return; 
       
        const interval = setInterval(() => {
            setValue((prev) => {
                if (prev === newNumber) {
                    clearInterval(interval);
                    return prev;
                }
                if(newNumber>prevNumber)return prev + 1;
                return prev - 1
            });
        }, 500/Math.abs(newNumber-prevNumber)); // Faster increment

        return () => clearInterval(interval);
  }, [value, newNumber]);
    return (
        value
    ) 
}


