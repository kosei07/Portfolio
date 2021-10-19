import React from 'react';
import { useState } from 'react';
import '../App.css';
import Calculation_img from '../image/calculation.png'

export default function Cal() {
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
            <a href="https://kosei07.github.io/calculation/">
                <h3>自作電卓</h3>
                <img src={Calculation_img} alt="LOGO" />
                <div className="overlay" style={mouseover ? style.visible : style.hidden}>
                    <p>javascriptを用いてソースコードなどを見ずに自分でアルゴリズムを組み立て設計しました</p>
                </div>
            </a>
        </div>
    )

}
