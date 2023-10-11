// TODO : ADD BG
import './LandingPageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"

const routeToLogin = () => {
    
};

function LandingPage() {    
    return (
      <>
        <div>
        <img src={landingLogo} alt="Description of the image" className='LandingLogo'/>
        <h1>সহজ ঠিকাদারী তে আপনাকে স্বাগতম</h1>
        <div className="landingPageButtonContainer">
            <BasicButton  buttonText = 'LOG IN' onClick = {routeToLogin} />
            <BasicButton  buttonText = 'SIGN UP' onClick = {routeToLogin} />    
        </div>
        </div>        
      </>
    )
  }

  export default LandingPage