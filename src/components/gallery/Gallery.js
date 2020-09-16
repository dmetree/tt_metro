import React, { useState } from 'react';
import './gallery.css';
import './../../App.css';
import Plus from './../../assets/imgs/+_img.svg';
import gsap from 'gsap'

function Gallery() {
  const [open, setOpen] = useState(false);

  var w = window.innerWidth;
  let openSlide_1;
  let openSlide_2;
  let openSlide_3;
  let openSlide_4;

  if (w > 768) {
    openSlide_1 = () => {
      if (!open) {

        gsap.to('.slide', { duration: .4, width: '5%', paddingTop: '300px' })
        gsap.to('#slide_1', { duration: .4, width: '85%', })
        gsap.to('#text_1', { delay: .4, duration: .4, display: 'block' })
        gsap.to('.subheading', { duration: .4, rotation: -90 })
        gsap.to('#subheading_1', { duration: .4, rotation: 0 })
        gsap.to('.heading', { autoAlpha: 0 })
        gsap.to('#heading_1', { autoAlpha: 1 })

        setOpen(true)
      } else if (open) {
        gsap.to('#text_1', { duration: .2, display: 'none' })
        gsap.to('.slide', { duration: .4, width: '25%', paddingTop: '510px' })
        gsap.to('.subheading', { duration: .4, rotation: 0 })
        gsap.to('.heading', { autoAlpha: 1 })

        setOpen(false)
      }
    }

    openSlide_2 = () => {
      if (!open) {

        gsap.to('.slide', { duration: .4, width: '5%' })
        gsap.to('#slide_2', { duration: .4, width: '85%', paddingTop: '300px' })
        gsap.to('#text_2', { delay: .4, duration: .4, display: 'block' })
        setOpen(true)
      } else if (open) {
        gsap.to('#text_2', { duration: .2, display: 'none' })
        gsap.to('.slide', { duration: .4, width: '25%' })
        gsap.to('#slide_2', { duration: .4, width: '25%', paddingTop: '510px' })
        setOpen(false)
      }
    }

    openSlide_3 = () => {
      if (!open) {
        gsap.to('.slide', { duration: .4, width: '5%' })
        gsap.to('#slide_3', { duration: .4, width: '85%', paddingTop: '300px' })
        gsap.to('#text_3', { delay: .4, duration: .4, display: 'block' })
        setOpen(true)
      } else if (open) {
        gsap.to('#text_3', { duration: .2, display: 'none' })
        gsap.to('.slide', { duration: .4, width: '25%' })
        gsap.to('#slide_3', { duration: .4, width: '25%', paddingTop: '510px' })
        setOpen(false)
      }
    }

    openSlide_4 = () => {
      if (!open) {
        gsap.to('.slide', { duration: .4, width: '5%' })
        gsap.to('#slide_4', { duration: .4, width: '85%', paddingTop: '300px' })
        gsap.to('#text_4', { delay: .4, duration: .4, display: 'block' })
        setOpen(true)
      } else if (open) {
        gsap.to('#text_4', { duration: .2, display: 'none' })
        gsap.to('.slide', { duration: .4, width: '25%' })
        gsap.to('#slide_4', { duration: .4, width: '25%', paddingTop: '510px' })
        setOpen(false)
      }
    }
  }
  if(w < 768){
    openSlide_1 = () => {
      if (!open) {
        gsap.to('.slide', { duration: .4, height: '5%'})
        gsap.to('#slide_1', { duration: .4, height: '85%' })
        setOpen(true)
      } else if (open) {
        gsap.to('#text_1', { duration: .2, display: 'none' })
        gsap.to('.slide', { duration: .4, height: '25%' })
        setOpen(false)
      }
    }

    openSlide_2 = () => {
      if (!open) {
        gsap.to('.slide', { duration: .4, height: '5%' })
        gsap.to('#slide_2', { duration: .4, height: '85%' })
        setOpen(true)
      } else if (open) {
        gsap.to('#text_2', { duration: .2, display: 'none' })
        gsap.to('.slide', { duration: .4, height: '25%' })
        setOpen(false)
      }
    }

    openSlide_3 = () => {
      if (!open) {
        gsap.to('.slide', { duration: .4, height: '5%' })
        gsap.to('#slide_3', { duration: .4, height: '85%' })
        setOpen(true)
      } else if (open) {
        gsap.to('#text_3', { duration: .2, display: 'none' })
        gsap.to('.slide', { duration: .4, height: '25%' })
        setOpen(false)
      }
    }

    openSlide_4 = () => {
      if (!open) {
        gsap.to('.slide', { duration: .4, height: '5%' })
        gsap.to('#slide_4', { duration: .4, height: '85%' })
        setOpen(true)
      } else if (open) {
        gsap.to('#text_4', { duration: .2, display: 'none' })
        gsap.to('.slide', { duration: .4, height: '25%' })
        setOpen(false)
      }
    }
  }




  return (
    <div className='slider_wrapper'>
      <ul className='text_slider container'>

        <li id="slide_1" className='slide slide_active' onClick={openSlide_1}>
          <h3 id='heading_1' className='heading'>Уникальные виды</h3>
          <strong id='subheading_1' className='subheading'>Прекрасный вид</strong>
          <p id='text_1' className='text'>
            Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация»
            доставляют 67 самых современных лифтов.
          </p>
          <div className='toggle_button'>
            <img src={Plus} alt="" className='icon_plus' width="19" height="19" />
          </div>
        </li>

        <li id="slide_2" className="slide slide_active" onClick={openSlide_2}>
          <h3 className='heading'>панорамные окна</h3>
          <strong className='subheading'>Прекрасный вид</strong>
          <p id='text_2' className='text'>
            Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация»
            доставляют 67 самых современных лифтов.
          </p>
          <div className='toggle_button'>
            <img src={Plus} alt="" className='icon_plus' width="19" height="19" />
          </div>
        </li>

        <li id="slide_3" className="slide slide_active" onClick={openSlide_3}>
          <h3 className='heading'>уникальные виды</h3>
          <strong className='subheading'>Прекрасный вид</strong>
          <p id='text_3' className='text'>
            Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация»
            доставляют 67 самых современных лифтов.
          </p>
          <div className='toggle_button'>
            <img src={Plus} alt="" className='icon_plus' width="19" height="19" />
          </div>
        </li>

        <li id="slide_4" className="slide slide_active" onClick={openSlide_4}>
          <h3 className='heading'>уникальные виды</h3>
          <strong className='subheading'>Прекрасный вид</strong>
          <p id='text_4' className='text'>
            Высота восточного крыла достигает рекордных 374 метров. На высоту жителей и гостей комплекса «Федерация»
            доставляют 67 самых современных лифтов.
          </p>
          <div className='toggle_button'>
            <img src={Plus} alt="" className='icon_plus' width="19" height="19" />
          </div>
        </li>

      </ul>
    </div >
  )
}

export default Gallery
