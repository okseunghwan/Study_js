// value 저장하는 방법 배우기
// 뭔가를 저장하는건 아주 자주 사용되는 기능임
// 유저의 이름이나 뭐가 되었건,
// 유튜브에서 볼륨을 조절하고 새로고침하면 유튜브는 그 볼륨값을 기억한다.

// 우리가 원하는건 user의 이름을 기억하는 것이다.
// 우리가 브라우저에 공짜로 뭔가를 기억할 수 있게 해주는 기능이 존재한다
// 그 API의 이름은 local storage다.
// local storage는 우리가 브라우저에 뭔가를 저장할 수 있게 해준다.
// 그래서 나중에 가져다 쓸 수 있다.

// local storage에 뭐가들었는지 보고싶다면 개발자 도구를 이용하면된다.
// 개발자도구 - 애플리케이션 로컬스토리지 펼치면 나옴.
// localstorage.setItem을 활용하면 local storage에 정보를 저장할 수 있다.
// localstorage.setItem("username","nico")

// localstorage.getItem으로 그값을 불러올 수도 있다.
// localstorage.getItem("username") -> 'nico'가 나온다

// localstorage.removeItem으로 값을 지울수도 있음
// localstorage.removeItem("username") ->username에 있는값이 삭제된다.

// 미니DB같은것, 우리는 key와 value만 준비하면 된다.

// 이제 우리가 할일은 유저가 이름을 제출할 때 그걸 저장해주면 된다.

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"



function onLoginSubmit(event) {
  event.preventDefault();

  loginForm.classList.add(HIDDEN_CLASSNAME);
 
  const username = loginInput.value;
  localStorage.setItem("username",username)
  // "username" 저장될 아이템의 이름(key)이고, 값은 username변수이다.
  // form에 name을 입력하면 key에 username value에 name이 저장된다.
  console.log(username)


  greeting.innerText = `hello! ${username}`;

  greeting.classList.remove(HIDDEN_CLASSNAME)
}



loginForm.addEventListener("submit", onLoginSubmit)



