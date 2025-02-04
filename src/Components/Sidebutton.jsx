import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { useSidebar } from "../AppContext";

function Sidebutton(){
    const {toggleVisiable} = useSidebar();

    return(
        <p onClick={toggleVisiable} className='headder--button'><FontAwesomeIcon icon={faBars} /></p>
    )
};

export default Sidebutton;