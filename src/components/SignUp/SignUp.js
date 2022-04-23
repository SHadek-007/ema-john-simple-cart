import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import auth from "../../firebase.init";
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';

const SignUp = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confirmPassword, setConfirmPassword] = useState('');
    const [error, setError] = useState('');
    const navigate = useNavigate();

    const [createUserWithEmailAndPassword,user] = useCreateUserWithEmailAndPassword(auth);

    const handleEmailBlur = event =>{
        setEmail(event.target.value);
    };
    const handlePasswordBlur = event =>{
        setPassword(event.target.value);
    };
    if(user){
        navigate('/shop');
    }
    const handleConfirmPasswordBlur = event =>{
        setConfirmPassword(event.target.value);
    };
    const handleCreateUser = event =>{
        event.preventDefault();
        if(password !== confirmPassword){
            setError("Your two Password didn't Match.");
            return;
        }
        if(password.length < 6){
            setError("Password must ne 6 Characters or longer");
            return;
        }
        createUserWithEmailAndPassword(email,password)
        
    }
  return (
    <div className="form-container">
      <div>
        <h4 className="form-title">Sign Up</h4>
        <form onSubmit={handleCreateUser}>
          <div className="input-group">
            <label htmlFor="email">Email</label> <br />
            <input onBlur={handleEmailBlur} type="email" name="email" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="password">Password</label>
            <br />
            <input onBlur={handlePasswordBlur} type="password" name="password" id="" required/>
          </div>
          <div className="input-group">
            <label htmlFor="confirm-password">Confirm Password</label>
            <br />
            <input onBlur={handleConfirmPasswordBlur} type="password" name="confirm-password" id="" required/>
          </div>
          <p style={{color:'red',textAlign:'center'}}>{error}</p>
          {/* <p style={{color:'red',textAlign:'center'}}>{hookError}</p> */}
          <input className="form-submit" type="submit" value="Sign Up" />
        </form>
        <p style={{textAlign:'center'}}>
        Already have an account?<Link className="form-link" to={"/login"}> Login </Link>
        </p>
      </div>
    </div>
  );
};

export default SignUp;
