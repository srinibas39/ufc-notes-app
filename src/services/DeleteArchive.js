import axios from "axios";

export const DeleteArchive = (token, noteId) => {
    return axios.delete(`/api/archives/delete/${noteId}`, {
        headers: { authorization: token },
    });
};

