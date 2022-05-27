import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const RequestToJoin = () =>{
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [loginData, setLoginData] = useState("");
    const [helperText, setHelperText] = useState('');
    const navigate = useNavigate();

    const onSubmit = (data) => {
        //console.log("RESULT", data);
        //alert(JSON.stringify(data));
        try {
    
        } catch (e){
            console.log(e);
        }
      };
        console.log(errors);

    return (
        <div className="wrapper">
            <section className="col-high">
                <h3>Send a request</h3>
                <div className='requestSection'>
                    <form onSubmit={handleSubmit(onSubmit)}>
                        <label>Name</label>
                        <input
                            id="name"
                            type="text"
                            {...register("name", { 
                                required: true,
                                maxLength: 30
                            })}
                        />
                        <section>
                        <span className="nameValidationText">
                             {errors.name && errors.name.type === "required" && <span>Name is required !</span>}
                             {errors.name && errors.name.type === "maxLength" && <span>Name should be less than 30 characters !</span>}
                             
                         </span>
                        </section>
                
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
                        <label>Mobile</label>
                        <input
                            id="mobile"
                            type="number"
                            {...register("mobile", { 
                                required: true,
                                valueAsNumber: true,
                                maxLength: 10
                            })}
                        />
                        <section>
                        <span className="nameValidationText">
                             {errors.mobile && errors.mobile.type === "required" && <span>Mobile is required !</span>}
                             {errors.mobile && errors.mobile.type === "maxLength" && <span>Maximum of 10 digits</span>}
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
export default RequestToJoin