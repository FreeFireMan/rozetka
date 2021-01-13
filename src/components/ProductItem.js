import React, {Component} from 'react';
import './ProductItemCss.css'
import {useDispatch} from "react-redux";
export default function ProductItem (props){
    let {item}=props;
    let IMG=item.image;
    const dispatch=useDispatch();
    return (
        <div className={'product-item'}>
            <div className="heart">❤</div>
            <div className="picture">
                <img src={`${IMG}`} alt=""/>
            </div>
            <div className="title">
                {item.title}
            </div>
            <div className="wrap">
                <div className="price">
                    {item.price}
                </div>
                <div className="add" onClick={()=>dispatch({type:'SAY'})}>+</div>
            </div>


        </div>
    );
}

