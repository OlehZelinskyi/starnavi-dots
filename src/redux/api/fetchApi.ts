import { baseURL } from "../constants"

async function fetchApi(endPoint: string) {
    try {
        const url = `${baseURL}/${endPoint}`
        const response = await fetch(url)
        return response.json()
    } catch (error) {
        console.error(error)
    }

}

export default fetchApi