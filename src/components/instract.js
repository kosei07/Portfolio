import '../App.css'
import { useState} from 'react'


export default function Instract() {

    const [color ,setColor] = useState({backgroundColor:"cadetblue"})

    const [op1, setOp1] = useState(true)
    const [op2, setOp2] = useState(false)
    const [op3, setOp3] = useState(false)

    const resize = {
        big:{height:"40%"},
        small:{height:"30%"}
    }

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

        setOp1(true)
        setOp2(false)
        setOp3(false)
    }


    const option2 = () => {
        setText(
            <ul>
                <p>現在はより効率よくデザイン性に富んだアプリケーションを作るためにSaasやBootstrapについて学んでいます。</p>
            </ul>
        )
        setColor({backgroundColor:"slateblue"})

        setOp1(false)
        setOp2(true)
        setOp3(false)

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

        setOp1(false)
        setOp2(false)
        setOp3(true)
    }

    return (
        <div className="instract">
            <div className="options">
                <div className="option option1"  onMouseOver={option1} style={op1 ? resize.big: resize.small}><h3>使用できるスキル</h3></div>
                <div className="option option2"  onMouseOver={option2} style={op2 ? resize.big: resize.small}><h3>学んでいること</h3></div>
                <div className="option option3"  onMouseOver={option3} style={op3 ? resize.big: resize.small}><h3>やってみたいこと</h3></div>
            </div>
            <div className="instract_text" style={color}>
                <div>
                {text}
                </div>
            </div>
        </div>
    )
}