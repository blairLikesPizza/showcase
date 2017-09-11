import React, { Component } from 'react'

class Sum extends Component {
    render(){
        return ( <div className="puzzleBox sumPB">
          <h4> Sum </h4>
          <input className="inputLine"></input>
          <button className="confirmationButton"> Split </button>
          <span className="resultsBox"></span>
          <span className="resultsBox"></span>
        </div>
            
        )
    }
}

export default Sum