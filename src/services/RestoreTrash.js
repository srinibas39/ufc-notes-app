import axios from "axios";

export const RestoreTrash = (token, noteId) => {
    return axios.post(
        `/api/trash/restore/${noteId}`,
        {},
        {
            headers: { authorization: token },
        }
    );
};
