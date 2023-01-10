import React from "react";
import { SearchBar } from "../SearchBar";
import classes from './Navbar.module.scss'

export const Navbar = () => {
    return (
        <div className={classes.container}>
            <SearchBar />
        </div>
    )
}