import React from "react";
import { SearchBar } from "../SearchBar";
import classes from './Navbar.module.scss'

interface Props {
    onSearchUpdate: (query: string) => any
}

export const Navbar = (props: Props) => {
    return (
        <div className={classes.container}>
            <SearchBar onUpdate={props.onSearchUpdate} />
        </div>
    )
}