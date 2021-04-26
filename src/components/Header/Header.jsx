import React from "react";
import style from "./Header.module.css";
import { NavLink } from "react-router-dom";

const Header = (props) => {
  return (
    <header className={style.header}>
      <div>
        <img
          src="http://2.bp.blogspot.com/_CHG2GRbeET8/SjtK6wZxtAI/AAAAAAAALiY/1zfxFTm47xA/s200/icap.jpg"
          alt="Загрузка2"
        />
      </div>
      <div className={style.loginBlock}>
        {props.isAuth ? (
          <div>
            {props.login} - <button onClick={props.logout}>Log out</button>
          </div>
        ) : (
          <NavLink to={"/login"}>Login</NavLink>
        )}
      </div>
      <div className={style.emailBlock}>{props.isAuth ? props.email : ""}</div>
    </header>
  );
};

export default Header;
