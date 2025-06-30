let random = parseInt(Math.random()*100+1)
 const submit = document.querySelector('#sub')
  const userinput = document.querySelector('#guessfield')
  const guessslot  = document.querySelector('.guesses')
  const lastresult = document.querySelector('.lastresult')
  const loworhi = document.querySelector('.loworhi')
  const startover = document.querySelector('.Resultparam')

  const p = document.createElement('p')

  let prevGuess = []
  let NumGuess = 1

  let PlayGame = true
  
  if(PlayGame){
      submit.addEventListener('click',function(e){
        e.preventDefault()
        const guess = parseInt(userinput.value)
        validateguess(guess)

      })
  }

  function validateguess(guess){
    if(isNaN(guess)){
        alert('Please enter a valid number')
    } else if(guess<1){
        alert('Please enter a  number greater than 1')
    } else if(guess>100){
        alert('Please enter a number less than 100')
    }
    else{
        prevGuess.push(guess)
        if(NumGuess===10){
           
            displaymessage(`Game Over: Random Number was ${random}`)
            Endgame()
             cleanup(guess)
        }
        else{
            cleanup(guess)
            checkguess(guess)
        }
    }

  }

  function checkguess(guess){
    if(guess === random){
   displaymessage(`You Won`)
   Endgame()
    } else if(guess<random){
        displaymessage(`Number is Too Low`)
    }
    else if(guess>random){
        displaymessage(`Number is Too High`)

    }

  }

  function displaymessage(message){
    loworhi.innerHTML = `<h2>${message}</h2>`
    console.log(loworhi)

  }
 function cleanup(guess){
  userinput.value = ''
  guessslot.innerHTML+=`${guess}, `
  NumGuess++
  lastresult.innerHTML = `${11-NumGuess}`
 }
 
 function Endgame(){

 userinput.setAttribute('disabled','')
 p.classList.add('button')
 p.innerHTML = `<h2 id = "newgame">Start New Game</h2>`
 startover.appendChild(p)
 PlayGame = false
  userinput.value = ''
 Newgame()
 }
 function Newgame() {
  const newGameButton = document.querySelector('#newgame')
  newGameButton.addEventListener('click', function() {
    random = parseInt(Math.random() * 100 + 1)
    prevGuess = []
    NumGuess = 1
    guessslot.innerHTML = ''
    lastresult.innerHTML = '10'
    userinput.removeAttribute('disabled')
    loworhi.innerHTML = ''
    p.remove()
    PlayGame = true
  })
}
