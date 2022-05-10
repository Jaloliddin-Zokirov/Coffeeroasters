var elButton = document.querySelector(".box-right__button");
var elContent = document.querySelector(".survery-content")

elButton.addEventListener("click", function(){
  elButton.classList.toggle("rotate")
  elContent.classList.toggle("survery-content--open")
})


var elButtontwo = document.querySelector(".button-two");
var elContenttwo = document.querySelector(".survery-content__two")

elButtontwo.addEventListener("click", function(){
  elButtontwo.classList.toggle("rotate")
  elContenttwo.classList.toggle("survery-content__two--open")
})


var elButtonthere = document.querySelector(".button-there");
var elContentthere = document.querySelector(".survery-content__there")

elButtonthere.addEventListener("click", function(){
  elButtonthere.classList.toggle("rotate")
  elContentthere.classList.toggle("survery-content__there--open")
})


var elButtontfour = document.querySelector(".button-four");
var elContentfour = document.querySelector(".survery-content__four")

elButtontfour.addEventListener("click", function(){
  elButtontfour.classList.toggle("rotate")
  elContentfour.classList.toggle("survery-content__four--open")
})


var elButtontfive = document.querySelector(".button-five");
var elContenttfive = document.querySelector(".survery-content__five")

elButtontfive.addEventListener("click", function(){
  elButtontfive.classList.toggle("rotate")
  elContenttfive.classList.toggle("survery-content__five--open")
})

console.log("Hello world!!!")
