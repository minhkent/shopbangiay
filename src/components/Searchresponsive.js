import React ,{useState,useEffect}from 'react';
import axios from 'axios';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
import Search from './Search';
import { data } from './dataProduct';
const Searchresponsive = ({setShowSearch}) => {
    const [search,setSearch]  =useState('')
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
    );
};

export default Searchresponsive;