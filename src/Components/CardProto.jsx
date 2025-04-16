import React, { useState } from "react";
import MyButton from "./MyButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping, faStar } from "@fortawesome/free-solid-svg-icons";
import { useGoods } from "../AppContext";
import useIsLargeScreen from "../LargeScreen";



function CardProto({Irl, cost, name, func, func1, id, star }){
    
    const defStar = star!== undefined? star: true;
    const computer = useIsLargeScreen();
    const [choosen, setChoosen] = useState(false);
    const [choosen1, setChoosen1] = useState(false);
    const {handleRemoveGood} = useGoods();
    const [flag, setFlag] = useState(0);
    const [flag1, setFlag1] = useState(0);

    const toggleChosen = () => {
        setChoosen(!choosen)
    }

    const toggleChosen1 = () => {
        setChoosen1(!choosen1)
    }

    const handleClick1 = () =>{
            toggleChosen();
            if(!choosen){
                func({ name, cost, Irl, id})
            }

        
    }

    const handleClick2 = () =>{
        if(flag1<1){
            setFlag1(flag1+1);
            toggleChosen1();
            if(!choosen1){
                func1({ name, cost, Irl, id})
            }
        }else{alert('Товар уже в избранном')}
        
    }



    return (
        <div>
                <div  >
                    {computer ? 
                    <div className="card">
                        <div className="card__img"><img className="card--img" src={Irl} alt="Пвв" /></div>
                        <div className="card__info">
                            <div className="card__info--title">
                                <p>{name}</p>
                            </div>
                            <div className="card__info--bottom">
                                <p>{cost}$</p>
                                <div className="card__info--buttons">
                                <MyButton className='card__info--button' text={<FontAwesomeIcon icon={faCartShopping} 
                                 onClick={handleClick1} />} choosen={choosen} />
                                {defStar && <MyButton className='card__info--button' choosen={choosen1} onClick={handleClick2} text={<FontAwesomeIcon icon={faStar}  />} />} 
                                </div>
                            </div>
                        </div>
                    </div> 
                    
                    
                    
                    
                    
                    :
                    <div className="card"><img className="card--img" src={`http://localhost:3000${Irl}`} alt="Пвв" />
                    <div className="card__info">
                        <p>{name}</p>
                        <div className="card__info--bottom">
                            <p className="card__info--title">{cost}$</p>
                            <div className="card__info--buttons">
                                <MyButton className='card__info--button' text={<FontAwesomeIcon icon={faCartShopping} 
                                 onClick={handleClick1} />} />
                                {defStar && <MyButton className='card__info--button' choosen={choosen} onClick={handleClick2} text={<FontAwesomeIcon icon={faStar}  />} />}
                            </div>
                        </div>
                    </div></div>}
                    
                </div>
        </div>

        
    );

}

export default CardProto;