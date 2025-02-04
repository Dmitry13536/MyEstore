import React, {useRef, useEffect, useState} from "react";
import Sidebutton from './Sidebutton';
import useIsLargeScreen from "../LargeScreen";
import Navigation from './Navigation';
import { Link } from "react-router-dom";
// import ReactVisibilitySensor as Sens from "react-visibility-sensor";

function Header(){
    const headerRef = useRef(null);
    const [sticky, setSticky] = useState(false);
    const computer = useIsLargeScreen();

    useEffect(()=>{
        const handlyScroll = ()=>{
            const scrollValue = headerRef.current.offsetHeight ;

            if (window.scrollY > scrollValue ) {
                setSticky(true)
            }else {setSticky(false)}
        }
        window.addEventListener('scroll', handlyScroll);

        return () =>{
            window.removeEventListener('scroll', handlyScroll);
        };
    }, [])

    return(
        
        <div className={`headder ${sticky && !computer?'sticky':''}`} ref={headerRef}>
            
            {!computer && <Sidebutton  />}
            <Link to='/'><h1 className="headder--title">Lanega Shop</h1></Link>
            {computer && <Navigation />}
        </div>
        
    )
}

export default Header;