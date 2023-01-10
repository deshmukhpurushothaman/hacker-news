import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchOneNews } from '../actions'

export const DetailedNews = () => {
    const { objectID } = useParams()
    const [news, setNews] = useState<any>()

    useEffect(() => {
        if (objectID)
            fetchNews(objectID)
    }, [objectID])

    const fetchNews = async (objectID: string) => {
        const data = await fetchOneNews(objectID)
        console.log({ data })
    }

    return (
        <div>
            Detailed Page
        </div>
    )
}