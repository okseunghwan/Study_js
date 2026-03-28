// 첫번째 이미지 array 만들기
const images = [
    "img1.jpg",
    "img2.jpg",
    "img3.jpg",
    "img4.jpg",
    "img5.jpg",
    "img6.jpg",
    "img7.jpg",
    "img8.jpg",
    "img9.jpg",
    "img10.jpg",
]

// 폴더에있는 이미지들이랑 image array안의 이름이 같아야한다.
// 폴더 안에 있는 이미지 이름들을 javascript 파일에서도 똑같이 쓴다


// 랜덤이미지 가져오기
const chosenImage = images[Math.floor(Math.random()*images.length)]


// console.log(chosenImage)

// 이제 우리가 실제로 해야하는건 이미지를 html에 실제로 추가하는것
// 그동안은 html에서 먼저 만들고 가져왔음.
// 아직 자바스크립트에서 뭔가를 만들어서 html에 추가하는건 해본적이 없다

// 원하는 로직->자바스크립트에서 이미지를 만들고 이걸 html에 추가한다.

const bgImage = document.createElement("img");


bgImage.src = `img/${chosenImage}`

console.log(bgImage)


document.body.appendChild(bgImage)
// appenChild는 body에 html을 추가한다