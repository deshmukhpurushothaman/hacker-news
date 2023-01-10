import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import classes from '../styles/DetailedNews.module.scss'
import { fetchOneNews } from '../actions'
import { CircularProgress } from '@mui/material'
import { Comments } from '../components/Comments'

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
        console.log({ data })
        // data['comments'] = data.children[0] + data.children[1]
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
                    <div className={classes.commentsContainer}>
                        {news.children && news.children.map((comment: any) => (
                            <Comments
                                title={comment.title}
                                text={comment.text}
                                author={comment.author}
                                created_at={comment.created_at} />
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}