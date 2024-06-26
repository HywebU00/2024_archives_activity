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
    slidesPerView: 2,
    spaceBetween: 30,
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
        slidesPerView: 1,
      },
      767: {
        slidesPerView: 2,
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

  // window.addEventListener('scroll', function () {
  //   var contentBoxes = document.querySelectorAll('.contentBox');
  //   contentBoxes.forEach(function (box) {
  //     var boxPosition = box.getBoundingClientRect();
  //     if (boxPosition.top < window.innerHeight) {
  //       box.classList.add('effect');
  //     }
  //   });
  // });

  document.addEventListener('DOMContentLoaded', function () {
    var archivesMonth = document.querySelector('.archivesMonth');
    if (archivesMonth) {
      var wrapper = document.querySelector('.wrapper');
      wrapper.classList.add('typeB');
    }
  });

  var toggleButtons = document.querySelectorAll('.toggleDetailBtn');

  toggleButtons.forEach(function (button) {
    button.addEventListener('click', function () {
      var detailContent = this.nextElementSibling;
      var toggleState = this.querySelector('.toggleState');

      if (detailContent.classList.contains('active')) {
        detailContent.classList.remove('active');
        toggleState.textContent = '展開';
      } else {
        detailContent.classList.add('active');
        toggleState.textContent = '收合';
      }
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    const cityRadio = document.querySelector('.cityRadio');
    const areaRadio = document.querySelector('.areaRadio');
    const mapCity = document.querySelector('.mapCity');
    const mapArea = document.querySelector('.mapArea');

    // Check if elements exist
    if (cityRadio && areaRadio && mapCity && mapArea) {
      // Elements exist
      console.log('All elements found.');

      // Add event listeners
      cityRadio.addEventListener('click', function () {
        mapCity.style.display = 'block';
        mapArea.style.display = 'none';
      });

      areaRadio.addEventListener('click', function () {
        mapCity.style.display = 'none';
        mapArea.style.display = 'block';
      });
    } else {
      // Elements do not exist
      console.log('Some elements are missing.');
    }
  });

  const mapAreaPaths = document.querySelectorAll('.mapArea path');
  const mapCityPaths = document.querySelectorAll('.mapCity path');

  function activatePath(path) {
    path.classList.add('active');
  }

  function deactivatePath(path) {
    path.classList.remove('active');
  }

  function activateAreaPaths(clickedPath) {
    mapAreaPaths.forEach((path) => {
      if (path === clickedPath || path.parentNode === clickedPath.parentNode) {
        activatePath(path);
      } else {
        deactivatePath(path);
      }
    });
  }

  function activateCityPath(clickedPath) {
    mapCityPaths.forEach((path) => {
      if (path === clickedPath) {
        activatePath(path);
      } else {
        deactivatePath(path);
      }
    });
  }

  mapAreaPaths.forEach((path) => {
    path.addEventListener('click', function () {
      activateAreaPaths(this);
    });
  });

  mapCityPaths.forEach((path) => {
    path.addEventListener('click', function () {
      activateCityPath(this);
    });
  });

  document.addEventListener('DOMContentLoaded', function () {
    var areaSelect = document.querySelector('.areaSelect');
    var citySelect = document.querySelector('.citySelect');
    var mapAreaLinks = document.querySelectorAll('.mapArea a');
    var mapCityLinks = document.querySelectorAll('.mapCity a');

    // 監聽區域選擇器的變化
    areaSelect.addEventListener('change', function () {
      var selectedArea = areaSelect.options[areaSelect.selectedIndex].getAttribute('data-class');
      // 遍歷地圖區域的連結，並根據選擇器的值設置活動狀態
      mapAreaLinks.forEach(function (link) {
        if (link.getAttribute('data-class') === selectedArea) {
          link.querySelectorAll('path').forEach(function (path) {
            path.classList.add('active');
          });
        } else {
          link.querySelectorAll('path').forEach(function (path) {
            path.classList.remove('active');
          });
        }
      });
    });

    // 監聽城市選擇器的變化
    citySelect.addEventListener('change', function () {
      var selectedCity = citySelect.options[citySelect.selectedIndex].getAttribute('data-class');
      // 遍歷地圖城市的連結，並根據選擇器的值設置活動狀態
      mapCityLinks.forEach(function (link) {
        if (link.getAttribute('data-class') === selectedCity) {
          link.querySelectorAll('path').forEach(function (path) {
            path.classList.add('active');
          });
        } else {
          link.querySelectorAll('path').forEach(function (path) {
            path.classList.remove('active');
          });
        }
      });
    });

    // 監聽地圖區域連結的點擊事件
    mapAreaLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var areaClass = link.getAttribute('data-class');
        // 選擇相應的區域選擇器選項
        var areaOption = areaSelect.querySelector("option[data-class='" + areaClass + "']");
        if (areaOption) {
          areaOption.selected = true;
          // 觸發區域選擇器的 change 事件
          areaSelect.dispatchEvent(new Event('change'));
        }
      });
    });

    // 監聽地圖城市連結的點擊事件
    mapCityLinks.forEach(function (link) {
      link.addEventListener('click', function (event) {
        event.preventDefault();
        var cityClass = link.getAttribute('data-class');
        // 選擇相應的城市選擇器選項
        var cityOption = citySelect.querySelector("option[data-class='" + cityClass + "']");
        if (cityOption) {
          cityOption.selected = true;
          // 觸發城市選擇器的 change 事件
          citySelect.dispatchEvent(new Event('change'));
        }
      });
    });
  });

  AOS.init();
})();
