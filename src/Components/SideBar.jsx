import React, { useEffect, useRef} from "react";
import { useSidebar } from "../AppContext";
import { Link } from "react-router-dom";
import useIsLargeScreen from "../LargeScreen";


function SideBar(){

    const {visible, setVisiable, toggleVisiable} = useSidebar();
    const SidebarRef = useRef(null);
    const computer = useIsLargeScreen();
    

    useEffect(()=>{
        const ClickOutSidebar = (event)=>{
            if (SidebarRef.current && !SidebarRef.current.contains(event.target)){setVisiable(false)}
        }

        document.addEventListener('click', ClickOutSidebar);
        return () =>{document.removeEventListener('click', ClickOutSidebar)};
    },[setVisiable])



    return(
        <div className={`sidebar ${visible?'visible':''}`} ref={SidebarRef}>
            <header>Lanega Shop</header>
            <div className="sidebar__top">
                <Link onClick={toggleVisiable} to='/'>•  Home</Link>
                <Link onClick={toggleVisiable} to='/cart'>•  Cart</Link>
                {!computer && <Link onClick={toggleVisiable} to='/notif'>•  Notifications</Link>}
                <Link onClick={toggleVisiable} to='/feature'>•  Favorites</Link>
                {!computer && <Link onClick={toggleVisiable} to='/search'>•  Search</Link>}
                <Link onClick={toggleVisiable} to='/counter'>•  Products</Link>
                
            </div>
            <div className="sidebar__bottom">
                <p>Something</p>
                <p>Something</p>
                <p>Something</p>
            </div>
        </div>
    )
};

export default SideBar;