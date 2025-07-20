let characters = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T",
"U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s",
"t","u","v","w","x","y","z", "0", "1", "2", "3", "4", "5", "6", "7", "8", "9","~","`","!","@","#",
"$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]

let answerOne = document.getElementById("answer-one")
let answerTwo = document.getElementById("answer-two")
let answerIntro = document.getElementById("answer-intro")
let userInput = document.getElementById("user-input")

function generatepassword() {
  let result = ""
  if (userInput.value <= 18) {
    answerIntro.innerText = "Here we go! Your strong passwords"
    for (let i = 0; i < userInput.value; i++) {
    result += characters[Math.floor(Math.random() * characters.length)];
    }
  return result
  } else {
      answerIntro.innerText = "Sorry the password length is out of range!"
  }
}


function gen() {
  answerOne.textContent = generatepassword()
  answerTwo.textContent = generatepassword()
}
