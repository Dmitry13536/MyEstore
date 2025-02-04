import React from "react";
import MyButton from './MyButton';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBell, faCartShopping, faHouse, faMagnifyingGlass, faStar, faUser } from "@fortawesome/free-solid-svg-icons";
import useIsLargeScreen from "../LargeScreen";
import Sidebutton from "./Sidebutton";
import { useSidebar } from "../AppContext";
import { useNavigate } from "react-router-dom";

function Navigation(){
    const {toggleVisiable} = useSidebar();
    const computer = useIsLargeScreen();
    const navigate = useNavigate();

    return(
        
        <div className="navigation__aria">
            {computer? 
            
            <div className="navigation" >
                <MyButton onClick={toggleVisiable} text={<FontAwesomeIcon icon={faUser}/>} />
                <MyButton onClick={()=>navigate('/cart')}  text={<FontAwesomeIcon icon={faCartShopping} />} />
                <MyButton onClick={()=>navigate('/featured')} text={<FontAwesomeIcon icon={faStar} />} />
                <MyButton  text={<FontAwesomeIcon icon={faBell} />} />

            </div> 
            
            
            
            
            :
            
            <div  className="navigation"><MyButton link={'/'} text={<FontAwesomeIcon icon={faHouse} />} />
            <MyButton link={'/notif'} text={<FontAwesomeIcon icon={faBell} />} />
            <MyButton link={'/search'} text={<FontAwesomeIcon icon={faMagnifyingGlass} />} />
            <MyButton link={'/Cart'} text={<FontAwesomeIcon icon={faCartShopping} />} />
            <MyButton link={'/featured'} text={<FontAwesomeIcon icon={faStar} />} /></div>}
        </div>
    )
}

export default Navigation;