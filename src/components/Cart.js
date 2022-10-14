import React from 'react';
import { useCart } from 'react-use-cart';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';
const Cart = ({setShow}) => {
  const {isEmpty,
        items,
        totalItems,
        cartTotal,
        updateItemQuantity,
        removeItem,
        emptyCart
     } = useCart()
    if(isEmpty) return  ( 
                        <>
                            <div className='overlay'  onClick={()=>setShow(true)}></div>
                            <div className='box-cart'>
                                <h1>Giỏ hàng</h1>
                                <img src='./images/giohangtrong.jpg'/>
                                <p>Không có sản phẩm nào trong giỏ hàng</p>
                            </div>
                        </>)
    return (
        <>
        <div className='overlay'  onClick={()=>setShow(true)}></div>
            <div className='box-cart'>
                    <h2>Giỏ hàng</h2>
                        <div className='footercart'>
                            <div>Sản phẩm</div>
                            <div>Giá</div>
                            <div>Số lượng</div>
                            <div>Xóa</div>
                        </div>
                <div className='listcart'>
                    {items.map((item)=>{
                    return ( <div className='itemcart'>
                                    <div className='imgcart'>
                                        {item.title}
                                        <img src={item.image}/>
                                    </div>
                                    <div className='pricecart'>
                                        {item.price}$
                                    </div>
                                    <div className='quantitycart'>
                                        <button onClick={()=>updateItemQuantity(item.id,item.quantity -1)}>-</button>
                                            {item.quantity}
                                        <button onClick={()=>updateItemQuantity(item.id,item.quantity +1)}>+</button>
                                    </div>
                                    <div className='btncart'>
                                        <button onClick={()=>removeItem(item.id)}><FontAwesomeIcon icon={faTrash}/></button>
                                    </div>
                             </div>
                        )
                    }
                    )}
            </div>
             <div>
                <h5>Tổng số mặt hàng: {totalItems}</h5>
             </div>
             <div className='btnclear'>
                <button onClick={emptyCart}>Xóa hết</button>
             </div>
             <div className='carttotal'>
                <h5>Tổng tiền: {cartTotal}$</h5>
             </div>
             <div className='order'>
                <button>Đặt hàng</button>
             </div>
        </div>
        </>
    );
};

export default Cart;