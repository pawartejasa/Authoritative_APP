import React from 'react';

export default class AddOptions extends React.Component{
    
    HandleAddOption=(e)=>{
        e.preventDefault();
        var optionentered= e.target.elements.addOption.value.trim();
        if(optionentered){
            this.props.HandleAddOption(optionentered);
            e.target.elements.addOption.value='';
        }
    };
    render(){
       
        return(
            <div>
            <form className="add-option" onSubmit={this.HandleAddOption}>
            <input type="text" name="addOption" className="add-option__input"/>
            <button className="button">Click This to add new Option</button>
            </form>
            <div>
            
            
            </div>
            </div>
        )
    }
}