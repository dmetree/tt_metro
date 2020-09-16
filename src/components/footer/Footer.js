import React from 'react'
import s from './footer.module.css';

function Footer() {
    return (
        <div className={s.container}>
            <div className={s.footer_wrapper}>
                <div className={s.footer_years}>2005—2019 © «Метро»</div>
                <div className={s.footer_agency}>
                    <span>Сделано в </span>
                    <a href="" className={s.link}>CreativePeople</a>
                </div>
            </div>
        </div>
    )
}

export default Footer
