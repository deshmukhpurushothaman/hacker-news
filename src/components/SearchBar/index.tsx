import React from "react";
import SearchIcon from '@mui/icons-material/Search'
import classes from './SearchBar.module.scss'

export const SearchBar = () => {
    return (
        <div className={classes.searchContainer}>
            <input
                type="text"
                placeholder="Search Hacker News"
                name="search"
            // onChange={handleSearch}
            // onKeyPress={(e) => handleEnter(e)}
            />
            <button
            // onClick={handleClose}
            >
                <SearchIcon />
            </button>
        </div>
    )
}