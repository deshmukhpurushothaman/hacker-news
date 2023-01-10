import axios from "axios";

export const fetchAllNews = async (query: string, page: number) => {
    try {
        const { data } = await axios.get(`http://hn.algolia.com/api/v1/search?query=${query}&page=${page}`)
        return data;
    } catch (error) {
        console.log("Some error occured while getting all news")
        return null;
    }

}

export const fetchOneNews = async (objectID: string) => {
    try {
        const { data } = await axios.get(`http://hn.algolia.com/api/v1/items/${objectID}`)
        return data;
    } catch (error) {
        console.log("Some error occured while getting one news")
        return null;
    }
}