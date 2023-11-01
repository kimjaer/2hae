const info = [
  {
    leng: ["한국어", "중국어", "일본어"]
  },
  {
    leng: ["영어", "스페인어", "독일어"]
  }
]

console.log(info[1].leng[1])

const gnb =
{
  text: "패밀리사이트",

  d2: [
    {
      text: "네이버",
      href: "소메뉴링크값1"
    },
    {
      text: "네이버",
      href: "소메뉴링크값2"
    },
    {
      text: "다음",
      href: "소메뉴링크값3"
    }
  ]
}



// for (x in gnb.d2){
//   console.log(gnb.d2[x].href)
// }
for (let i = 0; i < gnb.d2.length; i++) {
  console.log(gnb.d2[i].href)
}
