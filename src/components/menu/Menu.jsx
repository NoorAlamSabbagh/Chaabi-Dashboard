import React from "react";
import "./menu.scss";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="menu">
      <div className="item">
        <span className="title"></span>
        <Link to="/" className="ListItem">
          <img src="/element.svg" alt="" />
          <span className="ListItemTitle">Dashboard</span>
        </Link>
        <Link to="/" className="ListItem">
          <img src="/order.svg" alt="" />
          <span className="ListItemTitle">Trainings</span>
        </Link>
        <Link to="/" className="ListItem">
          <img src="/user.svg" alt="" />
          <span className="ListItemTitle">Users</span>
        </Link>
        <Link to="/" className="ListItem">
          <img src="/setting.svg" alt="" />
          <span className="ListItemTitle">Analytics</span>
        </Link>
        <Link to="/" className="ListItem">
          <img src="/profile.svg" alt="" />
          <span className="ListItemTitle">My Account</span>
        </Link>
        <Link to="/" className="ListItem">
          <img src="/post.svg" alt="" />
          <span className="ListItemTitle">Support</span>
        </Link>
      </div>
    </div>
  );
};

export default Menu;
