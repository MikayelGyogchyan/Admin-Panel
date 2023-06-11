import React from 'react'
import "./widgetLg.css"

export default function WidgetLg() {

  const Button = ({type}) => {
    return <button className={'widgetLgButton ' + type}>{type}</button>
  }
  return (
    <div className='widgetLg'>
      <h3 className="widgetLgTitle">Últimas transacciones</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Fecha</th>
          <th className="widgetLgTh">Cantidad</th>
          <th className="widgetLgTh">Estado</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://imagenes.elpais.com/resizer/2Y75Q07Uq58ApsXo3RBR8FGXC7E=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IMSOZ2YTKPLOFDQUUKR4K6TQQQ.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Tim Berners-Lee</span>
          </td>
          <td className="widgetLgDate">11 Junio 2022</td>
          <td className="widgetLgAmount">$119.00</td>
          <td className="widgetLgStatus"> <Button type="Aprobado"/></td>
        </tr>

        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Fecha</th>
          <th className="widgetLgTh">Cantidad</th>
          <th className="widgetLgTh">Estado</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://imagenes.elpais.com/resizer/2Y75Q07Uq58ApsXo3RBR8FGXC7E=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IMSOZ2YTKPLOFDQUUKR4K6TQQQ.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Tim Berners-Lee</span>
          </td>
          <td className="widgetLgDate">11 Junio 2022</td>
          <td className="widgetLgAmount">$119.00</td>
          <td className="widgetLgStatus"> <Button type="Rechazado"/></td>
        </tr>

        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Fecha</th>
          <th className="widgetLgTh">Cantidad</th>
          <th className="widgetLgTh">Estado</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://imagenes.elpais.com/resizer/2Y75Q07Uq58ApsXo3RBR8FGXC7E=/414x0/cloudfront-eu-central-1.images.arcpublishing.com/prisa/IMSOZ2YTKPLOFDQUUKR4K6TQQQ.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Tim Berners-Lee</span>
          </td>
          <td className="widgetLgDate">11 Junio 2022</td>
          <td className="widgetLgAmount">$119.00</td>
          <td className="widgetLgStatus"> <Button type="Pendiente"/></td>
        </tr>

        <tr className="widgetLgTr">
          <th className="widgetLgTh">Cliente</th>
          <th className="widgetLgTh">Fecha</th>
          <th className="widgetLgTh">Cantidad</th>
          <th className="widgetLgTh">Estado</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img src="https://cdn.britannica.com/10/193910-050-7B085C8B/Tony-Robbins.jpg" alt="" className="widgetLgImg" />
            <span className="widgetLgName">Tonny Robbins</span>
          </td>
          <td className="widgetLgDate">19 Enero 2022</td>
          <td className="widgetLgAmount">$191.00</td>
          <td className="widgetLgStatus"> <Button type="Aprobado"/></td>
        </tr>
      </table>
    </div>
  )
}
