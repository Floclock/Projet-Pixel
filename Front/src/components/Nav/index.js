import React from 'react';
import { NavLink } from 'react-router-dom';

import HamburgerMenu from './HamburgerMenu';
import './nav.scss';

const Nav = ({ routes, location, history }) => {



  return (
    <nav className="fixed-nav">
          <div className="nav">
            <img className="logo" alt="pixel-café" src="src/images/logo.png" />
            {/*<HamburgerMenu changeClassName={routes} />*/}
            <ul className="nav-link">
              {Object.keys(routes).map(route => (
                <li className={`li-${routes[route].class}`}>
                <a>
                  <NavLink
                    exact
                    key={route}
                    to={route}
                  >
                  {routes[route].nav}
                  </NavLink>
                  </a>
                </li>
              ))}
            </ul>
            </div>
    </nav>
  );
};


export default Nav;




// import NavData from 'src/data/nav';
// import HamburgerMenu from './HamburgerMenu';
// import './nav.scss';

// const Nav = () => {
//   const [path, setPath] = useState('');
//   const [label, setLabel] = useState('');

//   useEffect(() => {
//     setPath(window.location.pathname.substr(1));

//     NavData.find(nav => (
//       nav.route === window.location.pathname ? setLabel(nav.label) : null));
//   });

//   const changePath = (nav) => {
//     setPath(nav.route.substr(1));
//     setLabel(nav.label);
//   };


//   return (
//     <nav className={`header${path}`}>
//       <div className="nav">
//         <img className="logo" alt="pixel-café" src="src/images/logo.png" />
//         <HamburgerMenu changeClassName={changePath} />
//         <ul className="nav-link">
//           {NavData.map(nav => (
//             <li onClick={() => changePath(nav)}>
//               <NavLink
//                 key={nav.label}
//                 to={nav.route}
//               >
//                 {nav.label}
//               </NavLink>
//             </li>
//           ))}
//         </ul>
//       </div>
//       {path === ''
//         ? (
//           <div id="title">
//             <h1 className="sub-title1">bienvenue <br /> au <br /> pixel cafe</h1>
//             <div className="line" />
//             <p className="sub-title2">De délicieux caféssaupoudrés d'une pincée de retro-gaming ou bien est-ce l'inverse ?</p>
//           </div>
//         )
//         : <h1 className="page-title">{label}</h1>}
//     </nav>
//   );
// };


// export default Nav;
