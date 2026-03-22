

//html의 clock 불러오기
const clock = document.querySelector("#clock")

function getClock(){
  const date = new Date();
  clock.innerText = (`${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}`)
  //꼭 백틱``사용
  //console.log대신에 innerText에 넣어주기
}
//문제1: 초가 10이하일떄 01초가 아니라 1초로 나옴
//문제2: 브루우저를 열면 1초뒤부터 실행됨 setInterval이 1초간격으로 불러오기 때문


getClock();
//문제2해결하기 위해 일단 함수 바로호출
setInterval(getClock,1000);
//매초마다 getClock 실행


// setTimeout(sayHello,5000);

// setTimeout ->function을 단 한번만 호출하는데, 일정 시간이 흐른뒤에 호출함
//setTimeout(호출하려는 function, 얼마나 기다릴지ms단위로) -반복안됨.

// 시간과 분 보여주기
// 자바스크립트가 가지고있는 Date object 사용하기

//date.getDate(); 몇일인지
//date.getDay(); 무슨요일인지 6->토요일 0->일요일
//date.getFullyear(); 년도
//date.getHours(); 몇시인지
//date.getMinutes(); 몇분인지
//date.getSeconds(); 몇초인지
// 우리는 위 세개의 function을 매 초마다 호출해줘야 한다.

// 반복해서 호출하려면 setInterval() 써야함.