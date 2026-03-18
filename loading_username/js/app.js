// 이제 할건 form을 보여주기 전에,
// 그리고 addEventListener를 하기전에, 확인을 해줘야한다.

// local storage가 비어있으면 form부터 보여주면서 그대로 하면되고,
// 하지만 local storage에 유저정보가 있으면 form을 보여주면 안됨.
// 우리는 h1요소를 보여줘야 한다.
// 그럼 이제 우리가 할일은, local storage에 유저정보 유무를 확인하는것.



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"

const USERNAME_KEY = "username"
// username이라는 string이 여러곳에서 반복적으로 나온다
// string을 반복해서 사용하는경우,
// 그리고 그것들이 무.조.건 같아야 할때 변수로 고정시켜준다.
// 이유: string이 오타가나면 자바스크립트에서는 지적하지 않는다.
// 하지만 변수명이 오타가나면 자바스크립트에서 지적해준다.

// 반복되는 string들은 대문자변수로 만들어주는게 실수를줄이고 오류를 없앨수있다.



function onLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
 
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY,username)
  // "username" 저장될 아이템의 이름(key)이고, 값은 username변수이다.
  // form에 name을 입력하면 key에 username value에 name이 저장된다.
  console.log(username)


  // greeting.innerText = `hello! ${username}`;

  // greeting.classList.remove(HIDDEN_CLASSNAME)

  // 위 두줄을  paintGreetings(savedUsername)으로 변경
   paintGreetings(savedUsername)
}





const savedUsername = localStorage.getItem(USERNAME_KEY);
// 로컬스토리지에서 username(key)에 있는 값을 불러와서 savedUsername에 넣는다.
console.log(savedUsername)

if(savedUsername === null){
  // show the form
  // form에도 class=hidden을 줘서 숨기고 시작하게 만들기
  // savedUsername 값이 null인 경우, 즉 local storage에 유저정보가 없을 때,
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
}else{
  // show the greetings
  greeting.innerText = `Hello!${savedUsername}`
  // 먼저 greeting안에 텍스트를 추가하고,
  greeting.classList.remove(HIDDEN_CLASSNAME)
  // 그런다음 greeting한테서 HIDDEN_CLASSNAME을 제거
}

// 문제점 greeting 내용 바꾸는걸 위에서도 ,아래서도 반복하고있음
// 그래서 함수로 만들기
function paintGreetings(username){
  // username을 인자로 받는 함수를 만든다.
  // local storage에 유저정보가 있으면 거기서 유저정보를 받아서 인자로 넣어준다.
    greeting.innerText = `Hello!${username}`
  // 먼저 greeting안에 텍스트를 추가하고,
  greeting.classList.remove(HIDDEN_CLASSNAME)
  // 그런다음 greeting한테서 HIDDEN_CLASSNAME을 제거
}

if(savedUsername === null){
  // show the form
  // form에도 class=hidden을 줘서 숨기고 시작하게 만들기
  // savedUsername 값이 null인 경우, 즉 local storage에 유저정보가 없을 때,
  loginForm.classList.remove(HIDDEN_CLASSNAME)
  loginForm.addEventListener("submit", onLoginSubmit)
}else{
  // show the greetings
  paintGreetings(savedUsername)
}