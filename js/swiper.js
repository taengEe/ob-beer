let bullet = ['01', '02', '03'];

const swiper = new Swiper('#main-silder', {
    // Optional parameters
    effect : 'fade',
    speed: 1000,
    direction: 'horizontal',
    loop: true,
    loopAdditionalSlides : 1,
    autoplay: {
        delay: 2000,
        disableOnInteraction : false,
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
        renderBullet: function (index, className) {
          return '<div class="' + className + '"><span>' + (bullet[index]) + '</span></div>';
        },
    }
  });
  const brandSwiper = new Swiper('#brand-slider', {
    // Optional parameters
    effect : 'fade',
    direction: 'horizontal',
    loop: true,
  
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
    // And if we need scrollbar
    scrollbar: {
      el: '.swiper-scrollbar',
    },
  });
  const newsSwiper = new Swiper('#news-slider', {
    // Optional parameters
    slidesPerView: 4,
    direction: 'horizontal',
    loop: false,
    loopAdditionalSlides : 1,
  
    // Navigation arrows
    navigation: {
      nextEl: '#news-next-btn',
      prevEl: '#news-prev-btn',
    },
  });
  