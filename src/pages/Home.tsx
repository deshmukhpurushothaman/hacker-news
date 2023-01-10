import React, { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import CircularProgress from '@mui/material/CircularProgress';
import { fetchAllNews } from "../actions";
import { Navbar } from "../components/Navbar";
import Pagination from '@mui/material/Pagination';
import classes from '../styles/Home.module.scss'
import { News } from "../components/News";
import { Link } from "react-router-dom";

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
    hover: {
        scale: 1.1,
    }
};

export const HomePage = () => {
    const [news, setNews] = useState<Array<Object>>([])
    const [page, setPage] = useState<number>(1)
    const [searchString, setSearchString] = useState<string>('')
    const [totalPages, setTotalPages] = useState<number>(0)
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        fetchNews()
    }, [])

    useEffect(() => {
        fetchNews()
    }, [searchString, page])

    const fetchNews = async () => {
        setLoading(true)
        const data = await fetchAllNews(searchString, page)
        setTotalPages(data.nbPages)
        setNews(data.hits)
        setLoading(false)
    }

    const onSearch = (queryString: string) => {
        setSearchString(queryString)
    }

    return (
        <div>
            <Navbar onSearchUpdate={(query) => onSearch(query)} />
            <div className={classes.bodyContainer}>
                <h2>Hacker News</h2>
                {loading ?
                    (<CircularProgress />) :
                    news ? (
                        <>
                            <motion.div className={classes.newsContainer}>
                                {news.map((news: any, i: number) => {
                                    return (
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
                                            <Link to={`/news/${news.objectID}`}>
                                                <News
                                                    title={news.title}
                                                    points={news.points}
                                                    author={news.author}
                                                    created_at={news.created_at}
                                                    url={news.url}
                                                    num_comments={news.num_comments}
                                                    objectID={news.objectID}
                                                />
                                            </Link>
                                        </motion.div>
                                    )
                                })}
                            </motion.div>
                            <div className={classes.paginationContainer}>
                                <Pagination count={totalPages} color="primary" onChange={(e, p) => setPage(p)} page={page} />
                            </div>
                        </>
                    ) : (
                        <div>No more news!!!</div>
                    )
                }
            </div>
        </div>
    )
}