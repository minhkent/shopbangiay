import React, {useState,useEffect}from 'react'
import axios from 'axios'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch,faCartShopping,faBars} from '@fortawesome/free-solid-svg-icons'
// import { data } from './dataProduct';
import Search from './Search';
import { useCart } from 'react-use-cart';
const Header = ({setShow,setShowMenu,setShowSearch}) => {
    const [search,setSearch] = useState('')
    const [posts,setPost] = useState([])
    useEffect(()=>{
      axios.get('https://633bdef4f11701a65f69bdf0.mockapi.io/api/products')
      .then(res =>{
        console.log(res);
        setPost(res.data)
      })
      .catch(err =>{
        console.log(err);
      })
    })
    const {
      totalItems
      } = useCart()
      console.log(setShowSearch);
  return (
    <div className="grid">
              <div className="row no-gutters header">
                    <div className="logo l-2 m-6 c-6">
                         <a href="#" className="link-logo" >
                              <img className="img-logo"  src="/images/logo-header.png"></img>
                         </a>
                    </div>
                    <div className="nav l-7 m-0 c-0">
                        <ul>
                        <a>
                          <li>Giới thiệu</li>
                        </a>
                        <a>
                          <li>Nike</li>
                        </a>
                        <a>
                          <li>Adidas</li>
                        </a>
                        <a>
                          <li>Jordan</li>
                        </a>
                        <a>
                          <li>Yeezy</li>
                        </a>
                        <a>
                          <li>Other Brands</li>
                        </a>
                        <a>
                          <li>Sale</li>
                        </a>
                        <a>
                          <li>Dây giầy</li>
                        </a>
                        <a>
                          <li>Spa giầy</li>
                        </a>
                        <a>
                          <li>Liên hệ</li>
                        </a>
                        </ul>
                    </div>

                    <div className="search l-2 m-3 c-3">
                          <div className="search-box">
                            <input type="text" placeholder="Nhập tìm kiếm" onChange={(e)=>setSearch(e.target.value)}>
                            </input>
                            <a href="#" className = "icon-search" onClick={()=>setShowSearch(false)}>
                             <FontAwesomeIcon icon={faSearch}/>
                            </a>
                          </div>
                    </div>
                    <div className="cart l-1 m-3 c-3">
                          <div className="cart-box" onClick={()=>setShow(false)} >
                          <FontAwesomeIcon icon={faCartShopping}/>
                          <span>{totalItems}</span>
                          </div>
                          <div className='btn-menuhide' onClick={()=>setShowMenu(false)}>
                              <FontAwesomeIcon icon={faBars} />
                          </div>
                    </div>
                  </div>
                  <div className='header-search' >
                      {posts.filter((item)=>{
                         return search.toLowerCase()===''
                         ? '' : item.title.toLowerCase().includes(search)
                         }).map((item)=>(
                         <Search
                            key ={item.id}
                            img = {item.image}
                            title = {item.title}
                            price = {item.price}
                            item = {item}
                          />
                        ))}
                  </div> 
    </div> 
  )
}
export default Header