
import React from 'react';
import { NavLink} from 'react-router-dom';

const Navigation = () => {

    return (
        <div className="App">     
            <div className="wrapper">
                <div id="wrap">
                    <nav className="siteNavigation_nav_links">
                        <div className="main_links_nav">
                        <img className='logoimage' alt="SSS Logo" src="/images/super.png"></img>
                           <div className="navigationpanel">
                                <NavLink className="mob_link" to="/">Home</NavLink>
                                <NavLink className="mob_link" to="/aboutUs">About Us</NavLink>
                                <NavLink className="mob_link" to="/team">Team</NavLink>
                                <NavLink className="mob_link" to="/admin">Admin</NavLink>
                           </div>
                        </div>
                    </nav>
                </div>
            </div>
        </div>
    )
}

export default Navigation;