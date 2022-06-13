import axios from "axios";

export const CreateNote = (token, note) => {
    return axios.post("/api/notes", { note }, {
        headers: {
            authorization: token
        }
    })
}