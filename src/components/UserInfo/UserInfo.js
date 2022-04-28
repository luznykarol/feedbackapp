import React, { useContext } from "react";
import { UserContext } from "../../providers/UserProvider";

const UserInfo = ({}) => {
  const { user } = useContext(UserContext);

  return (
    // <div className="nav__title-box">
    //   <div className="nav__title-box__text">
    //     <div className="nav__title-box__title">{title}</div>
    //     <div className="nav__title-box__description">{description}</div>
    //   </div>
    // </div>
    <div className="user-info">
      <div className="user-info__image">
        <img src={""} alt="" />
      </div>
    </div>
  );
};

export default UserInfo;
