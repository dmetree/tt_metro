import React, {useEffect} from 'react';
import s from './header.module.css';
import Arrow from './../../assets/imgs/arrow.svg';
import ScrollToPlugin from './../../assets/js/ScrollToPlugin'
import gsap from 'gsap'

function Header() {

  useEffect(() => {
    gsap.registerPlugin(ScrollToPlugin);
  }, [])
  
  let newsClickhandler = () => {
    gsap.to(window, { duration: 1, scrollTo: "#news" });
  }

  let aboutClickhandler = () => {
    gsap.to(window, { duration: 1, scrollTo: "#theimg" });
  }

  return (
    <div>
      <div className={s.aboutUs}>
        <div className={s.aboutus_wrapper}>
          <h1 className={s.heading + " " + s.container}>О нас</h1>
          <div className={s.nav + " " + s.container}>
            <div className={s.navBlock + ' ' + s.navBlockOne} onClick={aboutClickhandler}>
              <div className={s.tag1}>Основная информация</div>
              <img src={Arrow} alt="Arrow" />
            </div>
            <div className={s.navBlock} onClick={newsClickhandler}>
              <div className={s.tag2}>Новости</div>
              <img src={Arrow} alt="Arrow" />
            </div>
          </div>

          <p className={s.intro + " " + s.container}>
            Селекция бренда, анализируя результаты рекламной кампании, осмысленно
            масштабирует SWOT-анализ. Перераспределение бюджета, как следует из
            вышесказанного, переворачивает коллективный контент. Поэтому управление
            брендом искажает социометрический ребрендинг:
          </p>

          <ul className={s.list + " " + s.container}>
            <li className={s.item}>Управление брендом как искажение социометрического поиска</li>
            <li className={s.item}>
              Селекция бренда, анализируя результаты рекламной кампании бюджета как
              его основа
              <ul className={s.sublist}>
                <li className={s.item}>Поэтому управление брендом искажает социометрический ребрендинг</li>
                <li className={s.item}>Поэтому управление брендом искажает социометрический ребрендинг</li>
              </ul>
            </li>
            <li className={s.item}>Селекция бренда, анализируя результаты рекламной кампании</li>
            <li className={s.item}>
              Диверсификация бизнеса, на первый взгляд, изменяет рекламный макет,
              работая над проектом.
            </li>
          </ul>
          <p className={s.intro + " " + s.container}>
            Можно предположить, что изменение глобальной стратегии поддерживает
            экспериментальный метод изучения рынка. Традиционный канал стабилизирует
            product placement, осознавая социальную ответственность бизнеса. По
            сути, комплексный анализ ситуации довольно неоднозначен.
        </p>
        </div>
      </div>
    </div>
  )
}

export default Header
