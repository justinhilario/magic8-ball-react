import React from 'react';
import './App.css'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      // Add magic 8 ball outcomes to the array
      answerArray: ["NO SUCKA!", "IS THAT A WISH!", "DON'T GET ALL HYSTERICAL.", "SAY THANK YOU FOR YOUR MIRACLE!", "HOW DARE YOU WAKE ME!", "I'M SORRY THAT'S BEEN DONE."],
      question:""
    }
  }

  getAnswer = () => {
    // destructures answerArray out of state
    const { answerArray } = this.state
    let randomAnswer = Math.floor(Math.random() * 7)
    return answerArray[randomAnswer]
  }

  handleChange = (e) => {
    // gets the event from the input on change and updates state
    this.setState({ question: e.target.value })
  }

  handleSubmit = () =>{
    // destructures question out of state
    const { question } = this.state
    // calls the getAnswer function and saves the outcome as answer
    const answer = this.getAnswer()
    this.setState({ answer: answer })
  }

  render(){
    return (
      <div>
        <head>
        <link rel="preconnect" href="https://fonts.gstatic.com"/> 
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&family=Yatra+One&display=swap" rel="stylesheet"/>
        </head>
        <h1>I AM KAZAAM!</h1>
        <p> { this.state.answer } </p>
        <input
          id="inputBox"
          type='text'
          onChange={ this.handleChange }
        />
        <br />
        <button onClick={ this.handleSubmit }>
          BELLY
        </button>
        <br/>
        <br/>
        <h4>MAKE A WISH AND CLICK MY BELLY!</h4>
        <br />
      </div>
    )
  }
}

export default App;
