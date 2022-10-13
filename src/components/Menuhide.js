import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';
const Menuhide = ({setShowMenu}) => {
    return (
        <div className='menuhide'>
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
            <div className='btn-hide-menu' onClick={()=>setShowMenu(true)}>
                <FontAwesomeIcon icon={faXmark} ></FontAwesomeIcon>
            </div>
        </div>
    );
};

export default Menuhide;