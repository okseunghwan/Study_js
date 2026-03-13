const title = document.querySelector(".hello:first-child h1")
// class hello를 가진 div내부의 first-child인 h1을 찾아오는것
console.log(title)


// element의 내부를 보고싶다면 console.dir 를 하면 된다.
console.dir(title)
// object로 표시한 element를 보여준다.

title.style.color = "blue"
// h1의 style의 color를 blue로 바꾼다.
// javascript에서 대부분 작업할 일은 event를 listen 하는거다.
// 

function handleTitleClick(){
  console.log("title was clicked!");
  title.style.color = "red"
}


title.addEventListener("click",handleTitleClick);
// title에 event를 추가한다. javaScript에 무슨 event를 listen하고 싶은지 알려줘야한다.
// ("click")괄호안에 이런식으로 click을 입력하면 click이벤트가 추가된다.
// 누군가 title을 click하는걸 listen함

// 두번째argument에 클릭하면 실행될 함수를 넣어준다
// 함수에 ()를 사용하지않는 이유는 바로 실행되는게 아니라
// click하면 실행되도록 하기위해서-> 유저가 title을 클릭할경우 javaScript가 실행버튼을 대신 눌러주길 원함.

// 자바스크립트를 통해서 유저들의 행동을 listen할수있다
// 이중에서 가장 기본적이고 이해하기 쉬운것이 바로 click event이다.
// click event를 listen하기 위해서는
// HTML element를 가져와서 , addEventListener function을 실행시켜주면 되는데

// addEventListener("이곳에 어떤 event를 listen하고싶은지 적어줘야한다.")
// addEventListener("이벤트",이곳에는 해당event를 했을떄 어떤 함수를 실행할지 적는다-괄호는 사용하지 않는다)


// 요약하면, HTML에서 element를 찾아오고
// 그 element에 event listener를 추가하고
// 유저가 click하거나,무언가 입력하거나,엔터를 누르거나 할 때,
// 그 event를 listen하고 그 event에 반응해주게 한다.


