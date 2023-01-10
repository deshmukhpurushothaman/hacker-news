import React from "react";
import classes from './Comments.module.scss'

interface Props {
    title: string | null;
    text: string | null;
    author: string;
    created_at: string;
}

export const Comments = (props: Props) => {
    return (
        <div className={classes.container}>
            <div className={classes.title}>{props.title}</div>
            <div>{props.text}</div>
            <div className={classes.secondContainer}>
                <div>{props.author}</div>
                <div className={classes.separator}>|</div>
                <div>{props.created_at}</div>
            </div>
        </div>
    )
}