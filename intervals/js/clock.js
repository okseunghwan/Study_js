// greeting.js /clock.js 이런식으로 서로 다른 기능들에 대해서 다른 파일로 분리
// greeting파일은 전체 app에서 greeting부분만 다룬다.
// clock 파일은 clock부분만 다룸
// 이런식으로 세분화해서 관리 (divide and conquer)
// 이렇게 해야 코드가 더 짧아짐.

//html의 clock 불러오기
const clock = document.querySelector("#clock")

//interval은 '매번'일어나야 하는 무언가를 말한다.
// 예를들어 '매 2초' 라고 하면 이게 interval임 
// 매 2초마다 무슨일이 일어나게 하고 싶을 때 그럴 때 사용.

function sayHello(){
  console.log("hello");
}
//내가 하고 싶은 건 이 함수를 매 2초마다 실행하는것
// 자바스크립트는 이미 그 개념을 내장하고 있다.
// 예를들어 서버를 확인한다거나, 매 2초마다 주식 시장 api를 확인해야 한다거나

// 이런 기능을 제공하는 tool이 바로 setInterval()이다.

//setInterval()은 두개의 argument를 받는다.
// 첫번째 인자는 실행하고자 하는 function이다.
// 두번째 argument는 호출되는 function 간격을 몇 ms(milliseconds)로 할건지 쓰면 됨.
setInterval(sayHello,5000);
// 여기서는 function sayHello를 실행, 5000ms마다 호출되도록-> 즉 5초마다 호출

// setInterval(호출하려는 function의 이름, 매 호출 사이에 얼마나 기다릴지 시간)