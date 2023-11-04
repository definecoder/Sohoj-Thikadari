import LandingPage from "../pages/landingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import HomePage from "../pages/homePage/HomePage";
import FirmProfilePage from "../pages/FirmProfilePage/FirmProfilePage";
import ProgramSelectionPage from "../pages/program_selection_page/ProgramSelectionPage";

//import SignUpPage from '../pages/signupPage'
//import HomePage from '../pages/HomePage'
//import ProfilePage from '../pages/ProfilePage'
//import MyFirmsPage from '../pages/MyFirmsPage'
//import FirmsProfilePage from '../pages/FirmsProfilePage'
//import AddNewFirmPage from '../pages/AddNewFirm'

function RoutesLib() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignUpPage />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/firm/:firmId" element={<FirmProfilePage />} />
          <Route
            path="firm/:firmId/receiving-programs"
            element={<ProgramSelectionPage />}
          />
          {/*                     
          <Route path="/profile" element = {<ProfilePage />} />
          <Route path="/firms" element = {<MyFirmsPage />} />          
          <Route path="/addFirm" element = {<AddNewFirmPage />} /> */}
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;
