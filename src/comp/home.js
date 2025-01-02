import React, { useEffect, useState } from 'react'
import './home.css'
import { Link } from 'react-router'
import Homeproduct from './home_product'
import { AiFillEye } from "react-icons/ai";
import { AiFillHeart ,AiOutlineShoppingCart } from "react-icons/ai";
import { BiLogoFacebook ,BiLogoTwitter ,BiLogoInstagramAlt , BiLogoWhatsappSquare} from "react-icons/bi";


const Home = ({addtocart}) => {
  //product category
  const [newProduct , setNewProduct] = useState ([])
  const [featuredProduct , setFeaturedProduct] = useState ([])
  const [topProduct , setTopProduct] = useState ([])
  //Trending products
  const [trendingProduct, setTrendingProduct] = useState(Homeproduct)
  //filter of trending products
  const filtercate = (x) => 
  {
    const filterproduct = Homeproduct.filter ((curElm) =>
    {
      return curElm.type === x
    })
    setTrendingProduct(filterproduct)
  }
  //all trending products
  const allTrendingProduct = () =>
  {
    setTrendingProduct (Homeproduct)
  }
  //product type
  useEffect(() =>
  {
    productcategory()
  })
  const productcategory = () =>
  {
    //New Product
    const newcategory = Homeproduct.filter ((x) => 
    {
      return x.type === 'new' 
    })
    setNewProduct(newcategory ) 
    //Featured Product
    const featuredcategory = Homeproduct.filter ((x) =>
    {
      return x.type === 'featured'
    })
    setFeaturedProduct(featuredcategory)
    //Top products
    const topcategory = Homeproduct.filter ((x) =>
    {
      return x.type === 'top'
    })
    setTopProduct(topcategory)
  }
  return (
    <>
    <div className='home'>
        <div className='top_banner'>
            <div className='content'>
                <h3> Mega Bonus For</h3>
                <h2>CHRISTMAS</h2>
                <h4>20% - 30% bonus at your first purchase</h4>
                <Link to='/shop' className='link'>Shop Now</Link>
            </div>
        </div>
        <div className='trending'>
          <div className='container'>
            <div className='left_box'>
              <div className='header'>
                <div className='heading'>
                  <h2 onClick={() => allTrendingProduct ()}>trending product</h2>
                </div>
                <div className='cate'>
                  <h3 onClick={() => filtercate('new')}>New</h3>
                  <h3 onClick={() => filtercate('featured')}>Featured</h3>
                  <h3 onClick={() => filtercate('top')}>top selling</h3>
                </div>
              </div>
              <div className='products'>
                <div className='container'>
                  {
                     trendingProduct.map((curElm) =>
                    {
                      return(
                        <>
                        <div className='box'>
                          <div className='img_box'>
                            <img src={curElm.image} alt=''></img>
                            <div className='icon'>
                              <div className='icon_box'>
                              <AiFillEye />
                              </div>
                              <div className='icon_box'>
                              <AiFillHeart />
                              </div>
                            </div>
                          </div>
                          <div className='info'>
                            <h3>{curElm.Name}</h3>
                            <p>Rs.{curElm.price}</p>
                            <button className='btn' onClick={() => addtocart(curElm) } >Add To Cart</button>
                          </div>
                        </div>
                        </>
                      )
                    })
                  }
                </div>
                <button>Show More</button>
              </div>
            </div>
            <div className='right_box'>
              <div className='right_container'>
                <div className='testimonial'>
                  <div className='head'>
                    <h3>Our Testimonial</h3>
                  </div>
                  <div className='details'>
                    <div className='img_box'>
                      <img src='images/tes.png' alt='testimonial'></img>
                    </div>
                    <div className='info'>
                      <h3>Eloise Carter</h3>
                      <h4>Web Designer</h4>
                      <p>"MobiCare offers the best range of smartphones with unbeatable 
                        customer service. Reliable, affordable, and always up-to-date 
                        with the latest tech – highly recommended!" </p>
                    </div>
                  </div>
                </div>
                <div className='newsletter'>
                  <div className='head'>
                    <h3>newsletter</h3>
                  </div>
                  <div className='form'>
                    <p>join our mailing service</p>
                    <input type='email' placeholder='E-Mail' autoComplete='off'></input>
                    <button>Subscribe</button>
                    <div className='icon_box'>
                      <div className='icon'>
                        <BiLogoFacebook />  
                      </div>
                      <div className='icon'>
                        <BiLogoTwitter />
                      </div>
                      <div className='icon'>
                       <BiLogoInstagramAlt />
                      </div>
                      <div className='icon'>
                       <BiLogoWhatsappSquare />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='banners'>
          <div className='container'>
            <div className='left_box'>
              <div className='box'>
                <img src='images/b1.png'  alt='banner'></img>
              </div>
              <div className='box'>
                <img src='images/b2.png'  alt='banner'></img>
              </div>
            </div>
            <div className='right_box'>
              <div className='top'>
                <img src='images/b3.png' alt=''></img>
                <img src='images/b4.png' alt=""></img>
              </div>
              <div className='bottom'>
                <img src='images/b5.png' alt=''></img>
              </div>
            </div>
          </div>
        </div>
        <div className='product_type'>
          <div className='container'>
            <div className='box'>
              <div className='header'>
                <h2>New Product</h2>
              </div>
              {
                newProduct.map((curElm) =>
                {
                  return(
                    < >
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>Rs.{curElm.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart(curElm) } ><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
              
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Featured Product</h2>
              </div>
              {
               featuredProduct.map((curElm) =>
                {
                  return(
                    < >
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>Rs.{curElm.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button onClick={() => addtocart(curElm) } ><AiOutlineShoppingCart /></button>
                        </div>
                      </div>
                    </div>
                    </>
                  )
                })
              }
              
            </div>
            <div className='box'>
              <div className='header'>
                <h2>Top Product</h2>
              </div>
              {
                topProduct.map((curElm) =>
                {
                  return(
                    < >
                    <div className='productbox'>
                      <div className='img-box'>
                        <img src={curElm.image} alt=''></img>
                      </div>
                      <div className='detail'>
                        <h3>{curElm.Name}</h3>
                        <p>Rs.{curElm.price}</p>
                        <div className='icon'>
                          <button><AiFillEye /></button>
                          <button><AiFillHeart /></button>
                          <button  onClick={() => addtocart(curElm) }><AiOutlineShoppingCart /></button>
                        </div>
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
    
    </>
  )
}

export default Home