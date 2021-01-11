import React from 'react';
import Swiper from 'react-id-swiper';
import 'swiper/swiper-bundle.css'

function CoverflowEffect(){
  const params = {
    effect: 'coverflow',
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: 'auto',
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true
    },
    pagination: {
      el: '.swiper-pagination'
    }
  }
  return (
    <div>
      SWIPER
      <Swiper {...params}>
        <div style={{ backgroundImage:'../assets/Lake_mapourika_NZ.jpeg' }} />
        <div style={{ backgroundImage:'../assets/unsplash-drmakete lab.jpg' }} />
        <div style={{ backgroundImage:'../assets/unsplash-Noah Cellura.jpg' }} />
        <div style={{ backgroundImage:'../assets/unsplash-Simon Lemhöfer.jpg' }} />
        <div style={{ backgroundImage:'../assets/unsplash-Zoltan Tasi.jpg' }} />
      </Swiper>
    </div>
    
  )
}

// const CoverflowEffect = () => {
//   const params = {
//     effect: 'coverflow',
//     grabCursor: true,
//     centeredSlides: true,
//     slidesPerView: 'auto',
//     coverflowEffect: {
//       rotate: 50,
//       stretch: 0,
//       depth: 100,
//       modifier: 1,
//       slideShadows: true
//     },
//     pagination: {
//       el: '.swiper-pagination'
//     }
//   }
//   return (
//     <Swiper {...params}>
//       <div style={{ backgroundImage:'../assets/Lake_mapourika_NZ.jpeg' }} />
//       <div style={{ backgroundImage:'../assets/unsplash-drmakete lab.jpg' }} />
//       <div style={{ backgroundImage:'../assets/unsplash-Noah Cellura.jpg' }} />
//       <div style={{ backgroundImage:'../assets/unsplash-Simon Lemhöfer.jpg' }} />
//       <div style={{ backgroundImage:'../assets/unsplash-Zoltan Tasi.jpg' }} />
//     </Swiper>
//     )
//   };

  export default CoverflowEffect;