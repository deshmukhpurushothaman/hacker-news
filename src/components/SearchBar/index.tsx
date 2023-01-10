import React from "react";
import debounce from 'debounce'
import SearchIcon from '@mui/icons-material/Search'
import classes from './SearchBar.module.scss'

interface Props {
    onUpdate: (query: string) => any
}

export const SearchBar = (props: Props) => {

    return (
        <div className={classes.searchContainer}>
            <input
                type="text"
                placeholder="Search Hacker News"
                name="search"
                onChange={(e) => debounce(props.onUpdate(e.target.value), 2000)}
            />
            <button
            >
                <SearchIcon />
            </button>
        </div>
    )
}