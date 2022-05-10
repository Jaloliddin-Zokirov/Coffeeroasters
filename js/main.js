var elButton = document.querySelector(".box__right-button");
var elContent = document.querySelector(".survery-content")

elButton.addEventListener("click", function(){
  elButton.classList.toggle("rotate")
  elContent.classList.toggle("survery-content--open")
})


var elButtontwo = document.querySelector(".box__two-button");
var elContenttwo = document.querySelector(".survery-content-two")

elButtontwo.addEventListener("click", function(){
  elButtontwo.classList.toggle("rotate")
  elContenttwo.classList.toggle("survery-content-two--open")
})


var elButtonthere = document.querySelector(".box__there-button");
var elContentthere = document.querySelector(".survery-content-there")

elButtonthere.addEventListener("click", function(){
  elButtonthere.classList.toggle("rotate")
  elContentthere.classList.toggle("survery-content-there--open")
})


var elButtontfour = document.querySelector(".box__four-button");
var elContentfour = document.querySelector(".survery-content-four")

elButtontfour.addEventListener("click", function(){
  elButtontfour.classList.toggle("rotate")
  elContentfour.classList.toggle("survery-content-four--open")
})


var elButtontfive = document.querySelector(".box__five-button");
var elContenttfive = document.querySelector(".survery-content-five")

elButtontfive.addEventListener("click", function(){
  elButtontfive.classList.toggle("rotate")
  elContenttfive.classList.toggle("survery-content-five--open")
})

console.log("Hello world!!!")
