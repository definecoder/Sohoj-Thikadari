// TODO : ADD BG
import './LandingPageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"


function LandingPage() {        

    return (
      <>
        <div className='mainContainerLandingPage'>
          <div className='paddingUpLanding'></div>
        <div>
        <img src={landingLogo} alt="Description of the image" className='LandingLogo'/>  
        </div>        
        <h1>সহজ ঠিকাদারী তে আপনাকে স্বাগতম</h1>
        <div className="landingPageButtonContainer">
            <BasicButton  buttonText = 'প্রবেশ করুন' onClick = {() => {}} routePath = "/login" />
            <BasicButton  buttonText = 'নিবন্ধন করুন' onClick = {() => {}} routePath = "/signup" />    
        </div>
        </div>        
      </>
    )
  }

  export default LandingPage