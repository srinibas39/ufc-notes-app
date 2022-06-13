import axios from "axios";

export const ArchiveNote = (token, note, noteId) => {
    return axios.post(`/api/notes/archives/${noteId}`, { note }, { headers: { authorization: token } })
}