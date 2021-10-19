import '../App.css'
import { useState} from 'react'


export default function Instract() {

    const [color ,setColor] = useState({backgroundColor:"cadetblue"})



    const [text, setText] = useState(
        <ul className="ul_s">
            <li>HTML・CSS</li>
            <li>javascript</li>
            <li>React.js</li>
            <li>Next.js</li>
            <li>firebase</li>
            <li>Github</li>
        </ul>
    )

    const option1 = () => {
        setText(
            <ul className="ul_s">
                <li>HTML・CSS</li>
                <li>javascript</li>
                <li>React.js</li>
                <li>Next.js</li>
                <li>firebase</li>
                <li>Github</li>
            </ul>
        )
        setColor({backgroundColor:"cadetblue"})
    }


    const option2 = () => {
        setText(
            <ul>
                <p>現在はより効率よくデザイン性に富んだアプリケーションを作るためにSaasやBootstrapについて学んでいます。</p>
            </ul>
        )
        setColor({backgroundColor:"slateblue"})

    }


    const option3 = () => {
        setText(
            <ul>
                <p>これからWebエンジニアになるためにPHPなどのバックエンド側の知識やiosとAndroidの
                    両方でも開発可能という点で興味を持ったReactNativeについても触れてみたい。
                </p>
            </ul>
        )
        setColor({backgroundColor:"steelblue"})

    }

    return (
        <div className="instract">
            <div className="options">
                <div className="option option1"  onMouseOver={option1}><h3>使用できるスキル</h3></div>
                <div className="option option2"  onMouseOver={option2}><h3>現在学んでいること</h3></div>
                <div className="option option3"  onMouseOver={option3}><h3>やってみたいこと</h3></div>
            </div>
            <div className="instract_text" style={color}>
                <div>
                {text}
                </div>
            </div>
        </div>
    )
}