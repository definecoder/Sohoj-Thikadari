import LandingPage from '../pages/landingPage/LandingPage';
import {BrowserRouter, Routes, Route} from 'react-router-dom'
import LoginPage from '../pages/loginPage/loginPage';
import SignUpPage from '../pages/signUpPage/SignUpPage';
import HomePage from '../pages/homePage/HomePage';
import FirmProfilePage from '../pages/FirmProfilePage/FirmProfilePage';
import MyFirmsPage from '../pages/myFirmsPage/MyFirmsPage';
import AddNewFirmPage from '../pages/addNewFirmPage/AddNewFirmPage';
import ProgramSelectionPage from "../pages/program_selection_page/ProgramSelectionPage";

function RoutesLib() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element = {<LandingPage />} />
          <Route path="/login" element = {<LoginPage />} />
          <Route path="/signup" element = {<SignUpPage />} />
          <Route path="/home" element = {<HomePage />} />
          <Route path="/firm/:firmId" element = {<FirmProfilePage />} />
          <Route path="/firms" element = {<MyFirmsPage />} />
          <Route path="/addNewFirm" element = {<AddNewFirmPage /> } />          
          <Route path="firm/:firmId/receiving-programs" element={<ProgramSelectionPage /> } />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;
