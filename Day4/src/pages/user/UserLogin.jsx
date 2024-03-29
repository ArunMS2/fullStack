// App.jsx
import React, { useState } from 'react';
import '../../assets/css/UserLogin.css';
// import boatImage from '../assets/images/boat1.jp'; // Import the boat image
import { Link, useNavigate } from 'react-router-dom';
// import Navbar from '../components/Navbar';
// import video from '../../assets/videos/video.mp4';
// import Navbar from '../../component/Header/Navbar';
// import Footer from "../../component/Footer/Footer";

const UserLogin = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [loggedIn, setLoggedIn] = useState(false);
    const [error, setError] = useState('');
    const navigate=useNavigate()
  
    const handleSubmit = (e) => {
      e.preventDefault();
      // Validate email and password (Example validation)
      if (!email || !password) {
        setError('Email and Password are required');
        return;
      }
      // Simulate login (Example: check credentials)
      if (email === 'user@example.com' && password === 'password') {
        setLoggedIn(true);
        setError('');
      } else {
        setError('Invalid email or password');
      }
      navigate('/userdashboard');
    };
  
    return (
      <div className='log-nav'>
       {/* <Navbar/> */}
              {/* <video src={video} autoPlay muted loop></video> */}
      <div className="login2-container">
        {/* Single card with separator line */}
        <div className="card2-container">
          <div className="card2-left">
            <div className="card2-body">
              <h5 className="card2-title"  style={{
                fontFamily:'cursive'
              }}>Welcome Back!!</h5>
              <p className="card2-text"  style={{
                fontFamily:'cursive'
              }}>Book Your Boat House</p>
              {/* <img src={boatImage} className="img-fluid" alt="Boat House" /> */}
            </div>
          </div>
          <div className="separator-line"></div>
          <div className="card2-right">
            <div className="login-card2">
              <h2 style={{textAlign:'center',
            fontFamily:'cursive'}}>Login</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label>Email</label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className="form-control"
                  />
                </div>
                <div className="form-group">
                  <label>Password</label>
                  <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="form-control"
                  />
                </div>
                {error && <div className="error">{error}</div>}
                {loggedIn && <div className="alert success">Logged in successfully!</div>}
                <div className="button-container">
                    <center>
                  <button type="submit" className="btn btn-primary">Login</button>
                  <br></br>
                  <br></br>
                  <p><Link className='reg' to='/user/Registration'>New User? Create an account</Link></p>
                  <p><Link className='reg1' to='/user/forgot'>Forgotpassword?</Link></p>
                  </center>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
      {/* <Footer/> */}
      </div>
  
    );
  };

export default UserLogin;
