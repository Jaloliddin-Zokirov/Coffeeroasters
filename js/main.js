var elButton = document.querySelector(".box__button");
var elContent = document.querySelector(".box__content")

elButton.addEventListener("click", function(){
  elButton.classList.toggle("rotate")
  elContent.classList.toggle("box__content--open")
})

console.log("Hello world!!!")
