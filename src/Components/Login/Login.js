import React from 'react';
import './login.css';
import NavBar from "../Navbar/NavBar";
import { Link } from 'react-router-dom'; // Import Link
import bgImage from '../../assets/a.jpg';


function Login() {
  return (
    <div className='login' style={{ '--bgImage': `url(${bgImage})` }}>
      <NavBar />
      <div className='input_tab'>
        <div className='htwo'>
            <h2>Sign In</h2>
        </div>
        <form>
          <input type="email" placeholder="Email or mobile number " className="input_field" required />
          <input type="password" placeholder="Password" className="input_field" required />

          <button type="submit" className="sign_in_btn">Sign In</button>
          {/* <a href="#" className="forgot_password">Forgot Password?</a> */}
          <Link to="/register" className="forgot_password">Forgot Password?</Link>


          

          <div className="login_options">
            <label>
              <input type="checkbox" /> Remember Me
            </label>
          </div>
          
          <div className="signup_container">
            <Link to="/register" className="signup_link">
                <span>New to Netflix? <span className="signup">Signup now.</span></span>
            </Link>
          </div>



        </form>
      </div>
    </div>
  );
}

export default Login;


