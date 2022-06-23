import { useNavigate } from "react-router-dom";
import { loadLogout } from "../../features/authSlice";
import { useDispatch } from "react-redux";

import "./Profile.css";
export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(loadLogout());
    navigate("/");
  };
  return (
    <div className="profile">
      <div className="profile-header">
        <h2>PROFILE</h2>
      </div>
      <div className="profile-body">
        <img src={require("../../images/Conor.png")} />
        <p>
          <span className="material-symbols-outlined">account_circle</span>
          Srinibas khuntia
        </p>
        <p>
          <span className="material-symbols-outlined">mail</span>
          srinibaskhuntia39@gmail.com
        </p>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};
