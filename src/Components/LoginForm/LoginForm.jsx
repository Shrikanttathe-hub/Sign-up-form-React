import React from 'react'
import './LoginForm.css';
import { FaUser , FaLock} from "react-icons/fa";
const LoginForm = () => {
    return (
        <div className='wrapper'> 
         <form action="">
            <h1>Sign up</h1>
            <div className="input-box">
              <input type="email" placeholder='Email' required />
              <FaUser className='icon' />
            </div>
            <div className="input-box">
              <input type="password" placeholder='password' required />
              <FaLock className='icon'/>
            </div>
            <div className="input-box">
              <input type="password" placeholder='Confirm password' required />
              <FaLock className='icon'/>
            </div>
           <div className="remember-forget">
            <label ><input type="checkbox" />Remeber me</label>
            <a href="#">Forget password?</a>
           </div>
           <button type="submit">Sign </button>
         
           <div className="register-link">
            <p>Don't have an account ? <a href="#">Register</a></p>
           </div>
         </form>
           
        </div>
    );
} ;
export default LoginForm;
