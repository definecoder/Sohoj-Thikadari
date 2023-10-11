// TODO : ADD BG
import './LoginPageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"
import InputTextField from '../components/InputTextField';
import PasswordField from '../components/PasswordField';


function LoginPage() {        

    return (
      <>
        <div className='loginPageRoot'>
            <div className='loginLeft'>
                <div className='loginLogoWrapper'><img src={landingLogo} alt="Description of the image"/></div>
            </div>
            <div className='loginRight'>
                <div></div>                
                <h1>SIGN IN TO YOUR ACCOUNT</h1>
                <div className='loginForm'>
                    <h2>Email or Username</h2>
                    <InputTextField inputLabel = 'Enter you Email or Username' fieldName = 'emailusername'/>
                    <div></div>
                    <h2 className='passwordTitle'>Password</h2>
                    <PasswordField inputLabel = 'Enter your password' fieldName = 'password'/>                    
                </div>                
                <BasicButton  buttonText = 'SIGN IN' onClick = {() => {}} routePath = "/home" /> 
                <div>Forgot Password? Click Here</div>
            </div>
        </div>        
      </>
    )
  }

  export default LoginPage