//배지메뉴
const badgeEl = document.querySelector('header .badges');

window.addEventListener('scroll', _.throttle(function() { //화면 자체에다가 스크롤 이벤트를 추가해서 그 화면이 스크롤되면 익명의 함수를 실행하겠다는 의미
  if (window.scrollY > 500) { //화면이 스크롤될때마다 window라는 객체 부분에 있는 scrollY라는 속성 부분의 값이 그때 그때 갱신이 됨
    //배지 숨기기
    //gsap.to(요소, 지속시간, 옵션);
    gsap.to(badgeEl, 0.6, {
      opacity: 0,
      display: 'none'
    });
    //페이지 상단 이동 버튼 보이기
    gsap.to('#to-top', 0.2, {
      x: 0
    });
  } else {
    //배지 보이기
    gsap.to(badgeEl, 0.6, {
      opacity: 1,
      display: 'block'
    });
    //페이지 상단 이동 버튼 숨기기
    gsap.to('#to-top', 0.2, {
      x: 100
    });
  }
}, 300)); //_.throttle(함수, 시간) (lodash.js 라이브러리) : 화면이 스크롤이 될때 실행되는 함수의 개수를 일정시간에 한번씩만 실행되도록 제한함 

//페이지 상단 이동 버튼
const toTopEl = document.querySelector('#to-top');
toTopEl.addEventListener('click', function() {
  gsap.to(window, 0.7, {
    scrollTo: 0
  });
});

//섹션 - 비쥬얼 fade-in, out
const fadeEls = document.querySelectorAll('.visual .fade-in');

fadeEls.forEach(function(fadeEl, index) {
  //gsap.to(요소, 지속시간, 옵션);
  gsap.to(fadeEl, 1, {
    delay: (index + 1) * 0.7, // 1번째 요소: 0.7초, 2번째 요소: 1.4초, 3번째 요소: 2.1초, 4번째 요소: 2.8초 간격을 두면서 나타남
    opacity: 1
  });
});

//섹션 - 노티스 (공지사항 슬라이드)
new Swiper('.notice-line .swiper-container', { //new Swiper(선택자, 옵션);
    direction: 'vertical', //수직 슬라이드
    autoplay: true, //자동 재생 여부
    loop: true //반복 재생 여부
}); 

//섹션 - 노티스 (프로모션 더보기 슬라이드)
new Swiper('.promotion .swiper-container', {
  slidesPerView: 3, //한번에 보여줄 슬라이드 개수
  spaceBetween: 10, //슬라이드 사이 여백
  centeredSlides: true, //1번 슬라이드가 가운데 보이기
  loop: true,
  autoplay: {
    delay: 5000 //5초에 1번씩 이미지가 자동으로 슬라이드됨
  },
  pagination: {
    el: '.promotion .swiper-pagination', //페이지 번호 요소 선택자
    clickable: true //사용자의 페이지 번호 요소 제어 가능 여부
  },
  navigation: {
    prevEl: '.promotion .swiper-prev', //이전 슬라이드 버튼
    nextEl: '.promotion .swiper-next' //다음 슬라이드 버튼
  }
});

//섹션 - 어워즈 (어워즈 슬라이드)
new Swiper('.awards .swiper-container', {
  autoplay: true,
  loop: true,
  spaceBetween: 30,
  slidesPerView: 5,
  navigation: {
    prevEl: '.awards .swiper-prev', //이전 슬라이드 버튼
    nextEl: '.awards .swiper-next' //다음 슬라이드 버튼
  }
});

//섹션 - 노티스 (프로모션 더보기 슬라이드 열고 닫기)
const promotionEl = document.querySelector('.promotion');
const promotionToggleBtn = document.querySelector('.toggle-promotion');
let isHidePromotion = false;

promotionToggleBtn.addEventListener('click', function() {
  isHidePromotion = !isHidePromotion; //isHidePromotion의 반대 값 대입

  if (isHidePromotion) {
    //숨김 처리
    promotionEl.classList.add('hide');
  } else {
    //보임 처리
    promotionEl.classList.remove('hide');
  }
});

//섹션 - 유튜브 (플로팅 이미지)
// 범위 랜덤 함수(소수점 2자리까지)
function random(min, max) {
  // `.toFixed()`를 통해 반환된 문자 데이터를,
  // `parseFloat()`을 통해 소수점을 가지는 숫자 데이터로 변환
  return parseFloat((Math.random() * (max - min) + min).toFixed(2))
}

function floatingObject(selector, delay, size) {
  // gsap.to(요소, 시간, 옵션);
  gsap.to(
    selector, //선택자
    random(1.5, 2.5), //애니메이션 동작 시간
    { //옵션
    y: size,
    repeat: -1, //무한 반복
    yoyo: true, //한번 재생된 애니메이션을 다시 뒤로 재생
    ease: Power1.easeInOut,
    delay: random(0, delay) //지연시간
    }
  );
}

floatingObject('.floating1', 1, 15);
floatingObject('.floating2', 0.5, 15);
floatingObject('.floating3', 1.5, 25);

//스크롤 애니메이션
const spyEls = document.querySelectorAll('section.scroll-spy');
spyEls.forEach(function(spyEl) {
  //Scene() : 특정한 요소를 감시하는 옵션을 지정하는 메서드
  new ScrollMagic
    .Scene({
      triggerElement: spyEl, //보여짐 여부를 감시할 요소를 지정
      triggerHook: 0.8
    })
    .setClassToggle(spyEl, 'show')
    .addTo(new ScrollMagic.Controller()); 
});