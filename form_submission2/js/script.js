// 이제 button의 클릭여부말고 form의 submit에 관심이 있다.
// submit이라는 event가 발생하는 걸 아예 막거나 중간에 개입해서
// submit event가 발생했다는 걸 파악하고 싶다.

// 지금 필요한건 login-form 그 자체다.
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")

// 새로고침이 일어나는것은 form submit의 기본동작이다.
// 브라우저 그렇게 프로그래밍 되어있기 때문
// 브라우저는 엔터를 누를 때 새로고침을 하고 form을 submit하도록 되어있다.
// 버튼을 누를때도 같은 행동을 하도록 프로그래밍 되어있음.

// 해야할일은 이 기본 동작이 발생하지 않도록 하는것
function onLoginSubmit(event) {
  event.preventDefault();
  // preventDefault()라는 function을 호출하면
  // 어떤 event의 기본 행동이든지 발생되지 않도록 막는다.
  // 기본행동은 어떤 function에대해 브라우저가 기본적으로 수행하는 동작.
  // 누군가 form을 submit하면 브라우저는 기본적으로 페이지를 새로고침 하도록 되어있다.
  // 이 function을 추가함으로써 그 기본동작을 막아버린다.
  console.log(loginInput.value);
}



loginForm.addEventListener("submit", onLoginSubmit)
// 지금 하고 있는것은 누군가 form을 submit하면 js가 onLoginSubmit을 호출하도록 하고있다.
// 모든 eventListener function의 첫번째 argument는 항상 지금 막 벌어진 일들에 대한 정보.

// 우리는 argument의 공간만 제공하면 js가 알아서
// 방금 일어난 event에 대한 정보를 지닌 argument를 채워 넣는다.

