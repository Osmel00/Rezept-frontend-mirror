import { Route, Routes } from "react-router-dom";
import { FC,useEffect } from "react";
import StartPage from "../components/startPage/Index";
import UserProfile from "./UserProfile";
import Aos from "aos";
import Signin from "../components/auth/Signin";
import Signup from "../components/auth/Signup";
import VerificationCode from "../components/auth/VerificationCode";
import Contact from "../components/contactPage/Contact";
import EmailVerification from "../components/auth/EmailVerification";
import NewPassword from "../components/auth/NewPassword";
import CommentPage from "./CommentPage";
import Start from "./Start";
import AddRecipeForm from "../components/userProfile/AddRecipeForm";

const App: FC = () => {
  // const { user, setUser } = useContext(AuthContext);

  // console.log(user);

  useEffect(() => {
    Aos.init();
  }, []);

  return (
    <>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/recipes" element={<Start />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/signup" element={<Signup />} />
        <Route
          path="/passwort-vergessen"
          element={
            <EmailVerification placeholder="Bitte deine Email eingeben" />
          }
        />
        <Route
          path="/verifiziere-verifikationscode/:id"
          element={<VerificationCode />}
        />
        <Route path="/passwort-zuruecksetzen/:id" element={<NewPassword />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/user-profile/:id" element={<UserProfile />} />
        <Route path="/create-recipe/:id" element={<AddRecipeForm />} />
        <Route path="/recipe/:id" element={<CommentPage />} />
      </Routes>
    </>
  );
};
export default App;
