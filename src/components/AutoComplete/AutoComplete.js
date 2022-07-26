
import { useState } from "react";
import { useDispatch } from "react-redux"
import { useNavigate } from "react-router-dom";
import { setSearchFilter, setShowFilter } from "../../features/notesSlice";
import "./AutoComplete.css"

export const AutoComplete = ({ suggestions }) => {

    const dispatch = useDispatch();
    const navigate = useNavigate();
    const handleConfig = () => {
        dispatch(setShowFilter(true))
    }
    const [filteredSuggestion, setFiltereSuggestion] = useState([]);
    const [activeSuggestionIndex, setActiveSuggestionIndex] = useState(0);
    const [showSuggestion, setShowSuggestion] = useState(false);
    const [searchText, setSearchText] = useState("");

    const handleSearch = (e) => {
        setSearchText(e.target.value);
        setFiltereSuggestion(suggestions.filter((el) => el.toLowerCase().indexOf(e.target.value.toLowerCase()) > -1))
        setShowSuggestion(true);
    }

    const handleSearchText = (e) => {
        setSearchText(e.target.innerText);
        setFiltereSuggestion([]);
        setShowSuggestion(false);
        dispatch(setSearchFilter(e.target.innerText))
        navigate("/filter")
    }

    const handlekeyDown = (e) => {
        if (e.keyCode === 13) {
            setSearchText(filteredSuggestion[activeSuggestionIndex]);
            setFiltereSuggestion([]);
            setShowSuggestion(false)
        }
        else if (e.keyCode === 38) {
            if (activeSuggestionIndex === 0) {
                return;
            }
            else {
                setActiveSuggestionIndex(activeSuggestionIndex - 1);
            }

        }
        else if (e.keyCode === 40) {
            if (activeSuggestionIndex === filteredSuggestion.length - 1) {
                return;
            }
            else {
                setActiveSuggestionIndex(activeSuggestionIndex + 1);
            }
        }

    }

    const SuggestionList = () => {
        return <>
            {filteredSuggestion.length ?
                <ul>
                    {
                        filteredSuggestion.map((el, idx) => {
                            return <li key={idx} className={activeSuggestionIndex === idx ? "auto-input" : ""} onClick={handleSearchText}>{el}</li>
                        })
                    }

                </ul> :

                <ul className="auto-input">
                    <li>
                        <em>Sorry, No search results for {searchText}</em>
                    </li>
                </ul>}
        </>


    }

    return <div className="search-con">
        <input type="text" placeholder={"Type title of note"} value={searchText} onChange={handleSearch} onKeyDown={handlekeyDown} />
        <span className="material-icons-outlined search-icon" > search </span>
        <span className="material-symbols-outlined sort-conf" onClick={handleConfig}>
            tune
        </span>
        {
            showSuggestion && searchText && <SuggestionList />
        }
    </div>
}