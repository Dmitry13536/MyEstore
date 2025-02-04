import React, { useEffect, useState } from "react";
import { useGoods } from "../AppContext";
import CardProto from "./CardProto";

const Cart = () =>{
    const {goods, handleRemoveGood} = useGoods();
    const [cost, setCost] = useState(0); 
    
    useEffect(()=>{
        let newCost = 0;
        goods.forEach(element => {
            newCost+=+element.cost;
        });
        setCost(newCost);
    },[goods])

    const func = ({id}) => handleRemoveGood(id);


    return(
        <div className="cart">
            <p className="cart--title">Cart</p>
            <div className="cart__goods">
            {goods.length > 0 ? goods.map(good => (
                <div className="cart__goods__good">
                    <CardProto name={good.name} cost={good.cost} Irl={good.cImg} func={func} id={good.id} star={false} />
                </div>
            )):(
                <div className="empty--content">
                    <p>Nothing here</p>
                </div>
            )}
            </div>
            <div className="cart__payment">
                <p>{cost}$</p>
                <button className="cart__payment--button">Buy</button>
            </div>
        </div>
    )
};

export default Cart;