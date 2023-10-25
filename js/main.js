//변수 선언
const pages = document.querySelectorAll('.page');
const header = document.querySelector('header');
const nav_btns = header.querySelectorAll('header #menu .nav-list li');
const view_btns = document.querySelectorAll('#main a');
const speed = 500;
let posArr = [];


getPos();

window.addEventListener('scroll', () => {
  getPos();
  activeScroll();
})

window.addEventListener('resize', getPos);

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
  })
}
//header 메뉴 클릭
nav_btns.forEach((el, idx) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    header.classList.remove('active');
    isActiveScrolling();
    moveScrolling(idx);
  })
})
//스크롤이동
function moveScrolling(idx) {
  window.scrollTo({ left: 0, top: posArr[idx], behavior: 'smooth' });
}
//스크롤방지
function isActiveScrolling() {
  isActive = header.classList.contains('active');
  isActive ? (document.body.style.overflow = 'hidden') : (document.body.style.overflow = 'auto');
}