import React, {useState} from "react";
import Navigation from "./Navigation";
import Header from "./Header";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Card from "./Card";

function Search(){
    const [input, setInput] = useState('');
    const [found, setFound] = useState('');

    const handleInput = (event)=> {
        setInput(event.target.value)
    }

    const handleSubmit = (event) =>{
        event.preventDefault();
        if (input !== ''){
        setFound(input);
        setInput('');}
        
    }

    return(
        <div className="search">
            <form onSubmit={handleSubmit} className="search__input" >
                <input className="search--input" type="search" placeholder="Search..." value={input} onChange={handleInput}/>
                <button type='submit' className="search--button">{<FontAwesomeIcon icon={faMagnifyingGlass}/>}</button>
            </form>
            {found && 
            <div>
                <div className="search__found">
                    <p>Found for "{found}":</p>
                </div>
                <Card Count={6} button={false} />
            </div>}
        </div>
    )
};

export default Search;