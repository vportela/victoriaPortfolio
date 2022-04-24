import './App.css';
import React, { useState } from 'react';



const App = () => {

  const [clickedMessage, setClickedMessage] = useState('')
  const [messageColor, setMessageColor] = useState("blue")
// when you change the state it will only re-render that part of the DOM
  const handleCoinClick = (coinValue)=> {
    const index = Math.floor(Math.random() * 2);
    console.log("index", index)
    const result = index === 1 ? "heads" : "tails"
    console.log("result", result)
    if (coinValue === result){
      console.log("im heads") 
      setMessageColor("red")
      setClickedMessage(`You picked ${coinValue}, CPU result: ${result}, You won!`)
    } else {
      console.log("im tails")
      setMessageColor("blue")
      setClickedMessage(`You picked ${coinValue}, CPU result: ${result}, You lost!`)
    }
  }


  const [matchResult, setMatchResult] = useState('')
  const [matchResultColor, setMatchResultColor] = useState("black")
//---------------------------------------------------------this is actively a mess pls do not percieve : ) ----------------------    
  const handleFighterPick = (fighterAttack)=> {
    const randomNumber = Math.floor(Math.random() * 3);
    console.log("randomNumber", randomNumber)

    // if(randomNumber === 0){
    //   setCpuAttack("Rock")
    // } if (randomNumber === 1){
    //   setCpuAttack("Paper")
    // }
    const cpuAttack = randomNumber === 0 ? "Rock" : randomNumber === 1 ? "Paper" : "Scissors" 

    if (fighterAttack === "Rock" && cpuAttack === "Rock" ) {
        setMatchResultColor("blue")
        setMatchResult(`You picked ${fighterAttack}, CPU picked ${cpuAttack}, result: TIE`)
      } else if (fighterAttack==="Rock" && cpuAttack === "Paper") {
        setMatchResultColor("red")
        setMatchResult(`You picked ${fighterAttack}, CPU picked ${cpuAttack}, result: You Lose : (`)
      } else if (fighterAttack==="Rock" && cpuAttack === "Scissors") {
        setMatchResultColor("green")
        setMatchResult(`You picked ${fighterAttack}, CPU picked ${cpuAttack}, result: You Win!`)
      };
    if (fighterAttack === "Paper" && cpuAttack === "Paper" ) {
        setMatchResultColor("blue")
        setMatchResult(`You picked ${fighterAttack}, CPU picked ${cpuAttack}, result: TIE`)
      } else if (fighterAttack === "Paper" &&cpuAttack === "Scissors") {
        setMatchResultColor("red")
        setMatchResult(`You picked ${fighterAttack}, CPU picked ${cpuAttack}, result: You Lose : (`)
      } else if (fighterAttack === "Paper" && cpuAttack === "Rock") {
        setMatchResultColor("green")
        setMatchResult(`You picked ${fighterAttack}, CPU picked ${cpuAttack}, result: You Win!`)
      }
    if (fighterAttack === "Scissors" && cpuAttack === "Scissors" ) {
        setMatchResultColor("blue")
        setMatchResult(`You picked ${fighterAttack}, CPU picked ${cpuAttack}, result: TIE`)
      } else if (fighterAttack === "Scissors" &&cpuAttack === "Rock") {
        setMatchResultColor("red")
        setMatchResult(`You picked ${fighterAttack}, CPU picked ${cpuAttack}, result: You Lose : (`)
      } else if (fighterAttack === "Scissors" && cpuAttack === "Paper") {
        setMatchResultColor("green")
        setMatchResult(`You picked ${fighterAttack}, CPU picked ${cpuAttack}, result: You Win!`)
      }

    } 
    
// when i click a coin, tell me what coin was clicked
//randomize a cpu coin result
//figure out whether i won or lost
  //if my coin === random coin result, i won. otherwise i lost. 
//display the proper message depending on whether i won or lost. 

  //get it to show one message that tells you exactly which one was clicked
  //do it so it doesnt matter which one you click it says heads
  //then when you click heads you win, then click tails lose
  //then flip it so when you click heads you lose, when you click tails you win
  //after this you can start to randomize with an algorythm (sp?)

  // when you click heads or tails, it rolls the random generator and says what the cpu got
  //if heads === heads then you win if heads===tails you lose 


  //------------------rock paper scissors baby steps
  // if you click on an icon, tell me it was clicked
  // then tell me which icon has been clicked
  // when you click rock you win, paper you loose, scissors you tie
  // then when you click paper you win, rock you tie, scissors you lose
  // if rock === rock you tie, if rock 
// in the case of cpu attack === 0 switch result to rock, if cpu attack === 1 switch result
// to paper, if cpu attack === 2 switch result to scissors
// if randomNumber === 0, set cpu.attack: to "Rock" then if fighter attack === cpu.attack it's a tie
// if fighter === rock

  return (
    <div>
      <div style={{textAlign: "center"}}>
        <h1>Heads or Tails?</h1>
        <h3>Choose wisely</h3>
      </div>
      <div style={{display: "flex", justifyContent: "center"}} id="coin-flip">
        <div
          onClick={() => handleCoinClick("heads")}> {/* anonymous function. */}
          <img style={{width:300}}
            alt="heads coin"
            src='https://m.media-amazon.com/images/I/51xs7F+tP5L._AC_.jpg'
          />
        </div>
        <div onClick={() => handleCoinClick("tails")}>
          <img 
            alt="tails coin"
            src='https://m.media-amazon.com/images/I/51bcZy+HZpL._AC_.jpg'/>
        </div>
      </div>
      <p style={{
        display: "flex",
        justifyContent: "center",
        color: messageColor,
      }}>
        {clickedMessage}
      </p>

      <br/>

      <div>
        <div style={{textAlign: "center"}}>
          <h1>Rock, Paper, Scissors!</h1>
          <h3>Choose your fighter</h3>
        </div>

        <div style={{display: "flex", justifyContent: "center"}}>

          <div onClick={() => handleFighterPick("Rock")} >
            <img src="rock.jpeg"/>
          </div>
          <div onClick={() => handleFighterPick("Paper")}>
            <img src="paper.jpeg"/>
          </div>
          <div onClick={() => handleFighterPick("Scissors")}>
            <img src='scissors.jpeg'/>
          </div>
        </div>
        <p 
          style={{
            textAlign: "center",
            color: matchResultColor,
          }}>
              {matchResult}
          </p>
      </div>
    </div>
  );
}

export default App;