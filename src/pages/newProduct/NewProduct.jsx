import React from 'react'
import "./newProduct.css"



export default function NewProduct() {
  return (
    <div className='newProduct'>
      <h1 className="addProductTitle">Nuevo Producto</h1>
      <form className="addProductForm">
        <div className="addProductItem">
          <label>Imagen</label>


          <div className="addProductFormRight">
              <label className='addProductLabel' for="file">
                Seleccionar archivo
              </label>
              <input type="file" id='file' style={{display: "none"}}/>
          </div>


          
        </div>
        <div className="addProductItem">
          <label>Nombre Completo</label>
          <input type="text" placeholder='Charles Petzold'/>
        </div>
        <div className="newUserItem">
          <label>Nombre</label>
          <input type="text" placeholder='Apple Watch'/>
        </div>
        <div className="addProductItem">
          <label>Stock</label>
          <input type="text" placeholder='142'/>
        </div>
        <div className="addProductItem">
          <label>Activo</label>
          <select name='active' id='active'>
            <option value="yes">Si</option>
            <option value="no">No</option>
          </select>
        </div>
        <button className="productButton">Crear</button>
      </form>
    </div>
  )
}


