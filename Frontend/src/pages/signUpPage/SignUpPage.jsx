import DarkButton from "../../components/darkButton/DarkButton"
import landingLogo from "../../assets/appLogo.png"
import SignUpForm from "./SignUpForm";

import "./SignUpPage.css";

function SignUpPage() {        

    return (
      <>
        <div className="signupCanvas">
            <div className="signupCard">
                <div className="signUpCardHeader">
                    <div className="signupLogo"><img className="signupLogo" src={landingLogo} alt="App Logo" /></div>
                    <span className="signUpHeaderTitle">আপনার তথ্যসমূহ দিন</span>
                </div>
                <SignUpForm />
                <div className="signupFooter">
                    পূর্বেই এক্যাউন্ট রয়েছে? <span className="signupFooterButton">প্রবেশ করুন</span>
                </div>
            </div>
        </div>
      </>
    )
  }

  export default SignUpPage