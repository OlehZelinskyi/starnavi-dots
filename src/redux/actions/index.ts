import { Winner } from "../../typings";
import { RECEIVE_DATA } from "../constants";

export const receiveData = (type: string, data: Winner[]) => ({
    type: RECEIVE_DATA, payload: {
        type: type,
        data: data
    }
})