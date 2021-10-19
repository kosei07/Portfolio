import '../App.css';
import { useState } from 'react';
import Img1 from '../image/img1.jpg'
import Img2 from '../image/img2.jpg'
import Img3 from '../image/img3.jpg'
import Img4 from '../image/img4.jpg'
import Img7 from '../image/img7.jpg'
import Img8 from '../image/img8.jpg'
import Img9 from '../image/img9.jpg'
import Img10 from '../image/img10.jpg'
import Img11 from '../image/img11.jpg'

export default function Begin() {

    const [click , setClick]=useState(false)

    const onClick =()=>{
        setClick(true)
    }


    const wrapstyle = {
        visible: { display:'auto'},
        hidden: {display:'none'}
    }

    const style = {
        visible: { opacity: 1 },
        hidden: { opacity: 0 }
    }

    const [load, setLoad] = useState(false)



    setTimeout(() => {
        setLoad(true)
    }, 1000)

    return (
        <div className="begin" onClick={onClick} style={click ? wrapstyle.hidden :wrapstyle.visible}>
            <div className="image_content">
                <img src={Img1} alt="LOGO" className="img1" style={load ? style.visible : style.hidden} />
                <img src={Img2} alt="LOGO" className="img2" style={load ? style.visible : style.hidden} />
                <img src={Img3} alt="LOGO" className="img3" style={load ? style.visible : style.hidden} />
                <img src={Img4} alt="LOGO" className="img4" style={load ? style.visible : style.hidden} />
                <img src={Img7} alt="LOGO" className="img7" style={load ? style.visible : style.hidden} />
                <img src={Img8} alt="LOGO" className="img8" style={load ? style.visible : style.hidden} />
                <img src={Img9} alt="LOGO" className="img9" style={load ? style.visible : style.hidden} />
                <img src={Img10} alt="LOGO" className="img10" style={load ? style.visible : style.hidden} />
                <img src={Img11} alt="LOGO" className="img11" style={load ? style.visible : style.hidden} />
                <div className="begin_text">
                    <h1 className="begin_text1">井上皓聖's Portfolio</h1>
                </div>
                <h2 className="begin_text2" >Click to Start</h2>
            </div>
        </div>
    )
}