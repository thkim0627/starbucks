//통합검색
const searchEl = document.querySelector('.search'); //클래스가 .search인 요소를 CSS 선택자로 찾아서 searchEl 이라는 변수에 할당
const searchInputEl = searchEl.querySelector('input'); //serachEl에서 input 요소를 CSS 선택자로 찾아서 searchInputEl 이라는 변수에 할당

//통합검색 click 이벤트
searchEl.addEventListener('click', function() { //searchEl 변수에 click 이벤트 생성
  searchInputEl.focus(); //input 요소에 focus 이벤트 발생
}); 

//통합검색 focus (focus 설정)
searchInputEl.addEventListener('focus', function() {
  searchEl.classList.add('focused'); //특정 요소에 class 정보를 가지고 있는 객체에서 class 내용을 추가 하겠다는 의미
  searchInputEl.setAttribute('placeholder', '통합검색'); //특정 요소에 html속성을 지정하겠다는 의미 
});

//통합검색 blur (focus 해제)
searchInputEl.addEventListener('blur', function() {
  searchEl.classList.remove('focused'); //특정 요소에 class 정보를 가지고 있는 객체에서 class 내용을 추가 하겠다는 의미
  searchInputEl.setAttribute('placeholder', ''); //특정 요소에 html속성을 지정하겠다는 의미 
});

//푸터 this year 계산
const thisYear = document.querySelector('.this-year');
thisYear.textContent = new Date().getFullYear(); 