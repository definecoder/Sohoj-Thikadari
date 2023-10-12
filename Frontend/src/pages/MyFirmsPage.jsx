// TODO : ADD BG
import './MyFirmsPageCSS.css';

import BasicButton from "../components/BasicButton"
import landingLogo from "../assets/appLogo.png"
import InputTextField from '../components/InputTextField';
import PasswordField from '../components/PasswordField';
import LeftNavBar from '../components/LeftNavbar';

function MyFirmsPage() {        

    return (
      <>
        <div className='homepageCanvas'>
            <LeftNavBar curPage = "firms" />
            <div className='rightCanvasMyFirms'>
              
              <div className="firmList">
                <h1>YOUR FIRMS</h1>
                <BasicButton  buttonText = 'M/s Balaka Overseas Ltd' onClick = {() => {}} routePath = "/firmName" />
                <BasicButton  buttonText = 'M/s Musa And Brothers Ltd' onClick = {() => {}} routePath = "/firmName" />
                <BasicButton  buttonText = 'M/s Alifa Enterprise Ltd' onClick = {() => {}} routePath = "/firmName" />
                <BasicButton  buttonText = 'M/s Rahima and Nabil Enterprise' onClick = {() => {}} routePath = "/firmName" />
              </div>

              <div className="addNewFirm">
                <BasicButton  buttonText = 'ADD FIRM' onClick = {() => {}} routePath = "/addFirm" />
              </div>

            </div>
        </div>    
      </>
    )
  }

  export default MyFirmsPage