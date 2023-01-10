import axios from "axios";

const baseUrl = process.env.REACT_APP_BASE_URL

export const fetchAllNews = async (query: string, page: number) => {
    try {
        const { data } = await axios.get(`${baseUrl}/search?query=${query}&page=${page}`)
        return data;
    } catch (error) {
        console.log("Some error occured while getting all news")
        return null;
    }

}

export const fetchOneNews = async (objectID: string) => {
    try {
        const { data } = await axios.get(`${baseUrl}/items/${objectID}`)
        return data;
    } catch (error) {
        console.log("Some error occured while getting one news")
        return null;
    }
}