import React, { useState } from 'react';
import './App.css';
import Header from './components/header/Header'
import Slider from './components/slider/Slider'
import AfterSlider from './components/afterslider/Afterslider'
import Gallery from './components/gallery/Gallery'
import Article from './components/Article/Article'
import Footer from './components/footer/Footer'
import gsap from 'gsap'


import s from './App.module.css'
import Logo from './assets/imgs/logo_m.svg'
import Menu from './assets/imgs/menu.svg'
import Phone from './assets/imgs/phone.svg'

function App() {
  const [posts, setPosts] = useState([
    {
      id: 1,
      url: "https://i.ibb.co/ZmXyL0H/img-03.png",
      title: 'Киберпреступники тратят на атаки до $50 000',
      text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
      published: '10.07.2019'
    },
    {
      id: 2,
      url: "https://i.ibb.co/4jgTkKQ/img-01.png",
      title: '«Хотите, чтобы дети сотрудничали и решали проблемы? Тогда игра необходима»',
      text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
      published: '25.06.2020'
    },
    {
      id: 3,
      url: "https://i.ibb.co/xm1s3bm/img-04.png",
      title: 'Глобального среднего класса больше не становится',
      text: 'Замедление Китая и общая неопределенность заморозили активы населения',
      published: '31.05.2019'
    },
    {
      id: 4,
      url: "https://i.ibb.co/g352M5M/img-05.png",
      title: 'Скорость доступа к запрещенным сайтам ограничит суд',
      text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии допуск «Газпрома» к мощностям Opal',
      published: '10.07.2019'
    },
    {
      id: 5,
      url: "https://i.ibb.co/NxvHDbn/img-07.png",
      title: 'Самая читающая страна в мире',
      text: 'Президент Lego Education рассказал “Ъ” о том, почему важно учить детей рисковать',
      published: '25.06.2019 '
    },
    {
      id: 6,
      url: "https://i.ibb.co/z6s6sqb/img-08.png",
      title: 'Нуждаюсь в некоторой степени',
      text: 'Замедление Китая и общая неопределенность заморозили активы населения',
      published: '31.05.2019'
    },
    {
      id: 7,
      url: "https://i.ibb.co/5WKW5Q1/img-09.png",
      title: 'Следственный комитет ищет экс-главу Северстали',
      text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
      published: '10.07.2019'
    },
    {
      id: 8,
      url: "https://i.ibb.co/ZmXyL0H/img-03.png",
      title: 'Следственный комитет ищет экс-главу Северстали',
      text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
      published: '10.07.2019'
    },
    {
      id: 9,
      url: "https://i.ibb.co/4jgTkKQ/img-01.png",
      title: 'Следственный комитет ищет экс-главу Северстали',
      text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
      published: '10.07.2019'
    },
    {
      id: 10,
      url: "https://i.ibb.co/xm1s3bm/img-04.png",
      title: 'Следственный комитет ищет экс-главу Северстали',
      text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
      published: '10.07.2019'
    },
    {
      id: 11,
      url: "https://i.ibb.co/g352M5M/img-05.png",
      title: 'Следственный комитет ищет экс-главу Северстали',
      text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
      published: '10.07.2019'
    },
    {
      id: 12,
      url: "https://i.ibb.co/NxvHDbn/img-07.png",
      title: 'Следственный комитет ищет экс-главу Северстали',
      text: 'Польша в суде ЕС добилась отмены разрешения Еврокомиссии на допуск «Газпрома» к мощностям Opal',
      published: '10.07.2019'
    }
  ]);

  const [display, setDisplay] = useState(9)
  const [filterYear, setFilterYear] = useState('2020');
  const [filterMonth, setFilterMonth] = useState('');
  const [hideNav, setHideNav] = useState(false)


  let filterByYear = posts.filter(post => {
    return post.published.includes(filterYear);
  })

  let filteredByMonth = filterByYear.filter(post => {
    return post.published.split('').slice(2).join('').includes(filterMonth);
  });

  let postsLayout
  if(posts) {
    postsLayout = <div className={s.posts}>
      {filteredByMonth.slice(0, display).map(post => (
        <Article 
          key={post.id}
          post={post} />
      ))}
    </div>
  }

  window.onscroll = function (e) {
    let hide = (this.oldScroll > this.scrollY);
    this.oldScroll = this.scrollY;

    if (hide === true){
      gsap.to('#menu', { duration: .4, y: 0 })
        
    } else if ( hide === false) {
      gsap.to('#menu', { duration: .4, y: -100})
    }
  }


  return (
    <div className="App">
      <div className={s.menu} id="menu">
        <div className={s.menu_wrapper}>
        <div className={s.menu_item_menu}>
          <img src={Menu} alt=""/>
        </div>
        <img src={Logo} alt=""/>
        <div className={s.menu_right}>
          <div className={s.menu_item + ' ' + s.menu_en}>
            En
          </div>
          <div className={s.menu_item}>
            <img src={Phone} alt=""/>
          </div>
        </div>
        </div>
      </div>
      <Header/>
      <Slider/>
      <AfterSlider/>
      <Gallery/>
      <div className={s.container}>
        
        <div className={s.news_select}>
          <h2 id="news">Новости</h2>
          <select name="" id="" className={s.select} onChange={event => setFilterYear(event.target.value)}>
            <option value="2020" defaultValue>2020 год</option>
            <option value="2019">2019 год</option>
            <option value="2018">2018 год</option>
            <option value="2017">2017 год</option>
          </select>
          <select name="" id="" className={s.select} onChange={event => setFilterMonth(event.target.value)}>
            <option value="0" defaultValue>Все месяцы</option>
            <option value='01'>Январь</option>
            <option value='02'>Февраль</option>
            <option value='03'>Март</option>
            <option value='04'>Апрель</option>
            <option value='05'>Май</option>
            <option value='06'>Июнь</option>
            <option value='07'>Июль</option>
            <option value='08'>Август</option>
            <option value='09'>Сентябрь</option>
            <option value='10'>Октябрь</option>
            <option value='11'>Ноябрь</option>
            <option value='12'>Декабрь</option>
          </select>
        </div>
        <div className={s.posts_container}>
          <div className={s.posts_wrapper}>
            {postsLayout}
          </div>
          <button className={s.button} onClick={() => setDisplay(display + 9)}>загрузить еще</button>
        </div>
      </div>
      <Footer/>
    </div>
  );
}

export default App;
