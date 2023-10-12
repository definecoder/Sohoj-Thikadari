// TODO : ADD BG
import './MyFirmsPageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"
import InputTextField from '../components/InputTextField';
import PasswordField from '../components/PasswordField';
import LeftNavBar from '../components/LeftNavbar';

function FirmsProfilePage() {        

    return (
      <>
        <div className='homepageCanvas'>
            <LeftNavBar curPage = "firms" />
            <div className='rightCanvasMyFirms'>
              
              <div className="firmList">
                <h1>M/s. Balaka Overseas Ltd.</h1>
                <BasicButton  buttonText = 'নতুন প্রোগ্রাম যুক্ত করুন' onClick = {() => {alert("নতুন প্রোগ্রাম যুক্ত হয়েছে")}} routePath = "/home" />
                <BasicButton  buttonText = 'প্রাপ্তির তথ্য যুক্ত করুন' onClick = {() => {alert("প্রাপ্তির তথ্য যুক্ত হয়েছে")}} routePath = "/home" />
                <BasicButton  buttonText = 'চলমান প্রোগ্রাম এর লিস্ট দেখুন' onClick = {() => {alert("চলমান প্রোগ্রাম এর লিস্ট")}} routePath = "/home" />
                <BasicButton  buttonText = 'বিল তৈরি করুন' onClick = {() => {alert("বিল তৈরি হয়েছে")}} routePath = "/home" />
                <BasicButton  buttonText = 'চলমান সূচি তৈরি করুন' onClick = {() => {alert("চলমান সুচি তৈরি হয়েছে")}} routePath = "/home" />
              </div>

              <div className="addNewFirm">
                <BasicButton  buttonText = 'BACK' onClick = {() => {}} routePath = "/firms" />
              </div>

            </div>
        </div>    
      </>
    )
  }

  export default FirmsProfilePage