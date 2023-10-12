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
                        <h3>ইউজারনেম : &nbsp;&nbsp;&nbsp; </h3>
                        <InputTextField inputLabel = 'ইউজারনেম প্রদান করুন' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>ফোন নম্বর : &nbsp;&nbsp;&nbsp; </h3>
                        <InputTextField inputLabel = 'ফোন নম্বর দিন' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>ইমেইল : &nbsp;&nbsp;&nbsp; </h3>
                        <InputTextField inputLabel = 'ইমেইল প্রদান করুন' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>পাসওয়ার্ড : &nbsp;&nbsp;&nbsp; </h3>
                        <PasswordField inputLabel = 'পাসওয়ার্ড দিন' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>পুনরায় পাসওয়ার্ড : &nbsp;&nbsp;&nbsp; </h3>
                        <PasswordField inputLabel = 'পুনরায় পাসওয়ার্ড দিন' fieldName = 'username'/>
                    </div>
                </div>      
                <div></div>          
                <BasicButton  buttonText = 'নিবন্ধন করুন' onClick = {() => {}} routePath = "/home" /> 
                <div></div>
            </div>
        </div>        
      </>
    )
  }

  export default SignUpPage