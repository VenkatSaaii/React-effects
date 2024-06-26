import React, { useState, useEffect } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState();
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState();

  const [enteredCollege,setCollege]=useState('');
  const [collegeIsValid,setCollegeIsValid]=useState('');

  const [formIsValid, setFormIsValid] = useState(false);

  useEffect(()=>{
        console.log('Effect Running');
        return ()=>{
          console.log('Effect Clean Up')
          
        }

  },[])


   useEffect(()=>{
          const identifier= setTimeout(()=>{
              console.log('Check form validity')

              setFormIsValid(

                enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollege.trim().length > 0
              );
          },500);

          return ()=>{
                console.log('Clean Up');
                clearTimeout(identifier)
              }
   },[ enteredEmail,enteredPassword,enteredCollege])

  const emailChangeHandler = (event) => {
    setEnteredEmail(event.target.value);
  }
    

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const collegeChangeHandler=(event)=>{
    setCollege(event.target.value);
  }

  const validateEmailHandler = () => {
    setEmailIsValid(enteredEmail.includes('@'));
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const validateCollege=()=>{
    setCollegeIsValid(enteredCollege.trim().length > 0)
  }

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(enteredEmail, enteredPassword ,enteredCollege);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={enteredEmail}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={enteredPassword}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />

          
           <div className={`${classes.control} ${collegeIsValid === false ? classes.invalid : ''}`}></div>
            <label htmlFor="college">CollegeName</label>
            <input
            type="text"
            id="college"
            value={enteredCollege}
            onChange={collegeChangeHandler}
            onBlur={validateCollege}
            />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
