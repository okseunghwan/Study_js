// 이전 강의에서 form의 기본 동작은 submit이라는걸 배웠다.
// 그렇다면 link의 기본 동작은 뭘까?
// 링크의 기본 동작은 클릭 시 다른 페이지로 이동하는 것이다.



const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input")


const link = document.querySelector("a");
// 링크를 찾아온다, 링크가 하나뿐이라 그냥 a만 적어도됨.


function onLoginSubmit(event) {
  event.preventDefault();

  console.log(loginInput.value);
}



loginForm.addEventListener("submit", onLoginSubmit)

function handleLinkClick(event){
  // (event) ->argument받아주는용도
  event.preventDefault();
  // event가 발생하는것을 막아준다. argument의 이름을적고 preventDefault() 입력하면 됨.
  // 더이상 링크를 클릭해도 해당페이지로 이동하지 않는다.
  // 우리는 브라우저가 하려고 하는 동작을 허용하지 않았다. 허용하지 않고 막아버림.
  // 이게 event를 활용하는 방법이고 우리가 preventDefault를 사용하는 이유이다.
  console.dir(event)
  // form에서는 submit이벤트가 발생했는데 , 링크에서는 pointer event가 발생한다.
  // 강의에서는 mouse event임 바뀐듯.
  // 다른게 나오는 이유는 event의 종류가 다양하기 때문
  alert("clicked!!")
  // alert가 뜨면서 기본동작을 막아주고 있지만 ok를 눌러서 alert가 없어지면 기본동작이 실행된다.
  // alert는 특이해서 모든 동작을 막는다. 그래서 요즘 사용안함.
}

link.addEventListener("click",handleLinkClick)
// EventListener를 만들고 거기에 함수를 줬다는걸 js가 보게되면,
// js는 누군가 링크를 클릭할때,우리를 위해 함수를 실행시킨다.
// 우리는 js한테 함수의 이름만주고 실행하는건 js의 몫이다.

// 하지만 가끔 우리는 기본 동작을 막아야 할 필요가 있다.
// 가끔은 뭐가 클릭됐는지 어디가 클릭됐는지 등 정보를 알고 싶을 때가 있다.

// 그럴때 js는 단순히 함수를 실행시키기만 하는게 아니라,
// js는 함수를 실행시키는 동시에 그 함수에 첫번째 인자로 object를 넣어준다.

// handleLinkClick({information about the event that just happened})
// 방금 일어난 event에 대한 정보를 담은 이 object는 
// handleLinkClick을 위한 EventListener 함수의 첫번째 인자로 주어지게 된다.
// 우리는 공간만 만들어주고 받기만 하면 된다.
// 계산기 만들었을 때 처럼 우리는 argument를 받아줘야한다.




// 가장 중요한건 addEventListener 안에있는 함수는 직접 실행하지 않는다는 것이다.
// 내가 하는게 아니라 브라우저가 해주는 것이다.
// 브라우저는 실행만 시켜주는게 아니라 event에 대한 정보도 담아준다.
// 우리는 argument를 받을수있는 자리만 만들어주면된다 ()안에 매개변수 이름 입력

// preventDefault함수 이걸 호출하게되면, event는 멈추게되고 아무것도 진행되지 않는다.

// 이제 event.preventDefault를 이해했으니 링크를 지우고 form 작성하면됨.

