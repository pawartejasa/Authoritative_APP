import React from 'react';
const Tasks=(props)=>{
    return(
        <div className="options">
        <p className="options__text">{props.count}. {props.taskToDo}</p>
        
        <button className="button button--link" onClick={(option)=>{props.HandleDltOption(props.taskToDo)}}>Remove This</button>
        </div>
    );
}
export default Tasks;