import React from 'react'
import "./featuredInfo.css"

export default function FeaturedInfo() {
  return (
    <div className='featured'>
      <div className="featuredItem">
        <span className="featuredTitle">Ingresos</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$911</span>
          <span className="featuredMoneyRate"> -6.66 <img className='featuredIcon negative' src="https://png.monster/wp-content/uploads/2022/01/png.monster-189.png" alt="" /></span>
        </div> 
        <span className="featuredSub">En comparación con el mes pasado</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Ventas</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$1,170</span>
          <span className="featuredMoneyRate"> -3.33 <img className='featuredIcon negative' src="https://png.monster/wp-content/uploads/2022/01/png.monster-189.png" alt="" /></span>
        </div> 
        <span className="featuredSub">En comparación con el mes pasado</span>
      </div>

      <div className="featuredItem">
        <span className="featuredTitle">Coste</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,3</span>
          <span className="featuredMoneyRate"> +4.44 <img className='featuredIcon' src="https://icones.pro/wp-content/uploads/2021/02/icone-de-fleche-vers-le-haut-vert.png" alt="" /></span>
        </div> 
        <span className="featuredSub">En comparación con el mes pasado</span>
      </div>
    </div>
  )
}
