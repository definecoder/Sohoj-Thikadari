import { Link } from "react-router-dom";
import "./DarkButton.css";

function DarkButton(props) {
  const { buttonText, onClick, routePath, type = "button" } = props;

  if (routePath === "forbidden") {
    return (
      <>
        <div>
          <button onClick={onClick} type={type} className="DarkButton">
            {buttonText}
          </button>
        </div>
      </>
    );
  }

  return (
    <>
      <div>
        <Link to={routePath}>
          <button onClick={onClick} type={type} className="DarkButton">
            {buttonText}
          </button>
        </Link>
      </div>
    </>
  );
}

export default DarkButton;
