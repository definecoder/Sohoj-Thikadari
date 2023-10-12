// TODO : ADD BG
import './LoginPageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"
import InputTextField from '../components/InputTextField';
import PasswordField from '../components/PasswordField';


function AddNewFirmPage() {        

    return (
      <>
        <div className='loginPageRoot'>
            <div className='loginLeft'>
                <div className='loginLogoWrapper'><img src={landingLogo} alt="Description of the image"/></div>
            </div>
            <div className='loginRight'>
                <div></div> <div></div> <div></div>                    
                <h1>ফার্মের তথ্য সমূহ দিন</h1>
                <div></div>
                <div className='signupForm'>                    
                    <div className='signupLabel'>
                        <h3>ফার্মের রেজিস্ট্রেশন নম্বর : &nbsp;&nbsp;&nbsp; </h3>
                        <InputTextField inputLabel = 'ফার্মের রেজিস্ট্রেশন নম্বর' fieldName = 'firmRegNo'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>ফার্মের নাম : &nbsp;&nbsp;&nbsp; </h3>
                        <InputTextField inputLabel = 'ফার্মের নাম' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>প্রোপ্রাইটর : &nbsp;&nbsp;&nbsp; </h3>
                        <InputTextField inputLabel = 'প্রোপ্রাইটর' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>ঠিকানা : &nbsp;&nbsp;&nbsp; </h3>
                        <PasswordField inputLabel = 'ঠিকানা' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>ফোন নং : &nbsp;&nbsp;&nbsp; </h3>
                        <PasswordField inputLabel = 'ফোন নং' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>ইমেইল : &nbsp;&nbsp;&nbsp; </h3>
                        <PasswordField inputLabel = 'ইমেইল' fieldName = 'username'/>
                    </div>
                    <div className='signupLabel'>
                        <h3>ট্রেড লাইসেন্স : &nbsp;&nbsp;&nbsp; </h3>
                        <PasswordField inputLabel = 'ট্রেড লাইসেন্স' fieldName = 'username'/>
                    </div>
                </div>      
                <div></div>          
                <BasicButton  buttonText = 'ফার্ম এড করুন' onClick = {() => {}} routePath = "/home" /> 
                <div></div>
            </div>
        </div>        
      </>
    )
  }

  export default AddNewFirmPage