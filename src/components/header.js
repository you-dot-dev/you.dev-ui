import { Link } from "gatsby"
import {useContext} from 'react'
import PropTypes from "prop-types"
import React from "react"
import AuthContext from '../contexts/auth/AuthContext';
import youDevLogo from "../images/you-dev-header-logo.png";

const Header = ({ siteTitle }) => {

  const authContext = useContext(AuthContext);

  const { user } = authContext;
  console.log('user', user)

  return(
  <header>
    <nav>
      <ul className="header-links">
        <li><Link to="/"><img src={youDevLogo} /></Link></li>
        <li><Link to="/articles">articles</Link></li>
        <li><Link to="/screencasts">screen casts</Link></li>
        <li><Link to="/skillmap">skill map</Link></li>
      </ul>
      <ul className="account-menu">
        <li>
          <h4 
            style= {{
              padding:'15px',
              color:'#fff',
              fontFamily: "Nunito",
              fontSize:'18px'
            }}
          > 
          {user ? <h4>{user.email}</h4> : null}
          </h4>
        </li>
       
        <li className="dropdown-menu">
          <Link>
            <svg viewBox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
              <path d="m437.019531 74.980469c-48.351562-48.351563-112.640625-74.980469-181.019531-74.980469-68.382812 0-132.667969 26.628906-181.019531 74.980469-48.351563 48.351562-74.980469 112.636719-74.980469 181.019531 0 68.378906 26.628906 132.667969 74.980469 181.019531 48.351562 48.351563 112.636719 74.980469 181.019531 74.980469 68.378906 0 132.667969-26.628906 181.019531-74.980469 48.351563-48.351562 74.980469-112.640625 74.980469-181.019531 0-68.382812-26.628906-132.667969-74.980469-181.019531zm-308.679687 367.40625c10.707031-61.648438 64.128906-107.121094 127.660156-107.121094 63.535156 0 116.953125 45.472656 127.660156 107.121094-36.347656 24.972656-80.324218 39.613281-127.660156 39.613281s-91.3125-14.640625-127.660156-39.613281zm46.261718-218.519531c0-44.886719 36.515626-81.398438 81.398438-81.398438s81.398438 36.515625 81.398438 81.398438c0 44.882812-36.515626 81.398437-81.398438 81.398437s-81.398438-36.515625-81.398438-81.398437zm235.042969 197.710937c-8.074219-28.699219-24.109375-54.738281-46.585937-75.078125-13.789063-12.480469-29.484375-22.328125-46.359375-29.269531 30.5-19.894531 50.703125-54.3125 50.703125-93.363281 0-61.425782-49.976563-111.398438-111.402344-111.398438s-111.398438 49.972656-111.398438 111.398438c0 39.050781 20.203126 73.46875 50.699219 93.363281-16.871093 6.941406-32.570312 16.785156-46.359375 29.265625-22.472656 20.339844-38.511718 46.378906-46.585937 75.078125-44.472657-41.300781-72.355469-100.238281-72.355469-165.574219 0-124.617188 101.382812-226 226-226s226 101.382812 226 226c0 65.339844-27.882812 124.277344-72.355469 165.578125zm0 0"/>
            </svg>
            {user ? 
            <div className="dropdown-content">
              <Link to='/account'>Account</Link>
              <Link>Settings</Link>
              <Link>Logout</Link>
            </div> : 
             <div className="dropdown-content">
               <Link to='/signin'>signin </Link></div>}
          </Link>
        </li> :  
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
