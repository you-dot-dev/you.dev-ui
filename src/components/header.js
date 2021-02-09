import { Link } from "gatsby"
import {useContext} from 'react'
import PropTypes from "prop-types"
import React from "react"
import userPNG from '../images/user.svg'
import AuthContext from '../contexts/auth/AuthContext';

const Header = ({ siteTitle }) => {

  const authContext = useContext(AuthContext);

  const { user } = authContext;

  return(
  <header>
    <nav>
      <ul className="header-links">
        <li><Link to="/">{siteTitle}</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/screencasts">Screen Casts</Link></li>
        <li><Link to="/skillmap">Skill Map</Link></li>
      </ul>
      <ul className="account-menu">
        <li>
          <h4 
            style= {{
              padding:'15px',
              color:'#fff',
              fontFamily: "'Shadows Into Light', cursive",
              fontSize:'18px'
            }}
          > 
          {user ? <h4>{user.email}</h4> : null}
          </h4>
        </li>
        <li className="dropdown-menu">
          <Link to="/account">
            <img src={userPNG}  style={{height:'30px', width:"30px", paddingRight:"5px"}} alt="user icon"/>
            <div className="dropdown-content">
              <Link>Account</Link>
              <Link>Settings</Link>
              <Link>Logout</Link>
            </div>
          </Link>
        </li>
      </ul>  
    </nav>
  </header>
  )
}
Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
