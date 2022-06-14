import axios from "axios";

export const UpdateNote = (token, note, noteId) => {
    return axios.post(
        `/api/notes/${noteId}`,
        { note },
        {
            headers: { authorization: token },
        }
    );
};