const computerChoiceDisplay = document.getElementById("computer-choice")
const userChoiceDisplay = document.getElementById("user-choice")
const drawDisplay = document.querySelector("#draw")
const resultDisplay = document.getElementById("result")
const finalResultDisplay = document.getElementById("finalResult")
const possibleChoices = document.querySelectorAll('button')
const YSDisplay = document.querySelector('#yourScore')
const CSDisplay = document.querySelector('#computerScore')
const userSelectDisplay = document.querySelector('#yourChoice')
const selectedPlayerDisplay = document.querySelector('#selectedPlayer')
let userChoice, computerChoice, result, fFf
let computerChoiceImg = document.createElement('img');
let yourChoiceImg = document.createElement('img');

possibleChoices.forEach(possibleChoice => possibleChoice.addEventListener('click', (e) =>{

    userChoice = e.target.id
    userChoiceDisplay.innerHTML = userChoice

    if (userChoice === "rock"){
        yourChoiceImg.setAttribute('src', 'images/rock.jpg')
        userSelectDisplay.appendChild(yourChoiceImg)
    } else if (userChoice === "paper"){
            yourChoiceImg.setAttribute('src', 'images/paper.jpg')
            userSelectDisplay.appendChild(yourChoiceImg)
        }
        else {
            yourChoiceImg.setAttribute('src', 'images/scissors.jpg')
            userSelectDisplay.appendChild(yourChoiceImg)
            }

    generateComputerChoice()

    getResult()
    finalResult()
}))

function generateComputerChoice () {
   
    const randomNum = Math.floor(Math.random() * possibleChoices.length) + 1
    const computerDisplay = document.querySelector('#compChoice')

    if (randomNum === 1 ) {
        computerChoice = "rock";
        computerChoiceImg.setAttribute('src', 'images/rock.jpg')
        computerDisplay.appendChild(computerChoiceImg)
    } 
   else if ( randomNum === 2) {
        computerChoice = "paper";
        computerChoiceImg.setAttribute('src', 'images/paper.jpg')
        computerDisplay.appendChild(computerChoiceImg)
    } 
    else  {
        computerChoice = "scissors"
        computerChoiceImg.setAttribute('src', 'images/scissors.jpg')
        computerDisplay.appendChild(computerChoiceImg)
    }
    computerChoiceDisplay.innerHTML =  computerChoice
}
const final=[]
var count =[]

const finalResult = () =>{
    let winer = 0
    let looser = 0
    let draw =0

    for ( let i=0; i < final.length; i++){
  
        if (final[i]=== "You won! "){
            winer+=1
        } else if (final[i]==="Computer won! " ){
            looser+=1
        }else{
            draw+=1
        }    
    }
    if (winer === looser){
        fFf = "Draw"
   } 
    if (winer === looser && looser === draw){
         fFf = "Draw"
    }
    if (winer > looser){
        fFf = "You are the winner!"
    }
    if (looser > winer){
        fFf = "You lost the game!"
    }

    finalResultDisplay.innerHTML= fFf
    YSDisplay.innerHTML= winer
    CSDisplay.innerHTML= looser
    drawDisplay.innerHTML= draw
}
        
    
function getResult () {

    if ( userChoice === computerChoice ) {
        result = " It's a draw! "
        final.push(result)
       
    } 
    if ( userChoice === 'rock' && computerChoice === 'paper' ) {
        result = "Computer won! "
        final.push(result)
       
    } 
    if ( userChoice === 'paper' && computerChoice === 'rock' ) {
        result = "You won! "
        final.push(result)
        
    } 
    if ( userChoice === 'rock' && computerChoice === 'scissors' ) {
        result = "You won! "
        final.push(result)
        
    } 
    if ( userChoice === 'scissors' && computerChoice === 'rock' ) {
        result = "Computer won! "
        final.push(result)
        
    } 
    if ( userChoice === 'paper' && computerChoice === 'scissors' ) {
        result = "Computer won! "
        final.push(result)
        
    } 
    if ( userChoice === 'scissors' && computerChoice === 'paper' ) {
        result = "You won! "
        final.push(result)
        
    } 
    resultDisplay.innerHTML= result
   

}
