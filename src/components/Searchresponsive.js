import React ,{useState}from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import { data } from './dataProduct';
const Searchresponsive = ({setShowSearch}) => {
    const [search,setSearch]  =useState('')
    return (
        <div className='searchresponsive'>
            <div className='overlay'onClick={()=>setShowSearch(true)} ></div>
            <div className="search-box-responsive">
                <input type="text" placeholder="Nhập tìm kiếm" onChange={(e)=>setSearch(e.target.value)}>
                </input>
                <a className = "icon-close" onClick={()=>setShowSearch(true)}>
                    <FontAwesomeIcon icon={faXmark}/>
                </a>
            </div>
            <div className='header-search' >
                      {data.productData.filter((item)=>{
                         return search.toLowerCase()===''
                         ? '' : item.title.toLowerCase().includes(search)
                         }).map((item)=>(
                         <Search
                            key ={item.id}
                            img = {item.img}
                            title = {item.title}
                            price = {item.price}
                            item = {item}
                          />
                        ))}
            </div> 

        </div>
    );
};

export default Searchresponsive;