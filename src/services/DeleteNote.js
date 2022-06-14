import axios from "axios";
export const DeleteNote = (token, noteId) => {
    return axios.delete(`/api/notes/${noteId}`, {
        headers: { authorization: token },
    });
};