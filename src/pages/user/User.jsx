import React from 'react'
import "./user.css"
import {CalendarToday, MailOutline, PermIdentity, PhoneAndroid, Place, Publish} from '@mui/icons-material';
import { Link } from 'react-router-dom';

export default function User() {
  return (
    <div className='user'>
      <div className="userTitleContainer">
        <h1 className="userTitle">Editar Usuario</h1>
        <Link to="/newUser">
          <button className="userAddButton">Crear</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqLc-CxVzj76DaS90rcMQqK05OlbUGs2SZZICF9RYS-WkMO4oTw0aR4ow8hx4SyEBFxI&usqp=CAU" alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUsername">Donald Knuth</span>
              <span className="userShowUserTitle">Experto en computación</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Detalles de la cuenta</span>
              <div className="userShowInfo">
                <PermIdentity className='userShowIcon'/>
                <span className="userShowInfoTitle">donknuth38</span>
              </div>
              <div className="userShowInfo">
                <CalendarToday className='userShowIcon'/>
                <span className="userShowInfoTitle">10.01.1938</span>
              </div>
              <span className="userShowTitle">Detalles de contacto</span>

              <div className="userShowInfo">
                <PhoneAndroid className='userShowIcon'/>
                <span className="userShowInfoTitle">+ 1 10011938</span>
              </div>
              <div className="userShowInfo">
                <MailOutline className='userShowIcon'/>
                <span className="userShowInfoTitle">donknuth38@gmail.com</span>
              </div>
              <div className="userShowInfo">
                <Place className='userShowIcon'/>
                <span className="userShowInfoTitle"> Milwaukee, Wisconsin | USA </span>
              </div>
            </div>
          </div>
          <div className="userUpdate">
            <span className="userUpdateTitle">Editar</span>
            <form className="userUpdateForm">
              <div className="userUpdateLeft">
                <div className="userUpdateItem">
                  <label>Nombre de usuario</label>
                  <input type="text" placeholder='donknuth38' className='userUpdateInput'/>
                </div>
                <div className="userUpdateItem">
                  <label>Nombre completo</label>
                  <input type="text" placeholder='Donald Knuth' className='userUpdateInput'/>
                </div>
                <div className="userUpdateItem">
                  <label>Correo</label>
                  <input type="text" placeholder='donknuth38@gmail.com' className='userUpdateInput'/>
                </div>
                <div className="userUpdateItem">
                  <label>Teléfono</label>
                  <input type="text" placeholder='+ 1 10011938' className='userUpdateInput'/>
                </div>
                <div className="userUpdateItem">
                  <label>Dirección</label>
                  <input type="text" placeholder='Milwaukee, Wisconsin | USA' className='userUpdateInput'/>
                </div>
              
              </div>
              <div className="userUpdateRight">
                <div className="userUpdateUpload">
                  <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqLc-CxVzj76DaS90rcMQqK05OlbUGs2SZZICF9RYS-WkMO4oTw0aR4ow8hx4SyEBFxI&usqp=CAU" alt="" className="userUpdateImg" />
                  <label htmlFor="file"><Publish className='userUpdateIcon'/></label>
                  <input type="file" id="file" style={{ display: "none" }} />
                </div>
                <button className="userUpdateButton">Actualizar</button>
              </div>
            </form>
        </div>
      </div>
    </div>
  )
}
