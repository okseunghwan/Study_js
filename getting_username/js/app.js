// 구현할 내용: 유저가 이름을 제출하면, form이 사라진다.
// 구현하기 위한 방법: 첫번째,HTML요소 자체를 없애기
// 두번째, CSS를 이용해서 숨기기

// .hidden{
//   display: none;
// }

// 유저가 username을 제출(submit)하면 class:hidden을 넘겨줘서 사라지게 만듦




const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")

const greeting = document.querySelector("#greeting");
const HIDDEN_CLASSNAME = "hidden"
// 왜 이것만 대문자로 쓸까? 관습같은 것
// string만 포함된 변수는 대문자로 표기하고 string을 저장하고 싶을 때 사용한다.
// loginForm이나 loginInput처럼 중요한 정보를 담은게 아니라서 대문자로 작성
// 그냥 hidden이라는 클래스이름만 담고있음



function onLoginSubmit(event) {
  event.preventDefault();
  // 기본동작은 실행되지 않도록 막아주고
  loginForm.classList.add(HIDDEN_CLASSNAME);
  // hidden이라는 classname을 더해줘서 form을 숨기고
  const username = loginInput.value;
  // 유저의 이름을 변수로 저장해주고, 그 이름은 h1안에 넣어준다
  // 현재 h1은 hidden이라는 class name을 갖고있어서 숨어있음
  //  <h1 id="greeting" class="hidden"></h1> 지금 h1의 상태
  console.log(username)
  // 이렇게하면 form은 사라졌지만 입력한값은 콘솔에 남는다.
  greeting.innerText = "hello! "+username;
  // 두개의 string을 합친다. hello! 띄우고 + username
  // 이 방법도 맞지만 대체할수 있는 방법이 있음.
  greeting.innerText = `hello! ${username}`;
  // 백틱과 달러사인 활용, 둘다 hello다음에 한칸 띄우고 username의 변수의 값을 표시
  // 보통은 두번째 방법을 선호한다.
  // 두번쨰 방법은 두가지 규칙이 있다.
  // 첫쨰, 만약 변수와 string을 결합하고 싶다면, 또는 변수를 string안에 집어넣고 싶다면
  // ${변수명} 이렇게 표현한다.
  // 둘쨰, 가장 중요한 규칙은`` 이 기호(백틱)로 시작해야 된다.


  // greeting의 이너텍스트를 hello! + username으로 바꾼다.
  greeting.classList.remove(HIDDEN_CLASSNAME)
}



loginForm.addEventListener("submit", onLoginSubmit)

function handleLinkClick(event){

  event.preventDefault();

  console.dir(event)

  alert("clicked!!")

}
