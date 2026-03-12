// js를 사용하는 이유는 html과 상호작용하기 위해서이다.
// HTML의 Element들을 JavaScript를 통해 변경하고 읽을수 있다.

// console에 document를 입력하면, 작성한 HTML을 가져올수 있다.


// console에 document.title을 입력하면 HTML title항목이 나온다. 

// object에서 property를 가져올수 있고, 변경할수있듯이

// console에서 document.title = "hi"를 쓰고 엔터를 누르면 title이 hi로 변경된다.


document.title = "Hello ! from JS"

// html에서 title을 hello ! from html
// js에서 document.title을 hello from js 라고 입력하면

// hello! from js가 화면에 나온다.

const title = document.getElementById("title")
// getElementById()는 string을 전달받는 함수니까 ""(큰따옴표)안에 아이디를 적어준다.

console.log(title);
console.dir(title);

title.innerText = "Got you!"
// h1태그에 들어있던 grab me! 가 Got you로 변경된다.
// html에서 변경한것이 아니라 자바스크립트에서 변경됨
// 이게 가능한 이유는 id를 추가했기 떄문이고
// 자바스크립트에서 element를 가져왔기 떄문이다.
// getElementById()

console.log(title.id)
console.log(title.className)

const hellos = document.getElementsByClassName("hello")
// 클래스네임으로 html 호출하기
console.log(hellos)
// console에서 확인해보면, hello라는 클래스를 가진 태그가 많아서 array에 담겨있다.
// 가끔 많은 element를 한번에 가지고와야하는 경우가 있다
// 그럴때는 getElementByClassName()을 사용한다 =class는 여러개 중복 지정가능


const hello2 = document.querySelector(".hello2 h1")

// element를 가지고 오는 가장 좋은 방법은
// querySelector , querySelectorAll 이다.
// querySelector는 element를 CSS방식으로 검색할 수 있다.
// hello라는 class 내부에있는 h1을 가지고 올수있다.
console.log(hello2)
// querySelector(".클래스네임 태그")

// 클래스네임이 중복되고 여러개라면 맨위에있는 hello2 클래스를 가진 h1이 호출된다.
// querySelector는 첫번째 element만 가져온다.
// 전부가져오고 싶으면 querySelectorAll을 써야한다.
const hello3 = document.querySelectorAll(".hello2 h1")
console.log(hello3)

// querySelector로 id를 호출할 때는 querySelector("#ID 원하는태그")를 입력한다.
// querySelector("#hello") == getElementById("hello")

hello2.innerText = "hihi"