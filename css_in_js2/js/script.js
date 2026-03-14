// style 작업에 적합한 도구는 css이다.
// 그리고 animation에 적합한 도구는 JavaScript이다


const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){
  const clickedClass = "clicked"
  // clickedClass라는 변수에 clicked(css에꾸민 class이름)를 넣어준다.
  // 스펠링에러때문에 error가 발생할수있는 부분 축소하기위해서
  if(h1.className === clickedClass){
    // (=)부호가 세개라면 === className이 active와 같은지 확인하는것
    h1.className = "";
    // (=)부호가 한개라면 해답 값(왼쪽)을 오른쪽에있는값으로 변경
  }else{
    h1.className = clickedClass;
  }
  console.log(h1)

}

h1.addEventListener("click",handleTitleClick);

// css에서 active란 클래스에 tomato컬러를 적용시켜주고
// js에서 h1에 active class를 전달해주고 싶으면 어떻게 해야할까

//   h1.className = "active";