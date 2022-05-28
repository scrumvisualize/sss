import React, { useEffect, useState } from 'react';
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const RequestToJoin = () =>{
    const { register, handleSubmit, formState: { errors }} = useForm();
    const [loginData, setLoginData] = useState("");
    const [helperText, setHelperText] = useState('');
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
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

        const onChangePicture = e => {
            if (e.target.files[0]) {
              console.log("picture: ", e.target.files);
              setPicture(e.target.files[0]);
              const reader = new FileReader();
              reader.addEventListener("load", () => {
                setImgData(reader.result);
              });
              reader.readAsDataURL(e.target.files[0]);
            }
        };

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
                        <label>Photo</label>
                        <div className="request_profile_image">
                            <input id="profilePic" type="file" onChange={onChangePicture} />
                         </div>
                        <div className="previewProfilePic">
                            <img className="playerProfilePic_home_tile" src={imgData} />
                        </div>

                        <label>Code</label>
                        <input
                            id="code"
                            type="text"
                            {...register("code", { 
                                required: true,
                                maxLength: 6,
                                pattern: {
                                    value:/^[0-9a-zA-Z(\-)]$/, // /^[a-zA-Z0-9]$/i, ///^([a-zA-Z0-9]+)$/i
                                    message: "Only alphanumeric characters allowed !"
                                  }
                            })}
                        />
                        <section>
                        <span className="nameValidationText">
                             {errors.code && errors.code.type === "required" && <span>Code is required !</span>}
                             {errors.code && <span>{errors.code.message}</span>}
                             
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