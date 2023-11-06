import LandingPage from "../pages/landingPage/LandingPage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import LoginPage from "../pages/loginPage/loginPage";
import SignUpPage from "../pages/signUpPage/SignUpPage";
import HomePage from "../pages/homePage/HomePage";
import FirmProfilePage from "../pages/FirmProfilePage/FirmProfilePage";
import MyFirmsPage from "../pages/myFirmsPage/MyFirmsPage";
import AddNewFirmPage from "../pages/addNewFirmPage/AddNewFirmPage";
import ProgramSelectionPage from "../pages/program_selection_page/ProgramSelectionPage";
import AddNewProgram from "../pages/addNewProgram/AddNewProgram";
import AddNewIvoicePage from "../pages/addNewIvoicePage/AddNewIvoicePage";
import AddRecievingInfoPage from "../pages/addRecievingInfo/AddRecievingInfoPage";
import AddBillDistancePage from "../pages/addBillDistancePage/AddBillDistancePage";
import AddBillHeadings from "../pages/addBillHeadings/AddBillHeadings";
import BillDownloadPage from "../pages/billDownloadPage/BillDownloadPage";
import BillProgramSelectionPage from "../pages/bill_program_selection_page/BillProgramSelectionPage";
import AddGovBillNumPage from "../pages/addGovBillNumPage/AddGovBillNumPage";
import ProgramProfilePage from "../pages/programProfilePage/ProgramProfilePage";
import RunningProgramsPage from "../pages/running_programs_page/RunningProgramsPage";
import MyBillsPage from "../pages/my_bills_page/MyBillsPage";
import MovementRegisterPage from "../pages/movement_register_page/MovementRegisterPage";

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
          <Route path="/firms" element={<MyFirmsPage />} />
          <Route path="/addNewFirm" element={<AddNewFirmPage />} />
          <Route
            path="firm/:firmId/receiving-programs"
            element={<ProgramSelectionPage />}
          />
          <Route path="/firm/:firmId/addNewProgram" element={<AddNewProgram />} />
          <Route path="/firm/:firmId/addInvoiceInfo" element={<AddNewIvoicePage />} />
          <Route path="/firm/:invoiceNo/addRecievingInfo" element={<AddRecievingInfoPage />} />
          <Route path="firm/:firmId/bill/addBillDistance" element={<AddBillDistancePage />} />
          <Route path="firm/:firmId/bill/addBillHeadings" element={<AddBillHeadings />} />
          <Route path="firm/:firmId/bill/billDownloadPage" element={<BillDownloadPage />} />
          <Route
            path="firm/:firmId/bill/invoices"
            element={<BillProgramSelectionPage />}
          />
          <Route
            path="firm/:firmId/addgovbillnum"
            element={<AddGovBillNumPage />}
          />
          <Route path="program/:pid" element={<ProgramProfilePage />} />

          <Route
            path="firm/:firmId/programs"
            element={<RunningProgramsPage />}
          />
          <Route path="firm/:firmId/bills" element={<MyBillsPage />} />
          <Route
            path="firm/:firmId/movement-register"
            element={<MovementRegisterPage />}
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default RoutesLib;
