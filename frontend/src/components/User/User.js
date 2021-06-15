import './user.css';
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";


const User = ({ Id, firstName, lastName, email }) => {
  return (
    <div className="userpage">

          <div className="user__info">
        <p className="info__name">{Id}</p>
        <p className="info__name">{firstName}</p>
        <p className="info__name">{lastName}</p>
        <p className="info__email">{email}</p>

      </div>
    </div>
  );
};

export default User;