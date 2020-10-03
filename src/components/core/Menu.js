import React, { Fragment } from "react";
import { Link, withRouter } from "react-router-dom";
import { isAutheticated } from '../auth/helpers/index'
import send from './send.svg';
import home from './home.svg';
import like from './heart.svg';
import user from './user.svg';

// const currentTab = (history, path) => {
//   if (history.location.pathname === path) {
//     return { color: "#2ecc72" };
//   } else {
//     return { color: "#FFFFFF" };
//   }
// };


const Menu =  ({ history })=> (
 
  <nav className="navbar justify-content-center navbar-expand shadow-sm  navbarstyle">
  <div className="container">
    <div className="navbar-header">
    <Link className="nav-link" to='/'>Social Hive  </Link>
    </div>
    <ul className="nav navbar-nav navbar-right">
    {isAutheticated() && (  <li className="nav-item"><Link  className="nav-link" to='/' ><img src={home} className="icon" alt=''></img></Link></li> )}
    {isAutheticated() && (  <li className="nav-item"><Link  className="nav-link"  to='/'><img src={send} className="icon" alt=''></img></Link></li> )}
    {isAutheticated() && (  <li className="nav-item"><Link className="nav-link"  to='/'><img src={like} className="icon" alt=''></img></Link></li>)}
    {isAutheticated() && ( <li className="nav-item"><Link  className="nav-link"   to='/profile'><img src={user} className="icon" alt=''></img></Link></li>)}
    {!isAutheticated() && (
        <Fragment>
          <li className="nav-item">
            <Link
              className="nav-link"
              to="/signin"
            >
              
              <button className='navbar-btn btn btn-outline-primary'>Signin</button>
            </Link>
          </li>
          <li className="nav-item ">
            <Link
              className="nav-link"
              to="/register"
            >
           <button className='navbar-btn btn btn-outline-primary'>Register</button>
            </Link>
          </li>
        </Fragment>
      )}
    </ul>
  </div>
</nav>

);



export default withRouter(Menu);

