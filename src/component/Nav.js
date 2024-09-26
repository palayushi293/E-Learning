import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css'
export default function (props) {
  return (
    <div style={{backgroundColor:"#343434",marginTop:"20px"}}>



      <nav className="navbar navbar-expand-lg navbar-light bg-body-tertiary">
        <div className="container-fluid">
          <button
            data-mdb-collapse-init
            className="navbar-toggler"
            type="button"
            data-mdb-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fas fa-bars"></i>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <a className="navbar-brand mt-2 mt-lg-0" href="#">
              <img
                src="https://img.freepik.com/free-vector/geography-education-logo-template-vector-with-globe-science-graphic_53876-114086.jpg?size=626&ext=jpg"
                alt="Maruti"
                loading="lazy"
                style={{height:"80px"}}
              />
            </a>

            <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ marginTop: 30, height: 40 }}>
              <li className="nav-item">
                <b><Link className="nav-link" style={{ fontFamily : 'Roboto' ,color:"white",  }} to="/">{props.home}</Link></b>
              </li>
              <li className="nav-item">
                <b><Link className="nav-link" style={{ fontFamily : 'Roboto',color:"white" }} to="/about">{props.about}</Link></b>
              </li>
              <li className="nav-item">
                <b><Link className="nav-link" style={{ fontFamily : 'Roboto',color:"white" }} to="/course">{props.course}</Link></b>
              </li>
              <li className="nav-item">
                <b><Link className="nav-link" style={{ fontFamily : 'Roboto',color:"white" }} to="/contact">{props.contact}</Link></b>
              </li>
              <li className="nav-item" style={{ marginLeft: 60, paddingLeft: 640 }}>
                <div className="input-group">
                  <div className="form-outline" data-mdb-input-init>
                    <input type="search" id="form1" placeholder="Search" className="form-control" style={{ height: 40, width: 210 }} />
                  </div>
                  <button type="button" className="btn btn-light mx-1">
                    <img src="https://imgs.search.brave.com/XqDSlT3Ga2caqpEEeK7aB3bsgx_1EHCKHRX2oh8cG7I/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9jZG4x/Lmljb25maW5kZXIu/Y29tL2RhdGEvaWNv/bnMvaGF3Y29ucy8z/Mi82OTg1MzMtaWNv/bi0xMTEtc2VhcmNo/LTEyOC5wbmc" style={{ height: 20 }} alt="Search Icon" />
                  </button>
                </div>
              </li>
              <li className="nav-item">
              
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </div>
  );
}
