import React from 'react'
import "./widgetSm.css"

export default function WidgetSm() {
  return (
    <div className='widgetSm'>
      <span className="widgetSmTitle">Nuevo miembro</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTGqLc-CxVzj76DaS90rcMQqK05OlbUGs2SZZICF9RYS-WkMO4oTw0aR4ow8hx4SyEBFxI&usqp=CAU" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Donald Knuth</span>
            <span className="widgetSmUserTitle">Experto en computación</span>
          </div>
          <button className="widgetSmButton">
            <img className="widgetSmIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/OOjs_UI_icon_eye.svg/1200px-OOjs_UI_icon_eye.svg.png" alt="" />
            Mostrar
          </button>
        </li>

        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://avatars.githubusercontent.com/u/6651785?v=4" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Charles Petzold</span>
            <span className="widgetSmUserTitle">Desarrollador de software</span>
          </div>
          <button className="widgetSmButton">
            <img className="widgetSmIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/OOjs_UI_icon_eye.svg/1200px-OOjs_UI_icon_eye.svg.png" alt="" />
            Mostrar
          </button>
        </li>

        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://s03.s3c.es/imag/_v0/4464x2976/1/1/8/Steve_Wozniak_37619872476.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Steve Wozniak</span>
            <span className="widgetSmUserTitle">Ingeniero en computación</span>
          </div>
          <button className="widgetSmButton">
            <img className="widgetSmIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/OOjs_UI_icon_eye.svg/1200px-OOjs_UI_icon_eye.svg.png" alt="" />
            Mostrar
          </button>
        </li>

        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://www.kaizengroup.es/wp-content/uploads/bfi_thumb/stevejobsbig-35j7nynk8topdvfvsv3im8.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Steve Jobs</span>
            <span className="widgetSmUserTitle">Experto en computación</span>
          </div>
          <button className="widgetSmButton">
            <img className="widgetSmIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/OOjs_UI_icon_eye.svg/1200px-OOjs_UI_icon_eye.svg.png" alt="" />
            Mostrar
          </button>
        </li>

        <li className="widgetSmListItem">
          <img className="widgetSmImg" src="https://www.chu.cam.ac.uk/wp-content/uploads/2021/12/Bjarne-Stroustrup.jpg" alt="" />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Bjarne Stroustrup</span>
            <span className="widgetSmUserTitle">Científico de la computación</span>
          </div>
          <button className="widgetSmButton">
            <img className="widgetSmIcon" src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cf/OOjs_UI_icon_eye.svg/1200px-OOjs_UI_icon_eye.svg.png" alt="" />
            Mostrar
          </button>
        </li>
      </ul>
    </div>
  )
}
