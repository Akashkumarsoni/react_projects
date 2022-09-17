import { Typography } from '@mui/material';
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import "./App.css";
import { contxtname } from './Contxt';
const Login = () => {
    const contxtobj = React.useContext(contxtname);
    const navigate = useNavigate();
    const [mail,setMail] = useState();
    const [pass,setPass] = useState();
    const noaccount=()=>{
        alert("Mail: user@mail.com and password: 1234");
    }
    const login=()=>{
        if(mail==="user@mail.com" && pass == 1234){
            contxtobj.setLogin("user@mail.com");
            navigate('/');
        }
        else
        {
            alert("Mail: user@mail.com and password: 1234");
        }
    }
  return (
    <div className='loginbox'>
        <Typography
            aria-label="open drawer"
            sx={{
              fontWeight: "1000",
              display: { xs: "block", sm: "block" },
              fontFamily: "'Satisfy', cursive",
              borderRadius: "5px",
              padding: "1.2vw",
              color:"blue",
              backgroundColor: "white",
              margin: "10px",
            }}
          >
            Myshop
          </Typography>
        <div className="logindiv">
            <p className='loginhead'>Login</p>
            <input onChange={(e)=>{setMail(e.target.value)}} className='inpfield' placeholder='Enter mail id'/>
            <input onChange={(e)=>{setPass(e.target.value)}} className='inpfield' placeholder='Enter password'/>
            <div onClick={login} className='loginbtn'>Login</div>
            <p onClick={noaccount} className='noaccount'>No account ? Signup</p>
        </div>
    </div>
    
  )
}

export default Login