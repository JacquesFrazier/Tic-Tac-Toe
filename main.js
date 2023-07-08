
//Creating the Players
let playerText = document.getElementById('player')
let boxes = Array.from(document.getElementsByClassName('box'))

const oPlayer = 'O'
const xPlayer = 'X'
let currentPlayer = xPlayer

let spaces = Array(9).fill(null)



//Elements
const strike = document.getElementById('strike')
const gameOver = document.getElementById('game-over')
const winnerText = document.getElementById('winner-text')
const startOver = document.getElementById('start-over')



//Place for the X and O
const startGame = () => {

boxes.forEach((box) => box.addEventListener('click', clickBox));

function clickBox(e) {

    const id = e.target.id;

        if(!spaces[id]){
            spaces[id] = currentPlayer
            e.target.innerText = currentPlayer
            currentPlayer = currentPlayer == xPlayer ? oPlayer : xPlayer
    }

    checkForWinner();
     
       
  }
}   
startGame()


//code the winner!
function checkForWinner(){
    for(const winningCondition of winningConditions){
    //Method 1
        //const combo = winningCondition.combo;
        //const strikeClass = winningCondition.strikeClass;

    //Method 2: Object Destructuring
        const {combo, strikeClass} = winningCondition;
        const crossValue1 = spaces[combo[0] ];
        const crossValue2 = spaces[combo[1] ];
        const crossValue3 = spaces[combo[2] ];

        if(
            crossValue1 != null &&
            crossValue1 === crossValue2 &&
            crossValue1 === crossValue3 
        ){
            strike.classList.add(strikeClass);
            winnerText.innerText = `${currentPlayer = currentPlayer == xPlayer ? oPlayer : xPlayer} has won!`;
            return currentPlayer = '';
            
        }
    }
    

}


//Display Winner(shown above)

//Start Over 
    startOver.addEventListener('click', restart)

    function restart(){
        spaces.fill(null)

        boxes.forEach(box => {
            box.innerText = '',
            strike.className = 'strike',
            winnerText.innerText = '';
        })
    }

    
//Combos
let winningConditions = [
    //rows
    {combo: [0, 1, 2], strikeClass: "strike-row-1"},
    {combo: [3, 4, 5], strikeClass: "strike-row-2"},
    {combo: [6, 7, 8], strikeClass: "strike-row-3"},   
    //columns
    {combo: [0, 3, 6], strikeClass: "strike-column-1"},
    {combo: [1, 4, 7], strikeClass: "strike-column-2"},
    {combo: [2, 5, 8], strikeClass: "strike-column-3"},
    //diagonals
    {combo: [0, 4, 8], strikeClass: "strike-diagonal-1"},
    {combo: [2, 4, 6], strikeClass: "strike-diagonal-2"},  

];


//Most difficult 
//1. Find out how to stop game after winner (complete)
//2. Find out how to display winner (complete)
//3. Find out how to make it draw (complete)
//4. Find out how to start over game (complete)