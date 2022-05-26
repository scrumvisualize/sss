import React from 'react';
import { useNavigate } from "react-router-dom";
import SearchBox from "./admin/searchBox";


const Admin = () => {
    const navigate = useNavigate();
    
    const handleLogout = () => {
        localStorage.removeItem('loginEmail');
        navigate("/login");
      };

    return (
        <div id="App">
            <div className="logout">
                <img src="/images/logout.png" alt="Logout" onClick={handleLogout}></img>  
            </div>
            <div className="row">
               <SearchBox/>
            </div> 
        </div>
    )
}
export default Admin;