import React, { useEffect, useState } from "react";
import { useGoods, useStars } from "../AppContext";
import img1 from '../Imgs/Cloth1.png';
import img2 from '../Imgs/Cloth2.png';
import img3 from '../Imgs/Cloth3.png';
import img4 from '../Imgs/cloth4.png';
import img5 from '../Imgs/Cloth5.png';
import img6 from '../Imgs/Cloth6.png';
import img7 from '../Imgs/Cloth7.png';
import img8 from '../Imgs/Cloth8.png';
import img9 from '../Imgs/Cloth9.png';
import CardProto from "./CardProto";


const name = {
    1: 'Classic Tee',
    2: 'Skinny Jeans',
    3: 'Oversized Sweatshirt',
    4: 'Oxford Shirt',
    5: 'Summer Dress',
    6: 'Windbreaker Jacket',
    7: 'Sport Shorts',
    8: 'Chino Pants',
    9: 'Kangaroo Hoodie',
};

const cost = {
    1: '25',
    2: '75',
    3: '50',
    4: '60',
    5: '80',
    6: '90',
    7: '30',
    8: '70',
    9: '65',
};

const imgs = {
    1: img1,
    2: img2,
    3: img3,
    4: img4,
    5: img5,
    6: img6,
    7: img7,
    8: img8,
    9:img9
}

function getRandomItem(obj) {
    const keys = Object.keys(obj);
    const randomIndex = Math.floor(Math.random() * keys.length);
    return (obj[keys[randomIndex]])
}


function Card({button, Count}) {
    const [cards, setCards] = useState([]); // Состояние для хранения карточек
    const {handleAddGood} = useGoods();
    const {handleAddStar} = useStars();

    const generateCards = (num) => {
        const newCards = [];
        for (let i = 0; i < num; i++) {
            const randomName = getRandomItem(name);
            const randomCost = getRandomItem(cost);
            const randomImg = getRandomItem(imgs);
            newCards.push({name:randomName, cost:randomCost, imgIrl:randomImg}); // Сохраняем данные
        }
        setCards(newCards); // Обновляем состояние
    };

    useEffect(() =>generateCards(Count), [Count]);

    const funcCard = ({ name, cost, Irl})=>handleAddGood({id:new Date().getMilliseconds(), name:name, cost:cost, cImg:Irl})
    const func1Card = ({ name, cost, Irl})=>handleAddStar({id:new Date().getMilliseconds(), name:name, cost:cost, cImg:Irl})
    

    return (
        <div>
            <div className="cards">
            {cards.map((card, index) => (
                <CardProto name={card.name} cost={card.cost} Irl={card.imgIrl} func={funcCard} func1={func1Card} />
            ))}
            </div>
            {button && <button className="mybutton more" onClick={() =>generateCards(Count)}><p>More</p></button>}
        </div>
    )
        }

export default Card;