// TODO : ADD BG
import './LoginPageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"
import InputTextField from '../components/InputTextField';
import PasswordField from '../components/PasswordField';


function SignUpPage() {        

    return (
      <>
        <div className='loginPageRoot'>
            <div className='loginLeft'>
                <div className='loginLogoWrapper'><img src={landingLogo} alt="Description of the image"/></div>
            </div>
            <div className='loginRight'>
                <div></div> <div></div> <div></div>                    
                <h1>আপনার তথ্য সমূহ দিন</h1>
                <div></div>
                <div className='signupForm'>                    
                    <div className='signupLabel'>
                        <h3>Username : &nbsp;&nbsp;&nbsp; </h3>
                        <InputTextField inputLabel = 'Enter you Username' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>Contact No : &nbsp;&nbsp;&nbsp; </h3>
                        <InputTextField inputLabel = 'Enter you Username' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>Email : &nbsp;&nbsp;&nbsp; </h3>
                        <InputTextField inputLabel = 'Enter you Username' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>Password : &nbsp;&nbsp;&nbsp; </h3>
                        <PasswordField inputLabel = 'Enter you Username' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>Confirm Password : &nbsp;&nbsp;&nbsp; </h3>
                        <PasswordField inputLabel = 'Enter you Username' fieldName = 'username'/>
                    </div>
                </div>      
                <div></div>          
                <BasicButton  buttonText = 'SIGN UP' onClick = {() => {}} routePath = "/home" /> 
                <div></div>
            </div>
        </div>        
      </>
    )
  }

  export default SignUpPage