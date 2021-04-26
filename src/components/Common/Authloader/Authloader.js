import React from "react";
import style from "./Authloader.module.css";
import authLoaderAnimation from "../../../assets/images/auth-loader.gif";

let Authloader = (props) => {
  return (
    <div className={style.loadBlock}>
      <img className={style.authloader} src={authLoaderAnimation} alt="Загрузка1" />
    </div>
  );
};

export default Authloader;
