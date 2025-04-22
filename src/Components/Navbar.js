// // import React, { useState } from 'react';
// // import { Link } from 'react-router-dom';
// // import './Navbar.css';

// // const Navbar = () => {
// //   const [isOpen, setIsOpen] = useState(false);

// //   const navItems = [
// //     { label: 'Home', path: '/' },
// //     { label: 'About', path: '/about' },
// //     { label: 'Resume', path: '/resume' },
// //     { label: 'Skills', path: '/skills' },
// //     { label: 'Contact', path: '/contact' },
// //     { label: 'Portfolio', path: '/portfolio' },
// //   ];

// //   const toggleMenu = () => {
// //     setIsOpen(!isOpen);
// //   };

// //   return (
// //     <nav className="navbar">
// //       {/* Logo on the left */}
// //       <div className="navbar-logo">
// //         E
// //       </div>

// //       {/* Nav items for larger screens */}
// //       <ul>
// //         {navItems.map((item) => (
// //           <li key={item.label}>
// //             <Link to={item.path}>{item.label}</Link>
// //           </li>
// //         ))}
// //       </ul>

// //       {/* Hamburger icon with toggle effect */}
// //       <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
// //         <div></div>
// //         <div></div>
// //         <div></div>
// //       </div>

// //       {/* Mobile navigation items */}
// //       <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
// //         {navItems.map((item) => (
// //           <Link key={item.label} to={item.path} onClick={toggleMenu}>
// //             {item.label}
// //           </Link>
// //         ))}
// //       </div>
// //     </nav>
// //   );
// // };

// // export default Navbar;
// import React, { useState } from 'react';
// import { Link } from 'react-router-dom';
// import './Navbar.css';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   const navItems = [
//     { label: 'Home', path: '/' },
//     { label: 'About', path: '/about' },
//     { label: 'Resume', path: '/resume' },
//     { label: 'Skills', path: '/skills' },
//     { label: 'Contact', path: '/contact' },
//     { label: 'Portfolio', path: '/portfolio' },
//   ];

//   const toggleMenu = () => {
//     setIsOpen(!isOpen);
//   };

//   return (
//     <nav className="navbar">
//       {/* Logo on the left */}
//       <div className="navbar-logo">E</div>

//       {/* Nav items for larger screens */}
//       <ul>
//         {navItems.map((item) => (
//           <li key={item.label}>
//             <Link to={item.path}>{item.label}</Link>
//           </li>
//         ))}
//       </ul>

//       <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
//         <div></div>
//         <div></div>
//         <div></div>
//       </div>

//       <div className={`mobile-nav ${isOpen ? 'open' : ''}`}>
//         {navItems.map((item) => (
//           <Link key={item.label} to={item.path} onClick={toggleMenu}>
//             {item.label}
//           </Link>
//         ))}
//       </div>
//     </nav>
//   );
// };

// export default Navbar;
import React, { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = [
    { label: "Home", path: "/" },
    { label: "About", path: "/about" },

    { label: "Skills", path: "/skills" },
    { label: "Contact", path: "/contact" },
    { label: "Projects", path: "/portfolio" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div>
        <h1 className="namee">Mujeeba</h1>
      </div>

      <ul>
        {navItems.map((item) => (
          <li key={item.label}>
            <Link to={item.path}>{item.label}</Link>
          </li>
        ))}
      </ul>

      <div className={`hamburger ${isOpen ? "open" : ""}`} onClick={toggleMenu}>
        <div></div>
        <div></div>
        <div></div>
      </div>

      <div className={`mobile-nav ${isOpen ? "open" : ""}`}>
        {navItems.map((item, key) => (
          <li key={key} className="mobile-nav-li">
            <Link key={item.label} to={item.path} onClick={toggleMenu}>
              {item.label}
            </Link>
          </li>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
