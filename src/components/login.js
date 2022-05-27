import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";

const Login = () =>{
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [loginData, setLoginData] = useState("");
    const [helperText, setHelperText] = useState('');
    const navigate = useNavigate();

    const onSubmit = (data) => {
        //console.log("RESULT", data);
       // alert(JSON.stringify(data));
        try {
            const userEmail = "max@test.com";
            const userPassword = "test1234";
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
                            id="email"
                            type="email"
                            {...register("email", { 
                                required: true,
                                pattern: {
                                    value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i,
                                    message: "Please enter a valid email !"
                                }
                            })}
                        />
                        <section>
                        <span className="emailValidationText">
                             {errors.email && errors.email.type === "required" && <span>Email is required !</span>}
                             {errors.email && <span>{errors.email.message}</span>}
                         </span>
                        </section>
                        <label>Password</label>
                        <input
                            id="password"
                            type="password"
                            {...register("password", { 
                                required: true,
                                minLength: {
                                    value: 5,
                                    message: "Minimum length of 5 letters"
                                },
                                pattern: {
                                    value: /^(?=.*?\d)(?=.*?[a-zA-Z])[a-zA-Z\d][a-zA-Z\d\#!@~$]+$/,
                                    message: "Password begin with letter, includes number & special character"
                                }
                            })}
                        />
                        <section>
                        <span className="passwordValidationText">
                             {errors.password && errors.password.type === "required" && <span>Password is required !</span>}
                             {errors.password && <span>{errors.password.message}</span>}
                         </span>
                        </section>
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