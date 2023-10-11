import { Link } from 'react-router-dom';
import './LeftNavBarCSS.css'
import landingLogo from "../assets/appLogo.png";

function BasicButton(props) {    
    const { curPage } = props;

    return (
      <>
        <div className='leftNavbar'>
                <div className='navLogo'>
                    <img src={landingLogo} alt="logo" />
                </div>
                <div className='navItems'>                
                    <div>
                        <Link to="/home"> HOME </Link>
                    </div>                    
                    <div>                    
                        <Link to="/profile"> PROFILE </Link>
                    </div>
                    
                    <div>
                        <Link to="/firms"> MY FIRMS </Link>
                    </div>
                    <div>
                        <Link to="/logout"> LOG OUT </Link>
                    </div>
                </div>
            </div>
      </>
    )
  }

  export default BasicButton