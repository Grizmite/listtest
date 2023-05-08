import React from "react";
import { useState } from "react";

function Addtodo(){
    
    const [inputValue, setInputValue] = useState('');
    
    const handleChange = (event) =>{
        setInputValue(event.target.value);
    };
    
    const handleClick = () =>{
        console.log(inputValue);
    };
    
    
    
    return(
            <div>
                <input placeholder="Write something" value={inputValue} onChange={handleChange} />
                <button onClick={handleClick}>Add</button>
            </div>

    );
}

export default Addtodo;