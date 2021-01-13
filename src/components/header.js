import React from 'react';
import './header.css'
import {useSelector} from "react-redux";

export default function Header(){
    const arrOfFavorites=useSelector((state)=>state.favorites);
    console.log('----------------------arrOfFavorites----------------------');
    console.log(arrOfFavorites);
    console.log('----------------------arrOfFavorites----------------------');

    return (
        <div className={'header'}>
            <div className="menu">
                <div className="logo">
                    <img src="https://xl-static.rozetka.com.ua/assets/img/design/logo_n.svg" alt=""/>
                </div>
                <div className="options">
                    <div className="favorite">❤</div>
                    <div className="basket">+</div>
                </div>
            </div>
        </div>
    );
}
