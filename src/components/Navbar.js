import React from 'react'
import PropTypes from 'prop-types' //here we import proptype here.
import { Link } from 'react-router-dom'

export default function Navbar(props) {  
  return (
    
    <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
    <div className="container-fluid">
      <a className="navbar-brand"href="/">{props.title}</a>
      <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
          <li className="nav-item"> 
            <Link className="nav-link active" aria-current="page" to="/">{props.HOME}</Link>
          </li>
          <li className="nav-item">
            <Link  className="nav-link" to="/About">{props.about}</Link>
          </li>
       </ul>
        {/* <form className="d-flex" role="search">  
          <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
          <button className="btn btn-outline-success" type="submit">Search</button>
        </form> */}

<div className={`form-check form-switch my-3 text-${props.mode===`light`?`dark`:`light`}`}>
<input className="form-check-input" onClick={props.toggleMode} type="checkbox" area-checked="switch" id="flexSwitchCheckDefault"/>
<label className="form-check-label" htmlFor="flexSwitchCheckDefault">Enable dark mode</label>
</div>
        
      </div>
    </div>
  </nav>
  )
}

//here we are using porptypes but first we need to import porptypes .
Navbar.prototype = {title:PropTypes.string.isRequired,
  about: PropTypes.string.isRequired,}
 
  // here we use default props which work on that condintion when we do not pass anything in the props. then we use this 
// }
//  Navbar.defaultProps={
//   title: "your title here", about: `about us `, HOME:`your home content here`,
//  }