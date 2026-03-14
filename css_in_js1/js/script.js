const h1 = document.querySelector(".hello:first-child h1");

console.dir(h1);

// function handleTitleClick(){
//   if(h1.style.color === "blue"){
//     h1.style.color = "tomato"
//   }else{
//     h1.style.color = "blue"
//   }
// }
// 내가 원하는 기능은 h1을 click했을때 h1을 파란색으로 바꿔준다
// 하지만 한번 더 누르면 h1의 색깔을 tomato색깔로 변경하고싶다.
// 다시 click하면 blue 다시 click하면 tomato
// 이렇게 하려면 내가 무언가가 true인지 확인해야 한다.

// 내가 원하는건 이 값을 검사해서 h1.style.color가 blue라면,
// tomato로 바꿔달라고 하는거다

// 여기서 끝내도 되지만 h1.style.color를 이렇게 많이 호출하기보다
// color의 현재값을 저장하면 훨씬 코드를 깔끔하게 정리할수있다.
// const currentColor에 현재 컬러값 저장

function handleTitleClick(){
  const currentColor = h1.style.color;
  let newColor;
  // let은 값이 변할수 있다. newColor는 비어있는 변수
  if(currentColor === "blue"){
    newColor = "tomato"
  }else{
    newColor = "blue"
  }
  // 이렇게 해도 html에는 아무 영향을 끼치지 않음 h1.style.color에 newcolor를 넣어줘야함.
  h1.style.color = newColor;

}


h1.addEventListener("click",handleTitleClick);


// step.1 element를 찾아라
// step.2 event를 listen해라
// step.3 그 event에 반응해라

// 반응-> 무언가를 보여주거나 , 감추거나, 색깔을 바꾸는것 등등
