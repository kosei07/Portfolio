import Shift_img from '../image/shift.png'
import '../App.css';
import { useState } from 'react';
import React from 'react';

export default function Shift() {
    const [mouseover, setMouse] = useState(false)
    const style = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    const onMouseOver = () => {
        setMouse(true)
    }
    const onMouseOut = () => {
        setMouse(false)
    }


    return (
        <div className="product" onMouseOver={onMouseOver} onMouseOut={onMouseOut}>
            <a href="https://shift-app-ff864.firebaseapp.com">
                <h3>シフト管理</h3>
                <img src={Shift_img} alt="LOGO" />
                <div className="overlay" style={mouseover ? style.visible : style.hidden}>
                    <p>React.js、firebaseを用いてスタッフが入力したシフトの情報をデータベースに保存し、それを管理者がまとめて閲覧できるようにしました。</p>
                </div>
            </a>
        </div>
    )
}