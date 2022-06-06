import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
const RequestToJoin = () =>{
    const { register, handleSubmit, formState: { errors }, reset} = useForm();
    const [loginData, setLoginData] = useState("");
    const [helperText, setHelperText] = useState('');
    const [preview, setPreview] = useState('');
    const [picture, setPicture] = useState(null);
    const [imgData, setImgData] = useState(null);
    const navigate = useNavigate();
    const [isSent, setIsSent] = useState(false);
    const [formRegister, setRegister] = useState({ _id: '', name: '', email: '', mobile: '', photo: '', code: ''});
    const successMessage = <p>Request send successfully!</p>
    const form = <form>...</form>

// If no profile image is being uploaded, to avoid the broken display of image, display a default image.
        const addDefaultSrc = e => {
            e.target.src = 'images/default-icon.png';
        }

        // const onChangePicture = e => {
        //     if (e.target.files[0]) {
        //       console.log("picture: ", e.target.files);
        //       setPicture(e.target.files[0]);
        //       const reader = new FileReader();
        //       reader.addEventListener("load", () => {
        //         setImgData(reader.result);
        //       });
        //       reader.readAsDataURL(e.target.files[0]);
        //     }
        // };
        
        const onChangePicture = e => {
          console.log('picture: ', picture);
          if (e.target.files.length) {
            setPreview(URL.createObjectURL(e.target.files[0]));
            setPicture(e.target.files[0]);
            setRegister({ ...formRegister, [e.target.name]: e.target.value });
          } else {
            return false;
          }
        };
        
        const onChange = (e) => {
            e.persist();
            setRegister({ ...formRegister, [e.target.name]: e.target.value });
        }

        const onSubmit = (data) => {
            const formData = new FormData();
            console.log(data.name);  // whatever was typed into the name field
            for(let key in data) {
              formData.append(key, data[key]);
            }
          
            if (picture) formData.append("photo", picture);
          
            const config = {
              headers: {
                  'content-type': 'multipart/form-data' 
              }
            }
              const fetchData = async () => {
                try {
                  const res = await axios.put('http://localhost:8000/service/joinrequest', formData, config);
                  console.log("Front End success message:" + res.data.success);
                  if (res.data.success) {
                    setIsSent(true);
                    // navigate('/');
                  }
                  else {
                    console.log(res.data.message);
                    setHelperText(res.data.message);
                  }
                } catch (e) {
                  setHelperText(e.response.data.message);
                  console.log(e);
                }
              }
              fetchData();
              reset();
            }
            console.log(errors);
    return (
        <div className="wrapper">
            <section className="col-high">
                <h3>Send a request</h3>
                <div className='requestSection'>
                    <form onSubmit={handleSubmit(onSubmit)}  className="myForm" encType="multipart/form-data">
                        <label>Name</label>
                        <input
                            id="name"
                            name="name"
                            type="text"
                            {...register("name", { 
                              onChange: (e) => {
                                let val = e.nativeEvent.path[0].value;
                                setRegister(previous => ({
                                  ...previous, 
                                  name: val
                                }));
                            },
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
                            name="email"
                            type="email"
                            {...register("email", { 
                              onChange: (e) => {
                                let val = e.nativeEvent.path[0].value;
                                setRegister(previous => ({
                                  ...previous, 
                                  email: val
                                }));
                              },
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
                            name="mobile"
                            type="number"
                            {...register("mobile", { 
                              onChange: (e) => {
                                let val = e.nativeEvent.path[0].value;
                                setRegister(previous => ({
                                  ...previous, 
                                  mobile: val
                                }));
                            },
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
                            <input 
                            id="profilePic" 
                            name="photo" 
                            type="file" 
                            {...register("photo", { 
                              onChange: (e) => {
                                let val = e.nativeEvent.path[0].value;
                                setRegister(previous => ({
                                  ...previous, 
                                  photo: val
                                }));
                            },
                            required: true
                            })}
                            onChange={onChangePicture} 
                            />
                            <section>
                            <span className="nameValidationText">
                             {errors.photo && errors.photo.type === "required" && <span>Photo is required !</span>}
                            </span>
                            </section>
                         </div>
                        {/* <div className="previewProfilePic">
                            <img onError={addDefaultSrc} className="playerProfilePic_home_tile" src={preview} />
                        </div> */}

                        <label>Code</label>
                        <input
                            id="code"
                            name="code"
                            type="text"
                            {...register("code", { 
                              onChange: (e) => {
                                let val = e.nativeEvent.path[0].value;
                                setRegister(previous => ({
                                  ...previous, 
                                  code: val
                                }));
                            },
                              required: true
                              // pattern: {
                              //       value:/^[a-zA-Z0-9]$/i, // /^[a-zA-Z0-9]$/i, ///^([a-zA-Z0-9]+)$/i
                              //       message: "Only alphanumeric characters allowed !"
                              //     }
                            })}
                        />
                        <section>
                        <span className="nameValidationText">
                             {errors.code && errors.code.type === "required" && <span>Code is required !</span>}
                         </span>
                        </section>

                         <label>
                            <span className="loginValidationText">{helperText}</span>
                         </label>
                        <section className="col-low">
                        <input type="submit" />
                        </section>  
                    </form>
                    <span className="successRequest">
                     {isSent ? successMessage : form}
                    </span>
                </div>
            </section>
        </div>
    )
}
export default RequestToJoin