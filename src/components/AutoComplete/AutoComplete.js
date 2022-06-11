// import { useState } from "react"
// import { useEffect } from "react";
// import { useNavigate } from "react-router-dom";
// import { useProduct } from "../../context/ProductContext/ProductContext";

import "./AutoComplete.css"

export const AutoComplete = () => {

    // const { prodState } = useProduct();
    // const suggestion = prodState.suggestion;
    // const [filteredSuggestionList, setFilteredSuggestionList] = useState([]);
    // const [showSuggestion, setShowSuggestion] = useState(false);
    // const [input, setInput] = useState("");

    // const { prodDispatch } = useProduct();
    // const navigate = useNavigate();

    // const handleChange = (e) => {
    //     const userInput = e.target.value;
    //     const unlinked = suggestion.filter((el) => el.toLowerCase().indexOf(userInput.toLowerCase()) > -1);

    //     setFilteredSuggestionList(unlinked);
    //     setInput(userInput);
    //     setShowSuggestion(true);
    // }
    // const handleClick = (e) => {
    //     setFilteredSuggestionList([])
    //     setInput(e.target.innerText);
    //     setShowSuggestion(false);
    //     prodDispatch({ type: "SEARCH_TEXT", payload: e.target.innerText });
    //     navigate("/search")
    // }
    // const handleKeyDown = (e) => {

    //     if (e.keyCode === 13 && input.trim().length) {
    //         prodDispatch({ type: "SEARCH_TEXT", payload: e.target.value });
    //         navigate("/search")
    //     }

    // }

    // const handleSearch = (e) => {
    //     if (input.trim().length) {

    //         prodDispatch({ type: "SEARCH_TEXT", payload: input });
    //         navigate("/search")
    //     }
    // }

    return <div className="search-con">
        {/* value={input} onChange={(e) => handleChange(e)} */}
        {/* onKeyDown={(e) => handleKeyDown(e)} */}
        <input type="search"

            placeholder={"Type To search"} />
        {/* onClick={() => handleSearch()} */}
        <span className="material-icons-outlined search-icon" > search </span>
        <span className="material-symbols-outlined sort-conf">
            tune
        </span>
        {/* {
            showSuggestion && input && <>
                {
                    filteredSuggestionList.length ? <ul className="auto-input">
                        {
                            filteredSuggestionList.map((el, idx) => {
                                return <li key={idx} onClick={(e) => handleClick(e)}>{el}</li>
                            })
                        }
                    </ul> : <ul className="auto-input"><li><em>Sorry, No search results for {input}</em></li></ul>
                }
            </>
        } */}

    </div>
}