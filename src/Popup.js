import React, { useState } from "react";

const Popup = ({xLeft,yTop}) => {
    
    console.log({"left": xLeft + " " + yTop})
    const [left, setLeft] = useState(xLeft);
    const [top, setTop] = useState(yTop);
 
    const popupStyle = {left: left+"%", top: top+"%"};

    

    const randomNum = (max, min) => {
        return Math.floor(Math.random()*(max - min +1) + min)
    }

    const clickHandler = () => {
        const min = 5;
        const max = 80;
        const randomLeft = randomNum(min,max);
        const randomTop = randomNum(min,max);

        setLeft(randomLeft);
        setTop(randomTop);
    }
    return (
        <div>
            <button onClick={clickHandler} className="popup" style={popupStyle}>Click me!</button>
        </div>
    )
};

export default Popup;