import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { AnimatePresence, motion } from "framer-motion";
import classes from '../styles/DetailedNews.module.scss'
import { fetchOneNews } from '../actions'
import { CircularProgress } from '@mui/material'
import { Comments } from '../components/Comments'

const container = {
    hidden: {
        opacity: 0,
        scale: 0,
        x: 100,
        transition: {
            type: 'spring',
            stiffness: 300,
            damping: 140,
        },
    },
    visible: {
        opacity: 1,
        scale: 1,
        x: 0,
        transition: {
            // delayChildren: 0.3,
            // staggerChildren: 0.2
            type: 'spring',
            // stiffness: 10,
            // dampness: 8,
            duration: 1
        }
    },
    // hover: {
    //     scale: 1.1,
    // }
};

export const DetailedNews = () => {
    const { objectID } = useParams()
    const [news, setNews] = useState<any>({})
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        if (objectID)
            fetchNews(objectID)
    }, [objectID])

    const fetchNews = async (objectID: string) => {
        setLoading(true)
        const data = await fetchOneNews(objectID)
        setNews(data)
        setLoading(false)
    }

    return (
        <div className={classes.container}>
            {loading ? (<CircularProgress />) : (
                <div>
                    <div>
                        <div className={classes.title}>{news.title}</div>
                        <div className={classes.details}>
                            <div>{news.author}</div>
                            <div className={classes.separator}>|</div>
                            <div>{news.created_at}</div>
                            <div className={classes.separator}>|</div>
                            <div>{news.points} Points</div>
                        </div>
                    </div>
                    <hr />
                    <div>Comments</div>
                    <motion.div className={classes.commentsContainer}>
                        {news.children && news.children.map((comment: any, i: number) => (
                            <motion.div
                                key={i}
                                // className={styles.card}
                                // layoutId={n.id}
                                variants={container}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: false, amount: 0.25 }}
                                whileHover="hover"
                            // onClick={() => { setSelectedId(n.id); setSelectedProject(n) }} 
                            >
                                <Comments
                                    title={comment.title}
                                    text={comment.text}
                                    author={comment.author}
                                    created_at={comment.created_at} />
                            </motion.div>
                        ))}
                        {!news.children ? (
                            <div>No more comments!!!</div>
                        ) : ('')}
                    </motion.div>
                </div>
            )}
        </div>
    )
}