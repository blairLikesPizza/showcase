import React, { Component } from 'react'

class Palindrome extends Component {
    render(){
        return ( <div className="puzzleBox palindromePB">
          <h4> Palindrome </h4>
          <input className="inputLine"></input>
          <button className="confirmationButton"> Split </button>
          <span className="resultsBox"></span>
          <span className="resultsBox"></span>
        </div>
            
        )
    }
}

export default Palindrome