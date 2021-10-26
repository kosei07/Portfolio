import Morse_img from '../image/morese.png'
import '../App.css';
import { useState } from 'react';
import React from 'react';

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
      <a href="https://morse-9f00a.firebaseapp.com">
        <h3>モールス信号</h3>
        <img src={Morse_img} alt="LOGO" />
        <div className="overlay" style={mouseover ? style.visible : style.hidden}>
          <p>javascriptを用いてボタンを押したタイミングとその長さでモールス信号を再現しました。
            カタカナを入力するそれがモールス信号で何と表記されるのか検索できる機能もつけました。
          </p>
        </div>
      </a>
    </div>
  )
}