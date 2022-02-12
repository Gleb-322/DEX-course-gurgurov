import './InputCheckbox.css'

const InputCheckboxActive = () => {
    return (
        <div className='checkBlock'>
          <input className='check' name='check' type='checkbox'/>
          <label htmlFor='check' className='labelCheck'>Text</label>
        </div>
    )
}
const InputCheckboxError = () => {
    return (
        <div className='checkBlock'>
          <input className='checkError' name='check' type='checkbox'/>
          <label htmlFor='check' className='labelCheck labelCheckError'>Text</label>
          <span className='checkErrorMessage'>You must be accept the agreement.</span>
        </div>
    )
}

export {InputCheckboxActive, InputCheckboxError}

