import { useState } from 'react';
import '../contact.css'

export default function Contact() {
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [message, setMessage] = useState('')
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleError = (field) => {
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: !eval(field) ? 'This field is required.' : ''
    }));
  };

  return(
    <div className='contactContainer'>
      <div>
        <h3 className="pageTitle">Contact</h3>
      </div>
      <div className='inputDiv'>
        <h2>Name:</h2>
        <input 
          type='text' 
          value={name} 
          onchange={(e) => setName(e.target.value)}
          onBlur={() => handleError('name')}
          ></input>
          {errors.name && <div className='contactError'>{errors.name}</div>}
      </div>
      <div typeof='email' className='inputDiv'>
        <h2>Email:</h2>
        <input 
          type='text' 
          value={email} 
          onchange={(e) => setEmail(e.target.value)}
          onBlur={() => handleError('email')}
          ></input>
          {errors.email && <div className='contactError'>{errors.email}</div>}
      </div>
      <div className='inputDiv'>
        <h2>Message:</h2>
        <textarea 
          type='text' 
          value={message} 
          onchange={(e) => setMessage(e.target.value)}
          onBlur={() => handleError('message')}
          ></textarea>
          {errors.message && <div className='contactError'>{errors.message}</div>}
      </div>
      <div className='inputDiv'>
        <button>Submit</button>
      </div>
    </div>
  )
}