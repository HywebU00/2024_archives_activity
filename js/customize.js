// -----  基本功能開關   ---------------------------------------------------
window.addEventListener('load', () => {
  //topNav(); // 手機版顯示nav選單
  //navSticky(); // 捲動時固定主選單
  //xSlider('.language button', '.language ul'); //語系
  //fontSize(); // 全站字體
  //fatFooter(); // fatFooter是否要展開
  scrollTables('.tableWrapper'); // table捲動功能

  //webSearch();

  // tab功能
  tabFunction({
    target: '.tabSet',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    openSwitch: true, // 是否可開合/切換
    autoClose: true, // 自動關閉其他開啟內容
    modeSwitch: true, // 預設模式自動切換，尺寸以上tab功能，尺寸以下手風琴功能
    width: 767, // 尺寸以上tab功能，尺寸以下手風琴功能
    index: 0, // 預設開啟第幾個
  });

  tableAddDataAttributes({
    elemClass: '.tableList', // 目標table
    dataName: 'title', // tableList樣式 加上 data-title
  });

  // 手風琴功能
  accordionFunction({
    target: '.accordion',
    openFirst: false, // 預設先展開所有內容，鍵盤的自動開合功能無效
    autoClose: true, // 點擊時自動關閉已展開的項目，若需要此功能需要關閉openFirst
    openSwitch: true, // 是否可開合
    index: 0, // 預設開啟第幾個
    info: {
      open: '展開', // 收合時顯示
      close: '收合', // 展開時顯示
    },
  });
});
// -----  基本功能開關   ---------------------------------------------------

// 自行加入的JS請寫在這裡
(function () {
  //cp輪播
  const cpSwiper = new Swiper('.cpSlider .swiper', {
    slidesPerView: 4,
    spaceBetween: 20,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpSlider .nextSlider', //自行設定樣式
      prevEl: '.cpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 4,
      },
    },
  });

  //大圖輪播
  let mpSliderItem = document.querySelectorAll('.mpSlider .swiper-slide');
  let mpSliderPagination = [];
  mpSliderItem.forEach((item, index) => {
    mpSliderPagination.push(item.dataset.title);
  });
  const mpSlider = new Swiper('.mpSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    // 切換點
    pagination: {
      el: '.mpSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
      renderBullet: function (index, className) {
        return `<button class="${className} noFonts" aria-label="${mpSliderPagination[index]}">${mpSliderPagination[index]}</button>`;
      },
    },
    // 切換箭頭
    navigation: {
      nextEl: '.mpSlider .nextSlider', //自行設定樣式
      prevEl: '.mpSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });

  //串聯活動輪播
  const eventsSlider = new Swiper('.eventsSlider .swiper', {
    slidesPerView: 3,
    slidesPerGroup: 3,
    centeredSlides: false,
    grid: {
      //rows: 2,
      //fill: 'row',
    },
    spaceBetween: 30,
    //loop: true,
    // 切換點
    pagination: {
      el: '.eventsSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.eventsSlider .nextSlider', //自行設定樣式
      prevEl: '.eventsSlider .prevSlider', //自行設定樣式
      disabledClass: '.eventsSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 1,
      },
      568: {
        slidesPerView: 2,
      },
      1000: {
        slidesPerView: 3,
      },
    },
  });

  //廣告輪播
  const adSwiper = new Swiper('.adSlider .swiper', {
    slidesPerView: 5,
    spaceBetween: 30,
    loop: false,
    // 切換點
    pagination: {
      el: '.adSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.adSlider .nextSlider', //自行設定樣式
      prevEl: '.adSlider .prevSlider', //自行設定樣式
      disabledClass: '.adSlider swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  //跑馬燈
  const marqueeSwiper = new Swiper('.marquee .swiper', {
    direction: 'vertical',
    // 切換點
    // 切換箭頭
    navigation: {
      nextEl: '.marquee .nextSlider', //自行設定樣式
      prevEl: '.marquee .prevSlider', //自行設定樣式
      disabledClass: '.marquee marquee-arrow-disabled', //不可點選樣式
    },
  });

  //cp_photo
  const navSlider = new Swiper('.navSlider .swiper', {
    lazy: true, // lazy load
    preloadImages: false, // 多筆設定lazy時須設定
    centeredSlides: false, // 多筆設定lazy時須設定
    slidesPerView: 4,
    // watchSlidesProgress: true,
    navigation: {
      nextEl: '.navSlider .nextSlider', //下一張class，無障礙設定關係需要增加.nextSlider
      prevEl: '.navSlider .prevSlider', //前一張class，無障礙設定關係需要增加.prevSlider
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
    breakpoints: {
      100: {
        slidesPerView: 2,
      },
      767: {
        slidesPerView: 3,
      },
      1000: {
        slidesPerView: 4,
      },
    },
  });

  const sliderFor = new Swiper('.sliderFor .swiper', {
    slidesPerView: 1, //顯示張數
    effect: 'fade', //淡入
    fadeEffect: {
      crossFade: true, //上一張淡出，false上一張不淡出，下一張疊在上方
    },
    pagination: {
      el: '.sliderFor .pagination',
      type: 'fraction', //顯示分頁
    },
    lazy: true,
    thumbs: {
      swiper: navSlider, //設定指向到哪個swiper，使用另一個設定的參數
    },
  });

  window.addEventListener('scroll', function () {
    var contentBoxes = document.querySelectorAll('.contentBox');
    contentBoxes.forEach(function (box) {
      var boxPosition = box.getBoundingClientRect();
      if (boxPosition.top < window.innerHeight) {
        box.classList.add('effect');
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var archivesMonth = document.querySelector('.archivesMonth');
    if (archivesMonth) {
      var wrapper = document.querySelector('.wrapper');
      wrapper.classList.add('typeB');
    }
  });

  AOS.init();

  //theme 圖片區塊
  //const path1 = 'M77.2,40.8c55.7-26.7,119.7-5.2,132.5-0.5c44,16,43.2,36,87.3,47.4c40.9,10.6,50.8-4.3,100.5,4.9c23.2,4.2,69.9,12.9,90.7,44.2c24.2,36.3,0.7,83.6-3,91.3c-79.5,159.7-375.4,192.2-396.6,61.8C79.9,235.9-2,217.7,3.1,163C4.6,148.4,11.6,72.3,77.2,40.8z';

  //const path2 = 'M82.4,15.7C139.3-11.6,202.2,16,214.8,22c43.2,20.3,41.5,42.9,85,58.1c40.4,14.1,50.9-2.2,100.2,10.7c23,6,69.2,18.2,88.6,54.6c22.5,42.2-3.1,94.5-7.2,102.9c-86.9,176.1-383.8,197.6-399,49.1c-6.3-61.3-87.2-86.2-79.6-147.6C4.8,133.4,15.4,47.9,82.4,15.7z';

  //const path3 = 'M35,128.6c28.6-51.5,78.8-62.1,91.6-64.4c43.9-7.8,58.7,5.6,100.1-6.3c38.4-11,37.5-27,80.4-45.8c21.5-9.4,65.4-19.6,107.8-3.7c63.4,23.7,66.7,70.7,71.7,107.5c24.5,182-113.1,348.6-267.3,259.3c-49.9-28.9-150.3-20-184.1-72.3C4.2,255.1,1.2,189.3,35,128.6z';

  // const path4 = 'M21.3,200C-5.9,154.2,3.8,94.1,43.7,65.3c71.9-42.2,92.8-2.2,145.3-24.7C275.4-6,332-5.5,408.1,15.3c72.9,23.4,85.8,113.8,85.3,156.9c9.7,172.3-82.4,296.4-276.6,186c-51.9-27.7-108.8-18.5-139.8-53.5C42.9,266.7,40.8,254.8,21.3,200z';

  const path1 = 'M0,0.442 C-0.003,0.554,0.054,0.688,0.481,0.96 C0.664,1,1,0.893,1,0.642 S0.774,0.018,0.59,0 S0.247,0.026,0.172,0.115 S0.003,0.346,0,0.442';

  const path2 = 'M0,0.515 C0,0.688,0.083,0.922,0.264,0.985 C0.433,1,1,0.87,1,0.615 S0.957,0.019,0.769,0 S0.296,0.029,0.172,0.124 S0,0.342,0,0.515';

  const path3 = 'M0,0.682 C0.022,0.852,0.179,0.993,0.365,0.999 C0.54,1,0.998,0.701,0.998,0.446 S0.814,0.025,0.626,0.006 S0.348,0,0.226,0.095 S-0.022,0.516,0,0.682';

  const path4 = 'M0.022,0.696 C0.044,0.867,0.294,0.991,0.482,0.997 C0.659,1,1,0.708,1,0.451 S0.724,0.019,0.534,0 S0.252,0.05,0.129,0.145 S0,0.529,0.022,0.696';
  function circle(name, t1, time1, t2, time2, t3, time3, t4, time4) {
    const imgBlock = document.querySelector('.imgBlock');
    if (!imgBlock) {
      return;
    }
    let el = gsap.timeline();

    el.to(name, {
      attr: { d: t1 },
      duration: time1,
      ease: 'sine.out',
    })
      .to(name, {
        attr: { d: t2 },
        duration: time2,
        ease: 'sine.out',
      })
      .to(name, {
        attr: { d: t3 },
        duration: time3,
        ease: 'sine.out',
      })
      .to(name, {
        attr: { d: t4 },
        duration: time4,
        ease: 'sine.out',
      })
      .repeat(-1);
  }

  //circle('#round01', path2, 3, path3, 3, path4, 3, path1, 3);
  //circle('#round02', path3, 3, path1, 3, path2, 3, path4, 3);
})();
