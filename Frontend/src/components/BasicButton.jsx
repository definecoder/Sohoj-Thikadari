import { Link } from 'react-router-dom';
import './componentStyle.css'

function BasicButton(props) {    
    const { buttonText, onClick, routePath } = props;

    return (
      <>
        <div>
        <Link to={routePath}>
        <button onClick={onClick} className = 'BasicButton'>
            {buttonText}
        </button>
        </Link>
        </div>
      </>
    )
  }

  export default BasicButton