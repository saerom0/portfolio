//변수 선언
const pages = document.querySelectorAll('section');
const header = document.querySelector('header');
const nav_btns = header.querySelectorAll('header #menu .nav-list li');
const view_btn = document.querySelector('main #intro .view-btn');
const call_btn = header.querySelector('.call-btn');
const mob_list = header.querySelector('.mob-list');
const speed = 500;
let posArr = [];


getPos();
window.addEventListener('resize', getPos);

window.addEventListener('scroll', () => {
  getPos();
  activeScroll();
  let scroll = window.screenY || window.pageYOffset;

  //intro
  if (scroll >= posArr[0] + 100) {
		pages[0].classList.add('on');
    console.log(posArr);
	} else {
		pages[0].classList.remove('on');
	}
  //skiils
	if (scroll >= posArr[1] - 500) {
		pages[1].classList.add('on');
	} else {
		pages[1].classList.remove('on');
	}
  //experience
  if (scroll >= posArr[2] - 500) {
		pages[2].classList.add('on');
	} else {
		pages[2].classList.remove('on');
	}
  //portfolio
  if (scroll >= posArr[3] - 500) {
		pages[3].classList.add('on');
	} else {
		pages[3].classList.remove('on');
	}
  //contact
  if (scroll >= posArr[4] - 500) {
		pages[4].classList.add('on');
	} else {
		pages[4].classList.remove('on');
	}
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
call_btn.addEventListener("click", e => {
  e.preventDefault();
  moveScrolling(3);
})

//view-btn (햄버거버튼)
call_btn.addEventListener("click",e=>{
  e.preventDefault();
  call_btn.classList.toggle('active');
  mob_list.classList.toggle('active');
})


//스크롤값 저장
function getPos() {
  posArr = [];
  for (const el of pages) posArr.push(el.offsetTop);
}

//스크롤 활성화
function activeScroll() {
  let scroll = window.screenY || window.pageYOffset;
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