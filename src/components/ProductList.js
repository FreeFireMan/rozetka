import React, {Component} from 'react';
import {useEffect, useState} from "react";
import ProductItem from "./ProductItem";
import "./ProductListCss.css"
import {useDispatch} from "react-redux";

export default function ProductList(){
    const [products,setProducts]=useState();
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(json=>setProducts(json));
    },[setProducts])

    return (

        <div className={'allProducts'}>
            {
                products && products.map((value)=><ProductItem item={value} key={value.id}/>)
            }

        </div>
    );
}


