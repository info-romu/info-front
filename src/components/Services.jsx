import React from 'react'
import { useState } from 'react'
import imagesData from '../data-images/images.json'
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination, EffectCoverflow, Autoplay } from 'swiper/modules'
import 'swiper/css'
import 'swiper/css/bundle'
import PopUp from './PopUp'
import { Link } from 'react-router-dom'




export default function Caroussel() {
  const imgData = imagesData.slider;
  const [popUpOpen, setPopUpOpen] = useState(false);
  const [selectedData, setSelectedData] = useState({ title: '', description: '' });

  const openPopUp = ((title, description) => {
    setSelectedData({ title, description });
    setPopUpOpen(true);
  })

  const closePopUp = () => {
    setPopUpOpen(false);
  }

  return (
    <div className='caroussel'>
      <div className='content-caroussel'>
        <h2 className='title-service text-5xl font-bold'>Nos services.</h2>
        <div className='txt-intro-caroussel'>
          <p>Inforomu vous accompagne dans tous vos projets. Vous trouverez ici tous les domaines dans lesquels nous intervenons.</p>
        </div>
        <div className='span-container'>
          <div className='span-description-container'>
            <span className='span-description'>1</span>
            <p className='txt-span-description'>Rendez-vous technique afin de trouver la meilleure réponse possible à votre demande.</p>
          </div>
          <div className='span-description-container'>
            <span className='span-description'>2</span>
            <p className='txt-span-description'>Étude du dossier et envoi du devis, planification du chantier si le devis est accepté.</p>
          </div>
          <div className='span-description-container'>
            <span className='span-description'>3</span>
            <p className='txt-span-description'>Installation & mise en service des produits grâce à notre équipe de techniciens.</p>
          </div>
          <div className='span-description-container'>
            <span className='span-description'>4</span>
            <p className='txt-span-description'>Nous ne vous abandonnons pas après la pose ! Nous restons à votre entière disposition, si vous avez des questions ou besoin d'une intervention !</p>
          </div>
        </div>

      </div>

      <Swiper
        className='swiper'
        modules={[Pagination, EffectCoverflow, Autoplay]}
        effect={'coverflow'}
        grabCursor={true}
        centeredSlides={true}
        style={{
          "--swiper-pagination-color": "#008a05",
          "--swiper-pagination-bullet-inactive-color": "#aaaaaa",
          "--swiper-pagination-bullet-inactive-opacity": "1",
          "--swiper-pagination-bullet-size": "0.6rem",
          "--swiper-pagination-bullet-horizontal-gap": "0.3rem"
        }}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2
        }}
        loop={true}
        pagination={{ clickable: true }}
        spaceBetween={40}
        slidesPerView={1}
        autoplay={{
          delay: 3200,
          disableOnInteraction: false
        }}
        breakpoints={{
          1024: {
            slidesPerView: 2
          }
        }}

      >
        {
          imgData.map((data, i) => (
            <SwiperSlide key={i} style={{ backgroundImage: `url(${data.url})` }} className="swiper-slider">
              <div>
                <h2>{data.title}</h2>
                <button onClick={() => openPopUp(data.title, data.description)} className='btn-show-service'>
                  <span className='span-btn'>Parcourir</span>
                </button>
              </div>
            </SwiperSlide>
          ))
        }
      </Swiper>
      <div>
        <Link to="/contact" className='btn-contact-service'>
          <span className='span-btn'>Nous contacter</span>
        </Link>
      </div>
      <PopUp isOpen={popUpOpen} onClose={closePopUp} title={selectedData.title} description={selectedData.description} />
    </div>
  )
}
