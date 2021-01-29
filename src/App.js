import React, { useRef } from 'react'
import './App.css';
import { useForm } from "react-hook-form";


function App() {
  
  const { register, watch, errors, handleSubmit } = useForm();
  console.log(watch('email'))
  const password = useRef();
  password.current = watch("password");
  const onSubmit = (data) => {
    console.log('data다', data)

    // axios.post('/', data)
  }

  return (
    <form 
      onSubmit={handleSubmit(onSubmit)}
    >
      <label>Email</label>
      <input 
        name="email" type="email" 
        ref={register({ required: true, pattern: /^\S+@\S+$/i })} 
      />
      {errors.email && <p>This email field is required</p>}

      <label>First Name</label>
      <input 
        name="firstName"
        ref={register({ 
          required: true, 
          maxLength: 10,
          pattern: /^[a-z]+$/
        })}
      />
      {errors.firstName && errors.firstName.type === "required" && <p>This First Name field is required</p>}
      {errors.firstName && errors.firstName.type === "maxLength" && <p>Your input exceed maximun length</p>}
      {errors.firstName && errors.firstName.type === "pattern" && <p>Just only allow english</p>}

      <label>Last Name</label>
      <input 
        name="lastName"
        ref={register({ 
          required: true, 
          maxLength: 15,
          pattern: /^[a-z]+$/
        })}
      />
      {errors.lastName && errors.lastName.type === "required" && <p>This First Name field is required</p>}
      {errors.lastName && errors.lastName.type === "maxLength" && <p>Your input exceed maximun length</p>}
      {errors.firstName && errors.firstName.type === "pattern" && <p>Just only allow english</p>}

      <label>Password</label>
      <input 
        name="password"
        type="password"
        ref={register({ 
          required: true, 
          minLength: 6, 
          pattern: /^.*(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/ 
        })}
      />
      {errors.password && errors.password.type === "required" && <p>This email field is required</p>}
      {errors.password && errors.password.type === "minLength" && <p>Password must have at least 6 cahracters</p>}
      {errors.password && errors.password.type === "pattern" && <p>You must mix english, number and special</p>}

      <label>Password Confirm</label>
      <input 
        name="password_confirm"
        type="password"
        ref={register({ 
          required: true, 
          validate: (value) => value === password.current,
        })}
      />
      {errors.password_confirm && errors.password_confirm.type === "required" && <p>This email field is required</p>}
      {errors.password_confirm && errors.password_confirm.type === "validate" && <p>The password don't match</p>}
      
      <input type="submit" />
    </form>
  )
}

export default App
