import React, { useRef } from 'react';
import { Card, Input, Button, Typography } from '@material-tailwind/react';
import { setLogin } from "../redux/userSlice";
import { useDispatch } from "react-redux";
import axios from 'axios'; 

export default function Loginpage() {
  const dispatch = useDispatch();
  const nameRef = useRef();
  const pwRef = useRef();
  const emailRef = useRef();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const nameValue = nameRef.current.value;
    const pwValue = pwRef.current.value;
    const emailValue = emailRef.current.value;

    try {
      const response = await axios.post('http://localhost:8000/login/', {
        password: pwValue,
        email: emailValue
      });

      console.log(response.data);

      dispatch(setLogin({ 
        name: nameValue, 
        password: pwValue, 
        email: emailValue, 
        accessToken: response.data.tokens.access,
        refreshToken: response.data.tokens.refresh
      }));


      sessionStorage.setItem('name', nameValue);
      sessionStorage.setItem('email', emailValue);
      sessionStorage.setItem('accessToken', response.data.tokens.access);
      sessionStorage.setItem('refreshToken', response.data.tokens.refresh);
      
    } catch (error) {
      console.error("Error during the API call", error);
    }
  };

  return (
    <Card 
      color="transparent" 
      shadow={false}
      className='flex flex-col items-center justify-center mt-5'
    >
      <Typography variant="h4" color="blue-gray">
        Sign Up
      </Typography>
      <Typography color="gray" className="mt-1 font-normal">
        Enter your details to register.
      </Typography>
      <form className="mt-8 mb-2 w-80 max-w-screen-lg sm:w-96" onSubmit={handleSubmit}>
        <div className="mb-4 flex flex-col gap-6">
          <Input size="lg" label="Name" name="name" inputRef={nameRef} />
          <Input size="lg" label="Email" name="email" inputRef={emailRef} />
          <Input type="password" size="lg" label="Password" name="password" inputRef={pwRef} />
        </div>
        <Button className="mt-6" fullWidth type="submit">
          Register
        </Button>
      </form>
    </Card>
  );
}
