import './App.css';
import Morse from './components/morse'
import Cal from './components/cal'
import Shift from './components/shift'
import React from 'react';
import Instract from './components/instract';

export default function Main() {

  return (
    <div className="main-page">
      <div className="main">
        <h1>井上皓聖's Portfolio </h1>
        <div className="contents">


          <div className="content contentL">
            <h2>self-introduction</h2>
            <div>
              <p>私の名前は井上皓聖です。現在は二年生で熊本大学工学部情報電気工学科に所属しており、コンピュータの設計や電気・電子回路などを勉強しています。
                プログラミングを始めたきっかけは大学の授業でHTMLとCSSを学ぶ機会があり、その際にコードを打つだけでば自分の意図したようなデザインをPC上で表現できる
                ということに楽しさを感じたからです。</p>
            </div>
          </div>

          <div className="content contentR">
            <Instract />
          </div>

        </div>

        <h2 className="product_h2">過去の制作記録</h2>
        <div className="products">
          <Cal />
          <Morse />
          <Shift />
        </div>
      </div>
    </div>
  );
}

