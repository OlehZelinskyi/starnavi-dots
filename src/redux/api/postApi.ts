// Constants
import { baseURL } from "../constants"
import { Winner } from "../../typings"

async function postApi(endPoint: string, data: Winner) {
    try {
        const url = `${baseURL}/${endPoint}`
        const config = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        }
        const response = await fetch(url, config)
        return response.json()
    } catch (error) {
        console.error(error)
    }

}

export default postApi