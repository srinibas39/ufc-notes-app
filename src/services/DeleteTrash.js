import axios from "axios";

export const DeleteTrash = (token, noteId) => {
    return axios.delete(`/api/trash/delete/${noteId}`, {
        headers: { authorization: token },
    });
};

