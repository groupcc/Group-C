let t1 = document.querySelector('.t1');
let t2 = document.querySelector('.t2');
let t3 = document.querySelector('.t3');
let t4 = document.querySelector('.t4');
let t5 = document.querySelector('.t5');
let t6 = document.querySelector('.t6');

let p = document.querySelector('p');
let map = document.querySelector('.map');
let body = document.querySelector('body');

let card1 = document.querySelector('.card1');
let card2 = document.querySelector('.card2');
let card3 = document.querySelector('.card3');
let card4 = document.querySelector('.card4');
let card5 = document.querySelector('.card5');
let card6 = document.querySelector('.card6');

let div1 = document.querySelector('.div1');
let div2 = document.querySelector('.div2');
let div3 = document.querySelector('.div3');
let div4 = document.querySelector('.div4');
let div5 = document.querySelector('.div5');
let div6 = document.querySelector('.div6');
let div7 = document.querySelector('.div7');
let div8 = document.querySelector('.div8');
let div9 = document.querySelector('.div9');
let div10 = document.querySelector('.div10');
let div11 = document.querySelector('.div11');
let div12 = document.querySelector('.div12');
let div13 = document.querySelector('.div13');
let div14 = document.querySelector('.div14');
let div15 = document.querySelector('.div15');
let div16 = document.querySelector('.div16');
let div17 = document.querySelector('.div17');
let div18 = document.querySelector('.div18');
let div19 = document.querySelector('.div19');
let div20 = document.querySelector('.div20');

let f1 = document.querySelector('#f1');
let f2 = document.querySelector('#f2');
let f3 = document.querySelector('#f3');
let f4 = document.querySelector('#f4');
let f5 = document.querySelector('#f5');
let f6 = document.querySelector('#f6');

let p1 = document.querySelector('.p1');
let p2 = document.querySelector('.p2');
let p3 = document.querySelector('.p3');
let p4 = document.querySelector('.p4');
let p5 = document.querySelector('.p5');
let p6 = document.querySelector('.p6');

t1.addEventListener('click', function () {
  div9.style.display = 'block';
  div10.style.display = 'block';

  div9.style.animation = 'fadeIn 4s 2s';
  div10.style.animation = 'fadeIn 4s 2s';

  f1.classList.add('p1');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

t2.addEventListener('click', function () {
  div5.style.display = 'block';
  div6.style.display = 'block';
  div7.style.display = 'block';
  div8.style.display = 'block';

  div5.style.animation = 'fadeIn 4s 2s';
  div6.style.animation = 'fadeIn 4s 2s';
  div7.style.animation = 'fadeIn 4s 2s';
  div8.style.animation = 'fadeIn 4s 2s';

  f2.classList.add('p2');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

t3.addEventListener('click', function () {
  div17.style.display = 'block';
  div18.style.display = 'block';
  div19.style.display = 'block';
  div20.style.display = 'block';

  div17.style.animation = 'fadeIn 4s 2s';
  div18.style.animation = 'fadeIn 4s 2s';
  div19.style.animation = 'fadeIn 4s 2s';
  div20.style.animation = 'fadeIn 4s 2s';

  f3.classList.add('p3');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

t4.addEventListener('click', function () {
  console.log('icon click');
  // 이 코드는 의미가 없는 코드라 주석 처리했습니다.
  div13.style.display = 'block';
  div14.style.display = 'block';
  div15.style.display = 'block';
  div16.style.display = 'block';

  // div13~16 요소에 fadeIn 애니메이션이 적용
  // 이 애니메이션이 끝나고 나면 css 파일에 .card5 .div13~16 요소에 기본으로 선언되어 있는 opacity: 0 속성 때문에
  // 다시 투명도를 0으로 바꿔버립니다!! <- 이게 저희가 계속 찾지 못했던 원인이에요!!
  div13.style.animation = 'fadeIn 4s 2s';
  div14.style.animation = 'fadeIn 4s 2s';
  div15.style.animation = 'fadeIn 4s 2s';
  div16.style.animation = 'fadeIn 4s 2s';

  // 따라서 애니메이션이 끝나면, css에 opacity: 0으로 선언한 것을 1로 바꾸어 불투명하게 보이도록 변경하는 코드가 필요해요!
  // setTimeout()을 사용한 이유는 애니메이션 지속기간 (4s)을 기다렸다가 opacity 를 1값으로 바꿔야하기 떄문입니다.
  // setTimeout(함수, 시간): "시간"동안 기다렸다가 함수에 작성한 코드를 실행합니다.
  // setTimtout MDN: https://developer.mozilla.org/ko/docs/Web/API/setTimeout
  // setTimeout(function () {
  //   div13.style.opacity = '1';
  //   div14.style.opacity = '1';
  //   div15.style.opacity = '1';
  //   div16.style.opacity = '1';
  // }, 4000);

  f4.classList.add('p4');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});



t5.addEventListener('click', function () {
  div1.style.display = 'block';
  div2.style.display = 'block';
  div3.style.display = 'block';
  div4.style.display = 'block';

  div1.style.animation = 'fadeIn 4s 2s';
  div2.style.animation = 'fadeIn 4s 2s';
  div3.style.animation = 'fadeIn 4s 2s';
  div4.style.animation = 'fadeIn 4s 2s';

  f5.classList.add('p5');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

t6.addEventListener('click', function () {
  div11.style.display = 'block';
  div12.style.display = 'block';

  div11.style.animation = 'fadeIn 4s 2s';
  div12.style.animation = 'fadeIn 4s 2s';

  f6.classList.add('p6');

  p.style.display = 'none';
  p.style.transition = '1.5s';
});

document.body.addEventListener('click', function (e) {
  // console.dir(e.target.classList.contains('icon'));
  // console.dir(e.target.tagName);
  console.log('body click');
  if (e.target.classList.contains('icon') === false) {
    f1.classList.remove('p1');
    f2.classList.remove('p2');
    f3.classList.remove('p3');
    f4.classList.remove('p4');
    f5.classList.remove('p5');
    f6.classList.remove('p6');

    p.style.display = 'block';
    p.style.transition = '1.5s';

    div1.style.display = 'none';
    div2.style.display = 'none';
    div3.style.display = 'none';
    div4.style.display = 'none';
    div5.style.display = 'none';
    div6.style.display = 'none';
    div7.style.display = 'none';
    div8.style.display = 'none';
    div9.style.display = 'none';
    div10.style.display = 'none';
    div11.style.display = 'none';
    div12.style.display = 'none';
    div13.style.display = 'none';
    div14.style.display = 'none';
    div15.style.display = 'none';
    div16.style.display = 'none';
    div17.style.display = 'none';
    div18.style.display = 'none';
    div19.style.display = 'none';
    div20.style.display = 'none';
  }
});
