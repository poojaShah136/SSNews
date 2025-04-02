import React, { useState } from 'react';
import bg from '../images/bg1.jpg'
import Button from '@mui/material/Button';
import logo from '../images/log1.png'
import TextField from '@mui/material/TextField';
import { styled } from "@mui/material/styles";
import ButtonBox from './UI/ButtonBox';
import Para from './UI/Para';

const CustomTextField = styled(TextField)({

    "& div.MuiFormControl-root":{
        width:'100% !important',
    },

  "& label.Mui-focused": {
    color: "black",
  },
  "& .MuiInput-underline": {
    width:'100%',
    "& fieldset": {
      borderColor: "gray",
    },
    "&:hover fieldset": {
      borderColor: "black",
    },
    "&.Mui-focused fieldset": {
      borderColor: "black",
    },
    "& input": {
      color: "black",
      
    },
  },
});


const Login = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Login submitted:', { email, password });
    };

    return (
        <div className='loginWrap'>
            <img src={logo} alt='logo' className='logo' />
            <Para variant='h2' color='secondary' text='Welcome' sx={{my:2}}/>
            <form onSubmit={handleSubmit} className='formLogin'>
                <div>
                    <CustomTextField id="standard-basic" label="Email/Phone Number" variant="standard" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required type='text' />
                </div>
                <div>

                    <CustomTextField
                        type="password"
                        variant='standard'
                        label='Password'
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>

                <ButtonBox type='submit' placeholder='Login' variant='contained' /> 

            </form>
        </div>
    );
};

export default Login;
