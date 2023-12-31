import { FC } from "react";

import style from "./../../styles/startPage/header.module.scss";
import NavBar from "./NavBar";
import { Link } from "react-router-dom";

const Header: FC = () => {
  return (
    <header className={style.startHeader}>
      <div className={style.leftSide}></div>
      <div className={style.rightSide}>
        <NavBar />
        <figure>
          <img src="/stake.png" alt="stake" />
        </figure>
        <h1>
          Rezept <br /> Sharing <br />
          Plattform
        </h1>
        <Link to="/recipes" className={style.enterBtn}>
          als Gast eintreten
        </Link>
      </div>
      <i className="fas fa-arrow-down"></i>
    </header>
  );
};

export default Header;
