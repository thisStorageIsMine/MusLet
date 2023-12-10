
const swiper = new Swiper('.last-updates-list', {

  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  mousewheel: {                       
    thresholdDelta: 70,             
  },  
  autoplay: {
    delay: 2000,
    pauseOnMouseEnter: true,
  },
  breakpoints: {

    300: {
      slidesPerView: 1,
    },

    600: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 5,
    }
  }

});

const carousel = new Swiper('.carousel', {

  direction: 'horizontal',
  slidesPerView: 4,
  loop: true,
  mousewheel: {                       
    thresholdDelta: 50,            
  },  
  autoplay: {
    delay: 10002575,
    pauseOnMouseEnter: true,
  },
  breakpoints: {
    
    300: {
      slidesPerView: 2,
    },
    
    900: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
    1600: {
      slidesPerView: 5,
    }
  }

});



