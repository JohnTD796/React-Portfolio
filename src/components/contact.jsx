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

  const validateEmail = (email) => {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(String(email).toLowerCase())
  }

  const handleError = (field, value) => {
    let error ='';
    if (!value) {
      error = 'This field is required!'
    } else if (field === 'email' && !validateEmail(value)) {
      error = 'Invalid email address!'
    }
    setErrors((prevErrors) => ({
      ...prevErrors,
      [field]: error
    }));
  };

  return(
    <div className='contactContainer'>
      <div className='pageTitleContainer'>
        <h3 className="pageTitle">Contact</h3>
      </div>
      <div className='inputDiv'>
        <h2>Name:</h2>
        <input 
          type='text' 
          value={name} 
          onChange={(e) => setName(e.target.value)}
          onBlur={() => handleError('name', name)}
          ></input>
          {errors.name && <div className='contactError'>{errors.name}</div>}
      </div>
      <div className='inputDiv'>
        <h2>Email:</h2>
        <input 
          type='email' 
          value={email} 
          onChange={(e) => setEmail(e.target.value)}
          onBlur={() => handleError('email', email)}
          ></input>
          {errors.email && <div className='contactError'>{errors.email}</div>}
      </div>
      <div className='inputDiv'>
        <h2>Message:</h2>
        <textarea 
          type='text' 
          value={message} 
          onChange={(e) => setMessage(e.target.value)}
          onBlur={() => handleError('message', message)}
          ></textarea>
          {errors.message && <div className='contactError'>{errors.message}</div>}
      </div>
      <div className='inputDiv'>
        <button>Submit</button>
      </div>
    </div>
  )
}