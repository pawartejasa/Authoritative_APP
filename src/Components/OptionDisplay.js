import Tasks from './Tasks';
import React from 'react';
const OptionDisplay=(props)=>{

        return(
            <div>
            <div className="widget-header">
            <h3 className="widget-header__title">Display My options</h3>
            <button className="button button--link" onClick={props.deleteMe}>Delete All</button>
            
            </div>
           {
               props.Optionlist.map((o, index)=>(
                   
                  <Tasks key={o} taskToDo={o} count={index+1} HandleDltOption={props.HandleDltOption}></Tasks>
                   ))
                
           }
            <hr></hr>
            </div>
        );
    
}
export default OptionDisplay;