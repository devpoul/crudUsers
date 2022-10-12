import React from "react";
import "./styles/userCard.css";

const UserCard = ({ user, deleteUserById, setUpdateInfo, setFormIsClose }) => {
  const handleEdit = () => {
    setUpdateInfo(user);
    setFormIsClose(false)
  };

  return (
    <article className="user">
      <div className="userNameContainer">
        <h2 className="userName">{`${user.first_name} ${user.last_name}`}</h2>
        <h4>{`${user.id}`}</h4>
      </div>
      <ul className="userList">
        <li className="userItem">
          <span className="userSpan">Email</span>
          {user.email}
        </li>
        <li className="userItem">
          <span className="userSpan">Birthday</span>
          {user.birthday}
        </li>
      </ul>
      <footer className="userFooter">
        <button className="buttonUser" onClick={handleEdit}>
          <i className="userTrash fa-regular fa-pen-to-square"></i>
        </button>

        <button className="buttonUser" onClick={() => deleteUserById(user.id)}>
          <i className="userEdit fa-regular fa-trash-can"></i>
        </button>
      </footer>
    </article>
  );
};

export default UserCard;
