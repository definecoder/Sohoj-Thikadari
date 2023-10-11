import './componentStyle.css'

function BasicButton(props) {    
    const { buttonText, onClick } = props;

    return (
      <>
        <div>
        <button onClick={onClick} className = 'BasicButton'>
            {buttonText}
        </button>
        </div>
      </>
    )
  }

  export default BasicButton