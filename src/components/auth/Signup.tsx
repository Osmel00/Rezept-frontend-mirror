import { useState, FC, useEffect } from "react";
import style from "../../styles/auth/signup.module.scss";
import { alertMassage } from "../../actions/alerts";
import GoogleBtn from "./googleBtn/GoogleBtn";
import { Link, useNavigate } from "react-router-dom";
import instance from "../../api/instance";

const Signup: FC = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
    dateOfBirth: "",
  });

  const [showPassword, setShowPassword] = useState<boolean>(false);
  const [showConfirmPassword, setShowConfirmPassword] =
    useState<boolean>(false);
  const [registredUserId, setRegisteredUserId] = useState<string | null>(null);

  const navigate = useNavigate();

  const handleSignup = async (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    instance
      .post("user/registrieren", formData)
      .then((res) => {
        if (res.status === 201) {
          alertMassage(res.data.message);
          const userId = res.data.newUser._id;
          setRegisteredUserId(userId);
        } else {
          navigate("/signup");
        }
      })
      .catch((err) => {
        if (err.response) {
          const textError = err.response.data.error || err.response.data.errors;
          alertMassage(textError, "error");
        } else {
          alertMassage("Ein Fehler ist aufgetreten.", "error");
        }
      });
  };
  useEffect(() => {
    if (registredUserId) {
      navigate("/signin");
    }
  }, [registredUserId, navigate]);

  const handleShowPasswordToggle = () => {
    setShowPassword(!showPassword);
  };

  const handleShowConfirmPasswordToggle = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  return (
    <div className={style.signup_container}>
      <div className={style.card_form}>
        <h2 className={style.card_title}>Registrieren</h2>
        <p className={style.card_paragraph}>
          Bitte gib deine Daten ein, um dich zu registrieren.
        </p>

        <div className={style.input}>
          <label htmlFor="username">
            <i className="fas fa-user"></i>
          </label>
          <input
            id="username"
            type="text"
            placeholder="Benutzername"
            name="username"
            value={formData.username}
            onChange={handleChange}
          />
        </div>
        <div className={style.input}>
          <label htmlFor="email">
            <i className="fas fa-envelope"></i>
          </label>
          <input
            id="email"
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>

        <div className={style.input}>
          <label htmlFor="password">
            <i className="fas fa-lock"></i>
          </label>
          <input
            id="password"
            placeholder="Passwort"
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
          <i
            className={showPassword ? "fas fa-eye" : "fas fa-eye-slash"}
            onClick={handleShowPasswordToggle}
          ></i>
        </div>
        <div className={style.input}>
          <label htmlFor="confirmPassword">
            <i className="fas fa-lock"></i>
          </label>
          <input
            id="confirmPassword"
            placeholder="Passwort bestätigen"
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleChange}
          />
          <i
            className={showConfirmPassword ? "fas fa-eye" : "fas fa-eye-slash"}
            onClick={handleShowConfirmPasswordToggle}
          ></i>
        </div>
        <div className={style.input}>
          <label htmlFor="birthdate">
            <i className="fas fa-calendar"></i>
          </label>
          <input
            id="birthdate"
            type="date"
            placeholder="Geburtsdatum"
            name="dateOfBirth"
            value={formData.dateOfBirth}
            onChange={handleChange}
          />
        </div>
        <button className={style.btn} type="button" onClick={handleSignup}>
          Registrieren
        </button>

        <p className={style.signup_link}>
          Du hast bereits ein Konto?
          <Link to="/signin" className={style.signup_link}>
            Anmelden
          </Link>
        </p>

        <div className={style.oder}>Oder</div>

        <button className={style.google}>
          <GoogleBtn />
        </button>
      </div>
    </div>
  );
};

export default Signup;
