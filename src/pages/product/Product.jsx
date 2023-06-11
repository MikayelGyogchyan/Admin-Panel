import React from 'react'
import "./product.css"
import { Link } from 'react-router-dom'
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"
import { Publish } from '@mui/icons-material'

export default function Product() {
  return (
    <div className='product'>
      <div className="productTitleContainer">
        <h1 className="productTitle">Producto</h1>
        <Link to ="/newproduct">
        <button className="productAddButton">Crear</button>
        </Link>
      </div>
      <div className="productTop">
        <div className="productTopLeft">
          <Chart data ={productData} dataKey="Sales" title="Rendimiento de las ventas" />
        </div>
        <div className="productTopRight">
          <div className="productInfoTop">
            <img src="https://http2.mlstatic.com/D_NQ_NP_899330-MLA49126361957_022022-V.jpg" alt="" className="productInfoImg" />
            <span className="productName">Apple Watch</span>
          </div>
          <div className="productInfoBottom">
            <div className="productInfoItem">
              <span className="productInfoKey">id: </span>
              <span className="productInfoValue">711</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">ventas: </span>
              <span className="productInfoValue">1417</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">activo: </span>
              <span className="productInfoValue">si</span>
            </div>
            <div className="productInfoItem">
              <span className="productInfoKey">en stock: </span>
              <span className="productInfoValue">no</span>
            </div>
          </div>
        </div>
      </div>
      <div className="productBottom">
        <form className="productForm">
          <div className="productFormLeft">
            <label>Nombre de Producto</label>
            <input type="text" placeholder='Apple Watch'/>
            <label>En Stock</label>
            <select name="inStock" id="inStock">
              <option value="yes">Si</option>
              <option value="no">No</option>
            </select>
            <label>Activo</label>
            <select name="active" id="active">
              <option value="yes">Si</option>
              <option value="no">No</option>
            </select>
          </div>

          <div className="productFormRight">
            <div className="productUpload">
              <img className='productUploadImg' src="https://http2.mlstatic.com/D_NQ_NP_899330-MLA49126361957_022022-V.jpg" alt="" />
              <label for="file">
                <Publish/>
              </label>
              <input type="file" id='file' style={{display: "none"}}/>
            </div>
            <button className="productButton">Update</button>
          </div>
        </form>
      </div>
    </div>
  )
}
