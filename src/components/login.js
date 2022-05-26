import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const { register, errors, handleSubmit } = useForm();
    const [loginData, setLoginData] = useState("");
    const [helperText, setHelperText] = useState('');
    const navigate = useNavigate();

    const onSubmit = (data) => {
        //console.log("RESULT", data);
        //alert(JSON.stringify(data));
        try {
            const userEmail = "max@test.com";
            const userPassword = "test123#";
            if(data.email === userEmail && data.password === userPassword ){
                localStorage.setItem('loginEmail', userEmail);
                setLoginData(userEmail);
                navigate('/admin');
                window.location.reload(true) 
            } else {
                setHelperText("Invalid login details");
            }
        } catch (e){
            console.log(e);
        }
      };
    console.log(errors);

    return (
        <div className="wrapper">
            
            <section className="col-high">
            <h3>Login</h3>
                <div className='loginSection'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Email</label>
                        <input
                            type="text"
                            {...register("email", { required: true})}
                        />
                        <label>Password</label>
                        <input
                            type="text"
                            {...register("password", { required: true})}
                        />
                         <label>
                            <span className="loginValidationText">{helperText}</span>
                         </label>
                        <section className="col-low">
                        <input type="submit" />
                        </section>  
                    </form>
                </div>
            </section>
        </div>
    )
}
export default Login