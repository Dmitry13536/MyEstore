import React from "react";
import { useGoods, useStars } from "../AppContext";
import CardProto from "./CardProto";

function Featured(){
    const {stars} = useStars();
    const {handleAddGood} = useGoods();

    const funcCard = ({ name, cost, Irl})=>handleAddGood({id:new Date().getMilliseconds(), name:name, cost:cost, cImg:Irl})


    return(
        <div className="empty" >
            <div className="empty--title">Featured</div>
            <div className="cart__goods">
                {stars.length === 0 ? 
                <div className="empty--content">Nothing here</div>: 
                stars.map(star => 
                (<div>
                    <CardProto name={star.name} cost={star.cost} Irl={star.cImg} func={funcCard}  id={star.id} star={false} />
                </div>))}
            </div>
        </div>
    )
};

export default Featured;