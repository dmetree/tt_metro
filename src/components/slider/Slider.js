import React, { useState, useEffect } from 'react'
import Img from './../../assets/imgs/main_img.png'
import arrow from './../../assets/imgs/arrow_horizontal.svg'
import s from './Slider.module.css'
import gsap from 'gsap'


function Slider() {
    const [count, setCount] = useState(1);
    const [sign, setSign] = useState(
        'Подпись к блоку может быть опциональной. Можно вводить различные сноски и ссылки для блоков с фотографиями и видео' 
    )

    let clickLeftHandler = () => {
        setCount(count - 1)
        setSign('Подпись к блоку может быть опциональной. Можно вводить различные сноски и ссылки для блоков с фотографиями и видео ')
        let tl = gsap.timeline()
        tl.to("#theimg", { duration: .3, x: 0 })
    }

    var w = window.innerWidth;
    var move = 820;
    if (w < 995){
        move = w*0.9;
    }
    // if (w < )

    let clickRightHandler = () => {
        setCount(count + 1);
        setSign('Подпись к блоку может быть опциональной.')
        let tl = gsap.timeline()
        tl.to("#theimg", { duration: .3, x: -move })
    }
    
    useEffect(() => {
        if (count < 1) {
            setCount(1)
        }
        if (count > 15) {
            setCount(15)
        }
    })

    return (
        <div>
            <div className={s.slider_wrapper}>
                <div className={s.images}>
                    <img alt="news-img" id="theimg" src={Img} className={s.image}></img>
                </div>
                <div className={s.slider_controls}>
                    <div className={s.img_counter}>{count} / 15</div>
                    <div className={s.img_sign}>{sign}</div>
                    <div className={s.img_arrows}>
                        <div className={s.arrow_wrapper + ' ' + s.arrow_left} onClick={clickLeftHandler}>
                            <img className={s.arrow_left_img} alt="arrow-left" src={arrow}></img>
                        </div>
                        <div className={s.arrow_wrapper} onClick={clickRightHandler}>
                            <img className={s.arrow_right_img} alt="arrow-right" src={arrow}></img>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Slider
