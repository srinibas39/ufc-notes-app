import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { loadFilter, setSearchFilter, setShowFilter } from "../../features/notesSlice";
import "./FilterNote.css";

export const FilterNote = () => {

    const { allTags } = useSelector((state) => state.notes);
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const [filterOption, setFilterOption] = useState({
        sort: "",
        labelFilter: [],
        priorityFilter: []
    })


    const handleFilter = (filteredValue) => {
        if (filteredValue === "Priority") {
            setFilter(filteredValue)
        }
        else {
            setFilter(filteredValue)
        }
    }
    const [filter, setFilter] = useState("Priority");

    const handleClear = () => {
        setFilter("Priority");
    }

    const handlePriorityFilter = (prior) => {
        filterOption.priorityFilter.includes(prior) ?
            setFilterOption({ ...filterOption, priorityFilter: filterOption.priorityFilter.filter((el) => el !== prior) }) :
            setFilterOption({ ...filterOption, priorityFilter: [...filterOption.priorityFilter, prior] })

    }
    const handleLabelFilter = (label) => {
        filterOption.labelFilter.includes(label) ?
            setFilterOption({ ...filterOption, labelFilter: filterOption.labelFilter.filter((el) => el !== label) }) :
            setFilterOption({ ...filterOption, labelFilter: [...filterOption.labelFilter, label] })
    }
    const handleSortFilter = (sortType) => {
        setFilterOption({ ...filterOption, sort: sortType })
    }
    const handleAllFilter = () => {
        dispatch(setSearchFilter(""));
        dispatch(setShowFilter(false));
        dispatch(loadFilter(filterOption));
        navigate("/filter");

    }


    return <div className="filter-container">
        <div className="filter">
            <div className="filter-header">
                <h3>{"Sort & Filter Notes"}</h3>
                <span className="material-symbols-outlined" onClick={() => dispatch(setShowFilter(false))}>
                    close
                </span>
            </div>
            <div className="sort-by">
                <label htmlFor="sort-list">Sort By</label>
                <select className="sort-list" onClick={(e) => handleSortFilter(e.target.value)}>
                    <option>Oldest First</option>
                    <option>Newest First</option>
                </select>
            </div>
            <div className="filter-by">
                <label htmlFor="filter-list">Filter By</label>
                <select className="filter-list" onChange={(e) => handleFilter(e.target.value)}>
                    <option>Priority</option>
                    <option>Label</option>
                </select>
            </div>
            <div className="select-labels">
                {
                    filter === "Priority" ? <>
                        <p> Select Priority </p>
                        <label>
                            <input type="checkbox" name="label" value="High Priority" onClick={(e) => handlePriorityFilter(e.target.value)}></input> High Priority
                        </label>
                        <label>
                            <input type="checkbox" name="label" value="Medium Priority" onClick={(e) => handlePriorityFilter(e.target.value)}></input> Medium Priority
                        </label>
                        <label>
                            <input type="checkbox" name="label" value="Low Priority" onClick={(e) => handlePriorityFilter(e.target.value)}></input> Low Priority
                        </label>
                    </> : <>

                        <p> Select Label </p>
                        <div style={{ display: "flex", flexDirection: "column" }}>
                            {
                                allTags && allTags.map((tag) => {
                                    return <label key={tag}>
                                        <input type="checkbox" name="label" value={tag} onClick={(e) => handleLabelFilter(e.target.value)}></input> {tag}
                                    </label>
                                })
                            }
                        </div>
                    </>
                }

            </div>
            <div className="filter-buttons">
                <button onClick={handleClear}>Clear</button>
                <button onClick={() => handleAllFilter()}> Done</button>
            </div>
        </div>
    </div >
}