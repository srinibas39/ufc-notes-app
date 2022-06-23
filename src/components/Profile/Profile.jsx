import { useNavigate } from "react-router-dom";
import { loadLogout } from "../../features/authSlice";
import { useDispatch, useSelector } from "react-redux";

import "./Profile.css";
export const Profile = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { user, authType } = useSelector((state) => state.auth);

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
          {authType === "login"
            ? user.firstName + " " + user.lastName
            : user.firstName.firstName + " " + user.firstName.lastName}
        </p>
        <p>
          <span className="material-symbols-outlined">mail</span>
          {authType === "login" ? user.email : user.firstName.username}
        </p>
        <button onClick={logoutHandler}>Logout</button>
      </div>
    </div>
  );
};
