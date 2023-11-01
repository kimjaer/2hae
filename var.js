let number = 50;
number += 10;
number += "원";

number += 100;
number += 10;

let count = 0;
++count; // count +=1 // count = count + 1 ('='은 저장하다라서 count가 0이였는데 +1을 저장해서 덮어쓰게 된거임. 그래서 1이 나옴)
count + 1; // ← 이건 저장을 한게 아니라서 휘발됨!

const pet = {
  age: 4,
  nm: "덜덜이",
  type: "개",
  feather: function(){
    console.log("멍멍")
  }
}

pet.feather() //console.log와 마찬가지로 "실행해라"
//함수를 넣고 싶으면 feather라고 함수의 이름을 지어주고 메서드(function)넣어줌.
// 메서드(function)을 실행시키고 싶으면 이름(faether) 불러주면 됨...
//pet이 console 이고 feather가 log임
//log는 단순 실행이라 
console.log(number, typeof number)
console.log(count, pet.age)
