import React from "react";
import "./UserCard.css";

const UserCard = () => {
  const [show, setShow] = useState(false);

  return (
    <div className="user-card" onMouseLeave={() => setShow(false)}>
      <i
        className={`fas fa-ellipsis-v ${show && "action-btn"} `}
        onClick={() => setShow(!show)}
      />
      {show && (
        <ul className="action-menu">
          <li>
            <i className="fas fa-trash" />
            <span>DELETE</span>
          </li>
          <li>
            <i className="fas fa-pen" />
            <span>Edit</span>
          </li>
        </ul>
      )}
      <div className="user-info">
        <div className="avatar" style={{ background: "rgba(0,0,0,0.5)" }}>
          E
        </div>
        <p>
          <i className="fas fa-user" />
          <span>Eren Yaeger</span>
        </p>

        <p>
          <i className="fas fa-envelope" />
          <span>eren.y@gmail.com</span>
        </p>
        <p>
          <i class="fas fa-map-marker-alt" />
          <span>Paradise Island</span>
        </p>
        <p>
          <i className="fas fa-phone" />
          <span> +365 89 652 145</span>
        </p>
      </div>
    </div>
  );
};

export default UserCard;
