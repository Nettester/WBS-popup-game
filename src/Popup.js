import React from "react";

const Popup = () => {
    const popupStyle = {left:"10%", top: "80%"};

    return (
        <div>
            <button className="popup" style={popupStyle}>Click here!</button>
        </div>
    )
};

export default Popup;