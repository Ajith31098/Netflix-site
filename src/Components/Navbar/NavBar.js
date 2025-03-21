
// import React from 'react';
// import "./NavBar.css";
// import { Link , useLocation} from 'react-router-dom';

// function NavBar() {
//   const location = useLocation();

//   return (
//     <div className='navbar'>
//       <img
//         className='logo'
//         src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
//         alt='Netflix logo'
//       />

//     {location.pathname !== "/login" && location.pathname !== "/register" && (
//         <Link to="/login">
//           <img
//             className='avatar'
//             src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
//             alt='Avatar'
//           />
//         </Link>
        
//     )}
//     </div>
//   );
// }

// export default NavBar;


import React from 'react';
import { Link, useLocation } from 'react-router-dom'; // Import useLocation
import "./NavBar.css";

function NavBar() {
  const location = useLocation(); // Get the current path safely

  return (
    <div className='navbar'>
      <img
        className='logo'
        src='https://upload.wikimedia.org/wikipedia/commons/thumb/0/08/Netflix_2015_logo.svg/1920px-Netflix_2015_logo.svg.png'
        alt='Netflix logo'
      />

      {/* Check pathname using useLocation instead of global location */}
      {location.pathname !== "/login" && location.pathname !== "/register" && (
        <Link to="/login">
          <img
            className='avatar'
            src='https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png'
            alt='Avatar'
          />
        </Link>
      )}
    </div>
  );
}

export default NavBar;
