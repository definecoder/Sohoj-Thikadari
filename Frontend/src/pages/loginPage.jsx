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
                <h1>আপনার একাউন্ট এ প্রবেশ করুন</h1>
                <div className='loginForm'>
                    <h2>ইমেইল অথবা ইউজারনেম</h2>
                    <InputTextField inputLabel = 'আপনার ইমেল অথবা ইউজারনেম দিন' fieldName = 'emailusername'/>
                    <div></div>
                    <h2 className='passwordTitle'>পাসওয়ার্ড</h2>
                    <PasswordField inputLabel = 'পাসওয়ার্ড প্রদান করুন' fieldName = 'password'/>                    
                </div>                
                <BasicButton  buttonText = 'প্রবেশ করুন' onClick = {() => {}} routePath = "/home" /> 
                <div>পাসওয়ার্ড ভুলে গেছেন? এখানে <b>ক্লিক করুন</b></div>
            </div>
        </div>        
      </>
    )
  }

  export default LoginPage