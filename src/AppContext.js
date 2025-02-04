import React, { createContext, useContext, useState } from "react";

const cartsContext = createContext();
export const useCost = () => useContext(cartsContext);

const goodsContext = createContext();
export const useGoods = () => useContext(goodsContext);

const starsContext = createContext();
export const useStars = () => useContext(starsContext);

const SidebarContext = createContext();
export const useSidebar = () => useContext(SidebarContext);

export const Provider = ({children}) => {

    const [goods, setGoods] = useState([]);

    const handleAddGood = (good) => {
        setGoods([...goods, good]);
        console.log(goods)
    }

    const handleRemoveGood = (goodId) => {
        setGoods(goods.filter(good => good.id !== goodId))
        console.log(goods)
    }

    const handleHardRemoveGood = {}

    const [visible, setVisiable] = useState(false);
    const toggleVisiable = (event) =>{
        event.stopPropagation();
        setVisiable(!visible);
    }

    const [stars, setStars] = useState([]);
    
    const handleAddStar = (star) => {
        setStars([...stars, star]);
        console.log(stars)
    }

    const handleRemoveStar = (starId) => {
        setStars(goods.filter(star => star.id !== starId))
        console.log(goods)
    }



    const goodsValues = {goods, handleAddGood, handleRemoveGood};
    const sidebarValues = {visible, toggleVisiable, setVisiable};
    const starValue = {stars, handleAddStar, handleRemoveStar};

    return (
        <starsContext.Provider value={starValue}>
        <SidebarContext.Provider value={sidebarValues}>
            <goodsContext.Provider value={goodsValues}>
                
                    {children}
                
            </goodsContext.Provider>
        </SidebarContext.Provider>
        </starsContext.Provider>
    )
};
