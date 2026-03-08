// function 계속 반복해서 사용할수 있는 코드조각
// 작업의 기본 단위

// 넘겨주는 어떠한 이름이든 Hello를 해주는 function

// function이없는 세상
console.log("Hello my name is Nico")
console.log("Hello my name is james")
console.log("Hello my name is romeo")
console.log("Hello my name is jack")
// 이 전체코드에서 바뀌는 부분은 끝에있는 이름들 뿐이다.
// 나머지 코드들은 복사만 되고있음
// 이건 좋은 코드가 아니다. 더 좋은게 있어야한다

// function은 어떤 코드를 캡슐화해서 ,실행을 여러번 할수있게 해준다
// 노래나 동영상을 생각하면 쉽다, 계속해서 반복해서 재생가능

function sayHello(name,age){
  // 데이터를 받으려면 ()안에 데이터를 추가해야함
  // 원하는 어떤 이름이든 넣어도된다.
  // 이렇게 하면 js는 sayhello로 보내진 첫번째 데이터가
  // name 이라는 variable로 보내진다는것을 안다
  console.log("Hello my name is "+name+" and i'm "+age)
}
// const를 만들때 const를 쓰는것처럼, string을 작성할때 ""를 쓰듯이
// array는 [] object는 {}
// function을 만들떄는 몇가지 규칙이있다. function은 ()가 필요하다

// {}중괄호 안에 작성하는것이 sayHello를 실행할때마다 실행된다.
// ()이 괄호두개가 function을 실행하는 방법이다.
sayHello();
sayHello();
sayHello();
sayHello();
// 중괄호 안에있던 코드가 실행을 누를때마다 실행됨
// hello my name is는 반복되고 뒤에 이름 a,b,c가 나와야된다면,
// 그걸 위해서는 argument(인수)라는 것을 보내야한다.

// argument는 function을 실행하는 동안 어떤정보를 function에게 보낼수있는 방법

sayHello("james",23)
sayHello("jin",26)
sayHello("jimin",30)
sayHello("lynn",18)


function plus(a,b){
  // a에는 첫번째 argument인 8이 들어가고
  // b에는 두번째 argument인 60이 들어간다.
  // 이게 데이터를 받는 방법이고, 순서가 매우중요하다.
  console.log(a+b)
}

plus(8,60);
// 매개변수를 보내지않으면 NaN이 출력됨
// NaN = Not a Number

function divide(a,b){
  console.log(a/b);
}
divide(10,5)

const player = {
  name: "nico",
  sayHello:function(otherPersonName){
    console.log("hello! "+otherPersonName+ " nice to meet you!")
  }
}
console.log(player.name);
player.sayHello("lynn");