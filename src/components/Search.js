import React from 'react';
const Search = (props) => {
    return (
        <div className='box-search'>
            <div className="img-search">
                <img src={props.img}></img>
            </div>
                <div className="title-search">
            <span>{props.title}</span>
            </div>
            <div className="price-search">
                <span>{props.price}$</span>
            </div>
        </div>
    );
};

export default Search;