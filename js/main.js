//변수 선언
const pages = document.querySelectorAll('section');
const header = document.querySelector('header');
const nav_btns = header.querySelectorAll('header #menu .nav-list li');
const view_btn = document.querySelector('main #intro .view-btn');
const speed = 500;
let posArr = [];


getPos();
window.addEventListener('resize', getPos);

window.addEventListener('scroll', () => {
  getPos();
  activeScroll();
})



//header 메뉴 클릭
nav_btns.forEach((el, idx) => {
  el.addEventListener("click", e => {
    e.preventDefault();
    header.classList.remove('active');
    isActiveScrolling();
    moveScrolling(idx);
  })
})
//포트폴리오&이력서 바로가기 버튼 클릭
view_btn.addEventListener("click", e => {
  e.preventDefault();
  moveScrolling(3);
})




//스크롤값 저장
function getPos() {
  posArr = [];
  for (const el of pages) posArr.push(el.offsetTop);
}

//스크롤 활성화
function activeScroll() {
  const scroll = window.screenY || window.pageYOffset;
  pages.forEach((_, idx) => {
    if (scroll >= posArr[idx] - 300) {
      for (const el of nav_btns) el.classList.remove('active');
      nav_btns[idx].classList.add('active');
    }
    // if(scroll >= posArr[idx] + 300){
    //   for (const el of pages) {
    //     el.classList.add('on');
    // }
    //   pages[idx].classList.remove('on');
    // }
  })
}

//스크롤이동
function moveScrolling(idx) {
  window.scrollTo({ left: 0, top: posArr[idx], behavior: 'smooth' });
}

//스크롤방지
function isActiveScrolling() {
  isActive = header.classList.contains('active');
  isActive ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
}