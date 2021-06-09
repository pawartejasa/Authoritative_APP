import React from 'react';
export default class Action extends React.Component{
    
    render(){
        return(
            <div>
            <button className="big-button" onClick={this.props.GivemeAct} disabled={!this.props.shouldDisplay}>What Should I Do?</button>
            </div>
        )
    }
}