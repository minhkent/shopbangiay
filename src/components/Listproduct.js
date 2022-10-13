import React ,{useEffect,useState}from 'react';
import { data } from './dataProduct';
import Itemproduct from './itemproduct';
import axios from 'axios'
const Listproduct = () => {
    const [posts, setPosts] = useState([])
    useEffect(()=>{
        axios.get('https://633bdef4f11701a65f69bdf0.mockapi.io/api/products')
        .then(res =>{
            console.log(res);
            setPosts(res.data)
        })
        .catch(err =>{
            console.log(err);
        })
    })
    return (    
            <div className="grid">
                  <div className="row no-gutters list-product">
                      {posts.map((item)=>(
                          <Itemproduct
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

export default Listproduct;
      