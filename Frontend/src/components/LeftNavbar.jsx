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
                    <div className={curPage == 'home' ? 'activeNavItem' : 'nullll'}>
                        <Link to="/home"> ড্যাশবোর্ড </Link>
                    </div>                    
                    <div className={curPage == 'profile' ? 'activeNavItem' : 'nullll'}>                    
                        <Link to="/profile"> প্রোফাইল </Link>
                    </div>
                    
                    <div className={curPage == 'firms' ? 'activeNavItem' : 'nullll'}>
                        <Link to="/firms"> ফার্মসমূহ </Link>
                    </div>
                    <div className={curPage == 'logout' ? 'activeNavItem' : 'nullll'}>
                        <Link to="/"> লগ আউট </Link>
                    </div>
                </div>
            </div>
      </>
    )
  }

  export default BasicButton