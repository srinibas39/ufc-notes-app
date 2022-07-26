import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ToastMsg } from "../../components/ToastMsg/ToastMsg";


export const handleToast = (msg) => {
    toast.success(<ToastMsg msg={msg} />, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

export const handleToastError = (msg) => {
    toast.error(<ToastMsg msg={msg} />, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};

export const handleToastWarning = (msg) => {
    toast.warning(<ToastMsg msg={msg} />, {
        position: "bottom-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
    });
};