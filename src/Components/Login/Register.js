// import React, { useState } from 'react';
// import NavBar from '../Navbar/NavBar';
// import './register.css';

// function Register() {
//   const [email,setEmail] = useState('')
//   const [password,setPassword] = useState('')

//   const handleSubmit = (e)=>{
//     e.preventDefault()
//     console.log(email,password)
//   }

//   return (
//     <div className='register'>
//       <NavBar />

//       <div className='input'>
//         <h1>
//           Unlimited movies, <br />
//           TV shows and <br />
//           more
//         </h1>

//         <h6>Starts at ₹149. Cancel at any time.</h6>

//         <p>Ready to watch? Enter your email to create or restart your membership.</p>

//         <form onSubmit={handleSubmit} className="email_form">
//           <input 
//             type="email" 
//             value={email}
//             onChange={(e)=>setEmail(e.target.value)}
//             placeholder="Email or mobile number" 
//             className="input_field" 
//             required 
//           />
          
//           <input 
//             type="password"
//             value={password}
//             onChange={(e)=>setPassword(e.target.value)}
//             placeholder="New Password" 
//             className="input_field" 
//             required 
//           />
//           <button type="submit" className="get_started_btn">Get Started</button>
//         </form>
//       </div>
//     </div>
//   );
// }

// export default Register;
