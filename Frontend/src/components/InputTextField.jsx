import './componentStyle.css'

function InputTextField(props) {    
  
  const {inputLabel , feildName} = props;

    return (
      <>
        <div class="form__group field">
          <input type="input" class="form__field" placeholder={inputLabel} name={feildName} id={feildName} required />        
        </div>
      </>
    )
  }

  export default InputTextField