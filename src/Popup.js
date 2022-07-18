import React, { useState } from "react";

const Popup = ({ style, onClick }) => {
    return (<button
        className="popup"
        style={style}
        onClick={onClick}
    ></button>)
};

export default Popup;