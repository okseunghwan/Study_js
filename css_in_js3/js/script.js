// 기존의 class이름을 잃지않으면서 class name을 바꾸는 다른방법
// classList 사용하기

// classList는 말 그대로 class들의 목록으로 작업할 수 있게끔 허용

// className은 모든걸 교체한다. 이전 class들을 상관하지 않고

// classList에 포함된 function중에 constains라는 function이 있다.
// 이function은 우리가 명시한 class가 HTML element의 class에 포함되어있는지 말해준다.


const h1 = document.querySelector(".hello:first-child h1");

function handleTitleClick(){

  const clickedClass = "clicked"

  if(h1.classList.contains(clickedClass)){
    // classList가 clicked를 포함하고 있는지만을 확인한다.
    h1.classList.remove(clickedClass);
    // clickedClass가 classList에 포함되어있다면, clickedClass를 제거한다.
  }else{
    // clickedClass가 h1의 classList에 포함되어 있지 않다면,
    h1.classList.add(clickedClass);
    // classList에 clickedClass를 추가한다.
    // 이렇게하면 기존의 sexy-font라는 클래스를 유지하면서
    // clicked라는 class만 추가했다 제거했다 반복하는게 가능함
  }
  console.log(h1)
}
 

// toggle을 사용하면  위에있는 코드를 그대로 구현할수있다.
// h1의 classList에 class name 포함되었다면 제거하고 , 포함되지 않았다면 추가하고

function handleTitleClick2(){

  h1.classList.toggle("clicked")
  // 단 한줄의 코드로 위에서 5줄로 만들었던 코드를 그대로 구현할 수 있다.
  // toggle은 h1의 classList에 clicked라는 class가 이미 있는지 확인해서
  // 만약 clicked라는 클래스가 있다면 clicked라는 class를 제거해주고,
  // classList에 clicked라는 클래스가 존재하지 않으면,clicked를 classList에 추가한다.
  console.log(h1)
}

h1.addEventListener("click",handleTitleClick2);

