import React from "react";
import style from "./Preloader.module.css"
import load_animation from "../../../assets/images/loading.gif";

let Preloader = (props) => {
  return (
    <div>
      <img className={style.preloader} src={load_animation} alt="Загрузка1"/>
    </div>
  );
}

export default Preloader