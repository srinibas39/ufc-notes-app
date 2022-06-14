import axios from "axios";

export const TrashNote = (token, note, noteId) => {
    return axios.post(`/api/notes/trash/${noteId}`, { note }, { headers: { authorization: token } })
}