import axios from "axios";

export const RestoreArchive = (token, noteId) => {
    return axios.post(
        `/api/archives/restore/${noteId}`,
        {},
        {
            headers: { authorization: token },
        }
    );
};
