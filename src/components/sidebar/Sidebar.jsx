
import React from 'react'
import "./sidebar.css"
import { Link } from 'react-router-dom'

export default function Sidebar() {
  return (
    <div className='sidebar'>
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Tablero</h3>
          <ul className="sidebarList">
            <Link to="/" className='link'>
            <li className="sidebarListItem active">
              <img className='sidebarIcon' src="https://icon-library.com/images/white-home-icon-png/white-home-icon-png-2.jpg" alt="" />
              Home
            </li>
            </Link>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="http://cdn.onlinewebfonts.com/svg/img_569476.png" alt="" />
              Analíticas
            </li>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="https://cdn-icons-png.flaticon.com/512/38/38807.png" alt="" />
              Ventas
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Menú rápido</h3>
          <ul className="sidebarList">
            <Link to="/Usuarios" className='link'>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="https://cdn-icons-png.flaticon.com/512/709/709579.png" alt="" />
              Usuarios
            </li>
            </Link>
            <Link to="/Productos" className='link'>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="http://cdn.onlinewebfonts.com/svg/img_565500.png" alt="" />
              Productos
            </li>
            </Link>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="https://img.icons8.com/ios/500/refund-2.png" alt="" />
              Transacciónes
            </li>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="https://cdn-icons-png.flaticon.com/512/66/66105.png" alt="" />
              Informes
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notificaciones</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="https://cdn-icons-png.flaticon.com/512/2590/2590818.png" alt="" />
              Correo
            </li>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="https://static.thenounproject.com/png/761572-200.png" alt="" />
              Feedback
            </li>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-email-512.png" alt="" />
              Mensajes
            </li>
          </ul>
        </div>

        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Personal</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="https://uxwing.com/wp-content/themes/uxwing/download/42-business-professional-services/services.png" alt="" />
              Administrar
            </li>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="http://cdn.onlinewebfonts.com/svg/img_569476.png" alt="" />
              Analíticas
            </li>
            <li className="sidebarListItem">
              <img className='sidebarIcon' src="https://cdn-icons-png.flaticon.com/512/3572/3572173.png" alt="" />
              Información
            </li>
          </ul>
        </div>

      </div>
    </div>
  )
}
