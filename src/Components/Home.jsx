import React from "react";
import { Link } from "react-router-dom";
import useIsLargeScreen from "../LargeScreen";
import img1 from '../Imgs/Rectangle 11.png';
import img2 from '../Imgs/Rectangle 12.png';
import img3 from '../Imgs/Rectangle 13.png';
import img4 from '../Imgs/Rectangle 14.png';
import Card from "./Card";

function Home(){
    const Computer = useIsLargeScreen();

    return(
        <div className="home">
            <div className="home__content">
                <div className="home__banner">
                    <p className="home__banner--text">Hey good looking</p>
                </div>
                {Computer?
                <div>
                <div><p className="home--text">---- Assortiment ----</p></div>
                <div className="home__cards">
                    <Card button={true} Count={12} />
                </div>
                </div>

                :

                <div><p className="home--text">---- Assortiment ----</p>
                <div className="home__cards">
                    <div className="home__cards--col1">
                        <Link to='/counter'><img src={img1} alt="" /></Link>
                        <Link to='/counter'><img src={img4} alt="" /></Link>
                    </div>
                    <div className="home__cards--col2">
                        <Link to='/counter'><img src={img3} alt="" /></Link>
                        <Link to='/counter'><img src={img2} alt="" /></Link>
                    </div>
                </div></div>}
                
            </div>
            
        </div>
    )
}

export default Home;