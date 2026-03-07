// 설명이 필요하지 않은 데이터 리스트들은 array로,
// 설명이 필요한 정보가 담긴 데이터 리스트들은 object로!

// 예를들어 한 주의 요일, 내가 구매하고 싶은 것들,
// 이것들은 그냥 리스트다 array에 넣으면됨.

// 어떨 때는 object라는 것을 만들어야 할 때가 있다.
// 비디오 게임을 예를들어, 게임안에서 캐릭터,플레이어를 만든다고 하자


// object 라는게 없다면,
const playerName = "simon";
const playerPoints = 121212;
const playerHandsome = true;
const playerFat = "little bit"

// name,points,handsome,fat 등이 모두 하나의 개체를 설명하는것이라면
// 하나로 묶어서 정리하는게 데이터를 정리하는 최선이다.

// array로 정리하면,
const playerArray = ["simon", 121212, true, "little bit"]
// 이게 적합하지 않은 이유는 1212,true,little bit이 무슨의미인지
// 알려주지 않기 때문

// 많은 variable을 만들거나, array를 만드는것보다 더 나은 방식이 필요
// object -> 중괄호{} 사용

// object안에서는 이퀄(=)을 사용하지 않는다.
// property(특성)는 콤마(,)로 구분한다.
const player = {
  name:"simon",
  points:10,
  handsome:true,
  fat:"little bit"
}
console.log(player);
console.log(player.name);

// player라는 객체를 통으로 부를수도있고
// 객체안에있는 하나의 정보만 불러올수도있다.

// 이건 리스트가 아님, 리스트는 모든값이 같은 의미를 갖는다.
// 요일,살것,과일종류,과목 등등
 
// property 수정 방법
player.name = "james"
console.log(player)

// constant는 수정 할수없지만
// object안의 무언가를 수정하는건 가능하다.
// 에러는 constant 전체를 하나의 값으로서 업데이트 하려고할때 발생한다.
// 하지만 constant 안의 무언가를 업데이트 할때는 문제없다.

// 원한다면, 원하는 어떤 property도 만들수 있다.
player.lastName = "potato"
console.log(player)

// 만약 playerPoints에 15를 더하고 싶다면,
player.points = player.points + 15;
// 10+15= 25 이런식으로 property의 현재값을 이용해서 업데이트 가능
console.log(player.points)

