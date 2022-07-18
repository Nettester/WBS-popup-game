import React from "react";

const Popup = ({ style, onClick }) => {
    return (<button
        className="popup"
        style={style}
        onClick={onClick}
    >Click here!</button>)
};

export default Popup;