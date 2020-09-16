import React from 'react'
import s from './afterslider.module.css';

function Afterslider() {
  return (
    <div className={s.container}>
      <div className={s.container_wrapper}>
        <div className={s.intro}>
          Можно предположить, что изменение глобальной стратегии поддерживает
          экспериментальный метод изучения рынка. Традиционный канал стабилизирует
          product placement, осознавая социальную ответственность бизнеса. По
          сути, комплексный анализ ситуации довольно неоднозначен.
      </div>

        <blockquote className={s.cite}>
          <p className={s.quote}>
            У группы «Метро» огромный опыт в строительстве, помимо жилья мы
            занимались инфраструктурными, промышленными, социальными объектами.
            Компания выступала генеральным подрядчиком строительства
            «ЭкспоФорума», Депо «Южное», также мы строили «Музей железных дорог
            России». Наша Компания обладает всеми необходимыми ресурсами.
        </p>
          <strong className={s.author}>Геннадий Волковский</strong>
          <p className={s.company}>Генеральный директор компании “Метро”</p>
        </blockquote>


        <div className={s.intro}>
          В 2018 году компания удостоилась главной архитектурной премии Европы —
          European Prize for Architecture. Знатоки архитектуры считают нашу
          компанию мастером выверенных фасадов.
      </div>
      </div>
    </div>
  )
}

export default Afterslider
