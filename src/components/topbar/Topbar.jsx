import React from 'react'
import "./topbar.css"

export default function Topbar() {
  return (
    <div className='topbar'>
      <div className="topbarWrapper">
        <div className="topLeft">
          <img className='logo' src="./img/logo.png" alt="" />
        </div>
        <div className="topRight">
          <div className="topbarIconContainer">
            <img className='navbarIcons' src="https://cdn-icons-png.flaticon.com/512/61/61073.png" alt="" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <img className='navbarIcons' src="https://icon-library.com/images/language-icon-png/language-icon-png-18.jpg" alt="" />
            <span className="topIconBadge">2</span>
          </div>
          <div className="topbarIconContainer">
            <img className='navbarIcons' src="https://upload.wikimedia.org/wikipedia/commons/d/dc/Settings-icon-symbol-vector.png" alt="" />
          </div>
            <img src="https://www.freepnglogos.com/uploads/mr-bean-png/mr-bean-harley-quinn-suicide-squad-png-image-purepng-7.png" alt="" className="topAvatar" />
        </div>
      </div>
    </div>
  )
}
