import React from 'react'
import "./Form.css"

const Form = () => {
  return (
    <div className='form'>
        <div className='formleft'>
            <h1>Contact Form</h1>
            <p>The following form demonstrates form validation in action. Contact form component reduces the amount of time it is being re-rendered by the user as it embraces uncontrolled form validation to reduce any unnecessary performance penalty.</p>

        </div>
        <div className='formright'>
            <form>
                <label>Name:-</label>
                <input type='text' placeholder='name here' /><br/><br/>
                <label>Email:-</label>
                <input type='email' placeholder='name here' /><br/><br/>
                <label>Mesag:-</label>
                <input type='text' placeholder='name here' /><br/><br/>
            </form>
            <button>Submit</button>

        </div>
    </div>
  )
}

export default Form