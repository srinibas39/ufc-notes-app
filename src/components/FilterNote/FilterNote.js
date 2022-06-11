import "./FilterNote.css"
export const FilterNote = () => {
    return <div className="filter-container">
        <div className="filter">
            <div className="filter-header">
                <h3>{"Sort & Filter Notes"}</h3>
                <span className="material-symbols-outlined">
                    close
                </span>
            </div>
            <div className="sort-by">
                <label htmlFor="sort-list">Sort By</label>
                <select className="sort-list">
                    <option>Newest First</option>
                    <option>Oldest First</option>
                </select>
            </div>
            <div className="filter-by">
                <label htmlFor="filter-list">Filter By</label>
                <select className="filter-list">
                    <option>option1</option>
                    <option>option2</option>
                    <option>option3</option>
                </select>
            </div>
            <div className="select-labels">
                <p> Select label </p>
                <label>
                    <input type="checkbox" name="label"></input> choice 1
                </label>
                <label>
                    <input type="checkbox" name="label"></input> choice 2
                </label>
                <label>
                    <input type="checkbox" name="label"></input> choice 3
                </label>
            </div>
            <div className="filter-buttons">
                <button>Clear</button>
                <button>Done</button>
            </div>
        </div>
    </div>
}