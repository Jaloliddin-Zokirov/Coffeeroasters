var elButton = document.querySelector(".box-right__button");
var elContent = document.querySelector(".survery-content")

elButton.addEventListener("click", function(){
  elButton.classList.toggle("rotate")
  elContent.classList.toggle("survery-content--open")
})


var elButtontwo = document.querySelector(".button-two");
var elContenttwo = document.querySelector(".box__content-two")

elButtontwo.addEventListener("click", function(){
  elButtontwo.classList.toggle("rotate")
  elContenttwo.classList.toggle("box__content-two--open")
})


var elButtonthere = document.querySelector(".button-there");
var elContentthere = document.querySelector(".box__content-there")

elButtonthere.addEventListener("click", function(){
  elButtonthere.classList.toggle("rotate")
  elContentthere.classList.toggle("box__content-there--open")
})


var elButtontfour = document.querySelector(".button-four");
var elContentfour = document.querySelector(".box__content-four")

elButtontfour.addEventListener("click", function(){
  elButtontfour.classList.toggle("rotate")
  elContentfour.classList.toggle("box__content-four--open")
})


var elButtontfive = document.querySelector(".button-five");
var elContenttfive = document.querySelector(".box__content-five")

elButtontfive.addEventListener("click", function(){
  elButtontfive.classList.toggle("rotate")
  elContenttfive.classList.toggle("box__content-five--open")
})

console.log("Hello world!!!")
