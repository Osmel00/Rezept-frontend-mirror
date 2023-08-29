import { FC, useState } from "react";
import { Link } from "react-router-dom";
import style from "../styles/userProfile/userProfile.module.scss";
import AddRecipeForm from "../components/userProfile/AddRecipeForm";

const UserProfile: FC = () => {
  const [popup, setPopup] = useState<boolean>(false);

  return (
    <>
      {popup && <AddRecipeForm closePopup={setPopup} />}
      <button>
        <Link to="/">
          <i className={`fa-solid fa-reply ${style.returnArrow}`}></i>
          Zurück zum Feed
        </Link>
      </button>
      <header></header>
      <span>Rezept hinzufügen</span>
      <button onClick={() => setPopup(true)}>
        <i className={`fa-solid fa-plus ${style.addRecipe}`}></i>
      </button>
    </>
  );
};

export default UserProfile;
