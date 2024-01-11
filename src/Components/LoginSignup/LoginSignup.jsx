import React, { useState } from "react";
import './index.css';
import './LoginSignup.css';
import { FaUserAlt } from 'react-icons/fa';
import { MdEmail } from "react-icons/md";
import { RiLockPasswordFill } from "react-icons/ri";

const LoginSignup = ()=>
{
const [action,setAction]= useState("Sign In");

    return(
        <div className="main-conatainer ">
            <div  className="header">
            <div className="text">{action}</div>
            <div className="underline"></div> 
            </div>

            <div className="inputs">
                {action==="Sign In" ?<div></div>:<div className="input">
                <FaUserAlt  className="custom-icon"/>
                    <input type="text"  placeholder="Enter UserName"/>
                </div> }
              

                <div className="input ">

                <MdEmail className="custom-icon" />
                    <input type="email"  placeholder="Enter Email" />
                </div>

                <div className="input">
                <RiLockPasswordFill className="custom-icon" />
                    <input type="password"   placeholder="Enter Password"/>
                </div>

            </div>
            <div className="Forgot-pwd">Forgot Passwrd ? <span> <a href="https://www.w3schools.com/" className="click-visit" target="_blank" > Click here</a></span></div>

            <div className="Submit-conntainer">
            <div className={action==="Sign In"?"Submit gray":"Submit"} onClick={()=>{setAction("Sign In")}}>Sign Up</div>
            <div className={action==="Sign Up"?"Submit gray":"Submit"} onClick={()=>{setAction("Sign Up")}}>Sign In</div>
            </div>
        </div>
    )
}
export default LoginSignup