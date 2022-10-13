import { useCart } from 'react-use-cart'
import React from 'react'
 const Itemproduct =(props)=>{
      const {addItem} = useCart()
      console.log(addItem);
            return (
                  <>
                        <div className="item-product col l-2-4 m-4 c-6">
                              <div className="content-product">
                                    <div className="sticker">
                                          New
                                    </div>
                                    <div className="img-product">
                                          <img src={props.img}/>
                                    </div>
                                    <div className="title-product">
                                          <span>{props.title}</span>
                                    </div>
                                    <div className="price-product">
                                          <span>{props.price}$</span>
                                    </div>
                                    <div>
                                          <button className="btn-buy" onClick = {()=>addItem(props.item)}>
                                                Thêm vào giỏ hàng
                                          </button>
                                    </div>
                              </div>
                        </div>
                  </>
            )
      }
export default Itemproduct;