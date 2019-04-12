const defaultOptions = {
  initialSlide: 0,
  slidesToScroll: 1,
  slidesToShow: 1,

  navigation: true,
  navigationKeys: true,
  navigationSwipe: true,

  pagination: true,

  loop: false,
  infinite: false,

  effect: 'translate',
  duration: 300,
  timing: 'ease',

  autoplay: false,
  autoplaySpeed: 3000,
  pauseOnHover: true,
  breakpoints: [{
      changePoint: 480,
      slidesToShow: 1,
      slidesToScroll: 1
    },
    {
      changePoint: 640,
      slidesToShow: 2,
      slidesToScroll: 2
    },
    {
      changePoint: 768,
      slidesToShow: 3,
      slidesToScroll: 3
    }
  ],

  onReady: null,
  icons: {
    'previous': `<svg viewBox="0 0 50 80" xml:space="preserve">
      <polyline fill="currentColor" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="45.63,75.8 0.375,38.087 45.63,0.375 "/>
    </svg>`,
    'next': `<svg viewBox="0 0 50 80" xml:space="preserve">
      <polyline fill="currentColor" stroke-width=".5em" stroke-linecap="round" stroke-linejoin="round" points="0.375,0.375 45.63,38.087 0.375,75.8 "/>
    </svg>`
  }
};

export default defaultOptions;