import React, { useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";

function MyButton({link, text, onClick, choosen}){

    const location = useLocation();
    const pathName = location.pathname;
    const buttonRef = useRef(null);


    useEffect(() => {
        if (buttonRef.current) {
            if (link === pathName) {
            buttonRef.current.classList.add('choosen');
            } else {
            buttonRef.current.classList.remove('choosen');
          }
      }
    }, [link, pathName]);

    if (link){
        return(
            <Link className="mybutton" ref={buttonRef} to={link}><div className="myButton--text">{text}</div></Link>
        )
    }

    return(
        <button className={`mybutton ${choosen ?'choosen':''}`} onClick={onClick}><div className="myButton--text">{text}</div></button>
    )
}

export default MyButton;