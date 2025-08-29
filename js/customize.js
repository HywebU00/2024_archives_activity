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
  //cp主圖輪播
  const cpMainSwiper = new Swiper('.cpMainSlider .swiper', {
    slidesPerView: 1,
    loop: false,
    // 切換點
    pagination: {
      el: '.cpMainSlider .swiperDots',
      bulletElement: 'button',
      clickable: true,
    },
    // 切換箭頭
    navigation: {
      nextEl: '.cpMainSlider .nextSlider', //自行設定樣式
      prevEl: '.cpMainSlider .prevSlider', //自行設定樣式
      disabledClass: 'swiperArrow-disabled', //不可點選樣式
    },
  });
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

    if (areaSelect && mapAreaLinks.length > 0) {
      areaSelect.addEventListener('change', function () {
        var selectedArea = areaSelect.options[areaSelect.selectedIndex].getAttribute('data-class');
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

      mapAreaLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          var areaClass = link.getAttribute('data-class');
          var areaOption = areaSelect.querySelector("option[data-class='" + areaClass + "']");
          if (areaOption) {
            areaOption.selected = true;
            areaSelect.dispatchEvent(new Event('change'));
          }
        });
      });
    }

    if (citySelect && mapCityLinks.length > 0) {
      citySelect.addEventListener('change', function () {
        var selectedCity = citySelect.options[citySelect.selectedIndex].getAttribute('data-class');
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

      mapCityLinks.forEach(function (link) {
        link.addEventListener('click', function (event) {
          event.preventDefault();
          var cityClass = link.getAttribute('data-class');
          var cityOption = citySelect.querySelector("option[data-class='" + cityClass + "']");
          if (cityOption) {
            cityOption.selected = true;
            citySelect.dispatchEvent(new Event('change'));
          }
        });
      });
    }
  });

  document.addEventListener('DOMContentLoaded', () => {
    const btnAdd = document.querySelector('.btnAdd'); // 新增場次按鈕
    const sessionsGrp = document.querySelector('.sessionsGrp'); // 包含所有 sessionForm 的容器

    // 確保按鈕和容器都存在，才執行功能
    if (!btnAdd || !sessionsGrp) {
      console.warn('新增場次功能無法執行，因為頁面中缺少必要的元素。');
      return;
    }

    // 點擊新增按鈕時執行
    btnAdd.addEventListener('click', () => {
      const sessionForms = sessionsGrp.querySelectorAll('.sessionForm'); // 獲取所有 sessionForm
      const sessionCount = sessionForms.length; // 計算目前的 sessionForm 數量
      const newSessionNum = sessionCount + 1; // 新的 sessionForm 編號

      // 複製第一個 sessionForm 的內容
      const firstSessionForm = sessionForms[0];
      if (!firstSessionForm) {
        console.warn('無法新增場次，因為頁面中沒有初始的 sessionForm。');
        return;
      }

      const newSessionForm = firstSessionForm.cloneNode(true); // 深度複製第一個 sessionForm
      const orderElement = newSessionForm.querySelector('.order'); // 更新編號

      // 修改新的 sessionForm 的編號
      orderElement.innerHTML = `第<span class="num">${newSessionNum}</span>筆資料`;

      // 確保新的 sessionForm 不重複原有的刪除按鈕事件
      const btnDelete = newSessionForm.querySelector('.btnDelete');
      if (!btnDelete) {
        // 如果複製的 sessionForm 沒有刪除按鈕，新增一個
        const deleteButton = document.createElement('button');
        deleteButton.classList.add('btnDelete');
        deleteButton.textContent = '刪除此筆';
        newSessionForm.appendChild(deleteButton);

        // 為刪除按鈕添加事件監聽
        deleteButton.addEventListener('click', () => {
          deleteSession(newSessionForm);
        });
      } else {
        // 如果有刪除按鈕，確保事件重新綁定
        btnDelete.addEventListener('click', () => {
          deleteSession(newSessionForm);
        });
      }

      // 將新的 sessionForm 添加到 sessionsGrp 中
      sessionsGrp.appendChild(newSessionForm);
    });

    // 刪除 sessionForm 的功能
    function deleteSession(session) {
      session.remove(); // 移除對應的 sessionForm

      // 重新更新所有 sessionForm 的編號
      const sessionForms = sessionsGrp.querySelectorAll('.sessionForm');
      sessionForms.forEach((form, index) => {
        const num = form.querySelector('.num');
        num.textContent = index + 1; // 更新編號為正確的序列
      });
    }
  });

  document.addEventListener('DOMContentLoaded', function () {
    const uploadAlbum = document.querySelector('.formGrp.uploadAlbum');

    if (!uploadAlbum) return;

    const maxGroups = 5;

    const btnAddFile = uploadAlbum.querySelector('.btnAddFile');

    if (!btnAddFile) return;

    btnAddFile.addEventListener('click', function () {
      const currentGroups = uploadAlbum.querySelectorAll('.uploadGrp').length;

      if (currentGroups >= maxGroups) return;

      const newGroup = document.createElement('div');
      newGroup.classList.add('uploadGrp');
      newGroup.innerHTML = `
      <input class="upload_file" type="text" title="檔案名稱" readonly />
      <div class="uploadBtn">
        <span>上傳檔案</span>
        <input type="file" class="check_file" title="請選擇檔案" />
      </div>
      <button type="button" class="delete_file btnNormal">刪除檔案</button>
    `;

      const formContent = uploadAlbum.querySelector('.formContent');
      formContent.insertBefore(newGroup, btnAddFile);
    });
  });

  //==============錨點功能==============
  // 導覽列錨點滾動功能
  document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('.anchorNav a[href^="#"]');
    const sections = [];

    // 收集所有錨點對應的區塊
    navLinks.forEach((link) => {
      const targetId = link.getAttribute('href').substring(1);
      const targetSection = document.getElementById(targetId);
      if (targetSection) {
        sections.push({
          id: targetId,
          element: targetSection,
          link: link,
        });
      }
    });

    // 移除所有active class
    function removeAllActive() {
      navLinks.forEach((link) => link.classList.remove('active'));
    }

    // 點擊事件處理
    navLinks.forEach((link) => {
      link.addEventListener('click', function (e) {
        // 不需要 preventDefault()，讓瀏覽器自然處理錨點跳轉
        // CSS scroll-behavior: smooth 會處理平滑滾動

        // 移除所有active class
        removeAllActive();
        // 為當前點擊的連結添加active class
        this.classList.add('active');
      });
    });

    // 滾動監聽功能
    function updateActiveLink() {
      const scrollPosition = window.pageYOffset || document.documentElement.scrollTop;
      const windowHeight = window.innerHeight;

      let activeSection = null;

      // 找出當前在視窗中最顯著的區塊
      sections.forEach((section) => {
        const rect = section.element.getBoundingClientRect();
        const elementTop = rect.top + scrollPosition;
        const elementBottom = elementTop + rect.height;

        // 檢查區塊是否在視窗範圍內
        // 考慮區塊頂部距離視窗頂部的位置
        if (scrollPosition >= elementTop - 100 && scrollPosition < elementBottom - 100) {
          activeSection = section;
        }
      });

      // 如果沒有找到合適的區塊，使用第一個可見的區塊
      if (!activeSection && sections.length > 0) {
        for (let i = 0; i < sections.length; i++) {
          const rect = sections[i].element.getBoundingClientRect();
          if (rect.top <= windowHeight && rect.bottom >= 0) {
            activeSection = sections[i];
            break;
          }
        }
      }

      // 更新active狀態
      removeAllActive();
      if (activeSection) {
        activeSection.link.classList.add('active');
      }
    }

    // 使用節流函數優化滾動性能
    let scrollTimeout;
    function throttleScroll() {
      if (scrollTimeout) {
        return;
      }
      scrollTimeout = setTimeout(() => {
        updateActiveLink();
        scrollTimeout = null;
      }, 10);
    }

    // 添加滾動事件監聽器
    window.addEventListener('scroll', throttleScroll);

    // 頁面載入時執行一次，確保初始狀態正確
    updateActiveLink();

    // 處理瀏覽器前進/後退按鈕
    window.addEventListener('popstate', function () {
      setTimeout(updateActiveLink, 100);
    });
  });

  AOS.init();
})();
