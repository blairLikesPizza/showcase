import React, { Component } from 'react'

class FilterString extends Component {
    render(){
        return ( <div className="puzzleBox filterStringPB">
             <h4>Filter Strings</h4>
             <input className="inputLine"></input>
             <button className="confirmationButton"> Split </button>
             <span className="resultsBox"></span>
             <span className="resultsBox"></span>
        </div>
            
        )
    }
}

export default FilterString