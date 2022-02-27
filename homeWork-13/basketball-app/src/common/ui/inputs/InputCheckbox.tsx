import './InputCheckbox.css'

export const InputCheckBox = () => {
  return (
    <label className="container">I accept the agreement
      <input className='checkbox' type="checkbox"/>
      <span className="checkmark"></span>
      <span className='checkErrorMessage'>You must be accept the agreement.</span>
    </label>
  )
}


