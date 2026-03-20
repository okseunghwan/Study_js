
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"

const USERNAME_KEY = "username"




function onLoginSubmit(event) {
  event.preventDefault();
  // 유저가 form에 값을 입력하고 submit하면,
  // 1.event가 원래하는 행동을 멈춰준다. ->submit의 기본동작인 새로고침을 막는다
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // 2. form을 다시 숨겨준다.
  const username = loginInput.value;
  // 3.loginInput의 value를 username이라는 변수로 저장한다.
  localStorage.setItem(USERNAME_KEY, username)
  // 4.username값을 username이라는 key와 함께 local storage에 저장한다.
  console.log(username)



  paintGreetings(username)
  // 5.paintGreetings 함수를 호출한다.
}





const savedUsername = localStorage.getItem(USERNAME_KEY);

console.log(savedUsername)
// local storage는 정보를 저장하고 불러오고 삭제하는
// 브라우저가 가지고 있는 작은 DB같은 API이다
// 만약 local storage에 없는 정보를 localStorage.getItem()으로 불러오려고하면
// null값을 받는다.
// 하지만 username처럼 local storage에 존재하는 정보를 불러오려고 하면
// 그 key(ex:username)에 해당하는 value를 받는다


if (savedUsername === null) {
  // savedUsername이 null이라면 이 조건은 참이되고
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  // loginForm으로부터 HIDDEN_CLASSNAME을 삭제한다 -> form이 화면에 나온다.
  loginForm.addEventListener("submit", onLoginSubmit)
  // submit이벤트가 발생하면 onLoginSubmit함수가 실행된다.

} else {

  greeting.innerText = `Hello!${savedUsername}`

  greeting.classList.remove(HIDDEN_CLASSNAME)

}



function paintGreetings(username) {
  // paintGreetings는 username(loginInput의 value)을 인자로 받는다

  greeting.innerText = `Hello!${username}`
  // greeting->비어있는 h1 , 비어있는 h1태그에 `Hello ${username}`이라는 텍스트를 추가한다.
  greeting.classList.remove(HIDDEN_CLASSNAME)
  // 그다음 h1에 hidden이라는 클래스명을 제거한다-> 브라우저에 h1이 나타난다. hello! (username)
}

if (savedUsername === null) {
  // show the form


  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
} else {

  // show the greetings
  // 브라우저가 local storage를 확인했을때 username이라는 key의 값이 null이아니라면
  // paitnGreetings함수를 호출한다.
  // paintGreetings함수는 비어있는 h1태그에 hello username을 추가하고
  // hidden클래스를 지워서 화면에 나타난다.
  paintGreetings(savedUsername)
}