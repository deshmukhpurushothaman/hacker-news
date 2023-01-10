import React, { useEffect, useState } from "react";
import CircularProgress from '@mui/material/CircularProgress';
import { fetchAllNews } from "../actions";
import { Navbar } from "../components/Navbar";

import classes from '../styles/Home.module.scss'
import { News } from "../components/News";
import { Link } from "react-router-dom";

export const HomePage = () => {
    const [news, setNews] = useState<Array<Object>>([])
    const [loading, setLoading] = useState<boolean>(false)

    useEffect(() => {
        fetchNews()
    }, [])

    const fetchNews = async () => {
        setLoading(true)
        const data = await fetchAllNews()
        setNews(data.hits)
        setLoading(false)
    }

    return (
        <div>
            <Navbar />
            <div className={classes.bodyContainer}>
                <h2>All News</h2>
                {loading ?
                    (<CircularProgress />) : (
                        <div className={classes.newsContainer}>
                            {news.map((news: any) => {
                                return (
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
                                )
                            })}
                        </div>
                    )}
            </div>
        </div>
    )
}