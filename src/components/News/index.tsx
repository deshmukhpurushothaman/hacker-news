import React from "react";
import classes from './News.module.scss'

interface Props {
    title: string;
    author: string;
    created_at: string;
    points: number;
    url: string;
    num_comments: number;
    objectID: string;
}

export const News = (props: Props) => {
    return (
        <div className={classes.container}>
            <div className={classes.titleContainer}>
                <h3>{props.title}</h3>

            </div>
            <div className={classes.secondContainer}>
                <p>Points: {props.points}</p>
                <p>Author: {props.author}</p>
                <p>Created At: {props.created_at}</p>
                <p>No. of Comments: {props.num_comments}</p>
            </div>
        </div>
    )
}