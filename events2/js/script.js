// listen하고 싶은 event를 찾는 가장 좋은 방법은
// 구글에 찾고싶은 element의 이름, 예를들어 h1 element를 검색
// "h1 html element mdn" 
// Mozilla Developer Network인 MDN에 검색해보는것
// HTML의 element가 아니라 JavaScript의 element
// 링크에 Web APIs라는 문장이 포함된 페이지를 찾으면된다.
// JavaScript 관점의 HTML Heading Element라는 의미이기 떄문

// 여기서 event들을 찾을수 있다 invalid같은것들
// property들을 살펴보면 copy,paste,scroll등 사용자가 복사, 붙여넣기 하는것들을 전부 감지할수있다.

// 이 방법이 아니라면, console.dir로 property를 직접 봐도 된다.
// property 이름 앞에 on이 붙어있다면, 그게 바로 event listener이다.
// onabort 를 사용하려면 onabort가 아닌 abort로 사용해야한다.

// mouseentter 마우스가 올라갔을때 = hover와 같음

const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

function handleTitleClick(){
  h1.style.color = "blue";
}

function handleMouseEnter(){
  h1.innerText = "mouse is here!"
}

function handleMouseLeave (){
  h1.innerText = "mouse is gone!"
}


// 코드 자체로 설명이되고 ,굉장히 이해하기 쉽다.
// 이걸 이해하려고 천재가 될 필요도 없고, 수학을 배울 필요도 없다.
// 우리가 하는건 JavaScript로 HTML element를 가져오고
// 가져온 element에 event listener를 추가해주는것 뿐이다.
// 그리고 event가 발생하면 어떤 function을 실행시켜준다.


// title.addEventListener("click",handleTitleClick);

h1.addEventListener("mouseenter",handleMouseEnter)

h1.addEventListener("mouseleave",handleMouseLeave)
// event를 사용하는데 두가지 방법이있다.

// 첫번째는 title.adddEventListener()를 해주고 click을 넘겨주는것

// 두번째는 title.onclick
h1.onclick = handleTitleClick;
// 이렇게만 해줘도 똑같이 작동한다.
// onmouseenter, onmouseleave 도 똑같이 작동한다.

// addEventListener를 더 선호하는 이유는
// 나중에 removeEventListener를 통해서 event listener를 제거할수 있기때문




// 그냥 javaScript에게 뭘할지 알려주고 JavaScript 그걸 실행한다.
// 직접 할 필요없이 , JaveScript에게 하라고 지시만 하면 됨.
// javaScript에게 누군가 title을 클릭하면 handleTitleClick function을 실행하라고 얘기해준것
// 그리고 누군가 마우스를 title에 올리면 handleMouseEnter function을 실행하라고 얘기해줌
// 만약 누군가 마우스를 title 밖으로 내보내면 handleMouseLeave를 실행시키길 원하는것


function handleWindowResize(){
  document.body.style.backgroundColor = "tomato";
}

window.addEventListener("resize",handleWindowResize);
// document가 js에서 기본적으로 제공되듯이 
// window도 기본적으로 제공된다.


// document의 body,head,title같은것은 바로 불러올수있지만


// 나머지 element들은 querySelector나 getElementById등으로 찾아와야됨. 
// document.div document.h1 이런건 안됨.

function handleWindowCopy(){
  alert("copier!!");
}

window.addEventListener("copy",handleWindowCopy);

// 항상 똑같은 패턴, event를 listen하고 거기에 반응

// element를 찾아서 event listener를 추가하고, event가 발생하면 반응을 해주는것


function handleWindowOffline(){
  alert("SOS no WIFI")
}
function handleWindowOnline(){
  alert("ALL GOOD")
}

window.addEventListener("offline",handleWindowOffline);
window.addEventListener("online",handleWindowOnline)