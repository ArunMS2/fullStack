import React from "react";
import '../../assets/css/Role.css';
import admin from '../../assets/images/admin.png';
import user from '../../assets/images/user.jpg';
import { Link } from "react-router-dom";
// import Navbar from '../../component/Header/Navbar';
// import Footer from "../../component/Footer/Footer";
// import Navbar from "../components/Navbar";

function Role() {
    return (
        <div className="role-nav">
            {/* <Navbar/> */}
        <div className="role">
            <div className="role-card">
                <Link className='r' to='/admin/adminlogin'>
                <img src={admin} alt="Admin" />
                <br></br>
                <br></br>
                <h2 >Admin</h2>
                </Link>
            </div>
            <div className="role-card">
                <Link className='r' to='/user/userlogin'>
                <img src={user} alt="User" />
                    <br></br>
                    <br></br>
                <h2>User</h2>
                </Link>
            </div>
        </div>
        {/* <Footer/> */}
        </div>
    );
}

export default Role;
