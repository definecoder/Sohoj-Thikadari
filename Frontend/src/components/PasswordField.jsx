import './componentStyle.css'

function PasswordField(props) {    
  
  const {inputLabel , feildName} = props;

    return (
      <>
        <div class="form__group field">
          <input type="password" class="form__field" placeholder = {inputLabel} name={feildName} id={feildName} required />          
        </div>
      </>
    )
  }

  export default PasswordField