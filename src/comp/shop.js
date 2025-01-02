import React, { useState } from 'react'
import './shop.css'
import { AiFillHeart, AiFillEye ,AiOutlineClose  } from "react-icons/ai";


const Shop = ({shop , Filter , allcatefilter , addtocart}) => {
    //toggle project details
    const [showDetail, setShowDetail] = useState(false)
    //detail page data
    const [detail , setDetail] = useState([])
    //showing details box
    const detailpage = (product) =>
    {
        const detaildata =  ([{product}])
        const productdetail = detaildata[0]['product']
        //console.log(productdetail)
        setDetail(productdetail)
        setShowDetail(true)
    }
   
    const closedetail = () =>
    {
        setShowDetail(false) 
    }
    return (
    <>
    {
      showDetail ?
      <>
      <div className='product_details'>
            <button className='close_btn' onClick={closedetail} ><AiOutlineClose /></button>
            <div className='container'>
                <div className='img_box'>
                    <img src={detail.image} alt=''></img>
                </div>
                <div className='info'>
                    <h4>{detail.cat}</h4>
                    <h2>{detail.Name}</h2>
                    <p>The Xiaomi Redmi 12 (Polar Silver) is a sleek and stylish smartphone featuring a 6.79-inch FHD+ display with a 90Hz refresh rate for smooth visuals. Powered by a MediaTek Helio G88 processor, it comes with up to 8GB RAM and 256GB storage, expandable via microSD. The phone boasts a 50MP triple-camera setup, an 8MP front camera, and a 5000mAh battery with 18W fast charging. Its premium glass back, slim profile, and vibrant Polar Silver finish make it both functional and elegant.</p>
                    <h3>Rs.{detail.price}</h3>
                    <button onClick={() => addtocart(detail)}  >Add To Cart</button>
                </div>
            </div>
      </div>  
      </>
      :null  
    }
    
    <div className='shop'>
        <h2>shop</h2>
        <p>Home.shop</p>
        <div className='container'>
            <div className='left_box'>
                <div className='category'>
                    <div className='header'>
                        <h3>All Categories</h3>
                    </div>
                    <div className='box'>
                        <ul>
                            <li onClick={() => allcatefilter ()}>All</li>
                            <li onClick={() => Filter("Mobile") }>Mobile</li>
                            <li onClick={() => Filter("Accessories") }>Accessories</li>
                            <li onClick={() => Filter("Electronics") }>Electronics</li>
                            <li onClick={() => Filter("Watch") }>Watch</li>
                            <li onClick={() => Filter("Speaker") }>Speaker</li>
                        </ul>
                    </div>
                </div>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='images/shopbnr.png' alt=''></img>
                    </div>
                </div>
            </div>
            <div className='right_box'>
                <div className='banner'>
                    <div className='img_box'>
                        <img src='images/shop.png' alt=''></img>
                    </div>
                </div>
                <div className='product_box'>
                    <h2>Shop Product</h2>
                    <div className='product_container'>
                        {
                            shop.map((curElm) =>
                            {
                                return(
                                    <>
                                    <div className='box'>
                                        <div className='img_box'>
                                            <img src={curElm.image} alt=''></img>
                                            <div className='icon'>
                                                <li><AiFillHeart /></li>
                                                <li onClick={()=> detailpage (curElm) }><AiFillEye /></li>
                                            </div>
                                        </div>
                                        <div className='detail'>
                                            <h3>{curElm.Name}</h3>
                                            <p>Rs.{curElm.price}</p>
                                            <button onClick={() => addtocart(curElm)}>Add To Cart</button>
                                        </div>
                                    </div>
                                    </>
                                )
                            })
                        }                       
                    </div>
                </div>
            </div>
          
        </div>
    </div>
    </>
  )
}

export default Shop