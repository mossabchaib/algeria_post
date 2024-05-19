import React from 'react'
import style from './style.module.css'

import NavDropdown from 'react-bootstrap/NavDropdown';
export default function Button_All_Category() {
  
  return (
  
    <div>
        <button className={style.submit1} style={{marginLeft:'10%',background:'#fff',color:'#000'}}>
        <NavDropdown title="All Category" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">   <span style={{marginRight:'5px'}}> Edit</span>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2" >
             <span style={{color:'red'}} >remove</span>
             
              </NavDropdown.Item>
            </NavDropdown>
        </button>
    </div>
  )
}
