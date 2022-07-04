import { api } from "./config";

export const getPets = async () => {
    try {
        const response = await api.get("/pets")
    } catch(error) {
        alert(`Error: ${error.response.data}`)
    }
}