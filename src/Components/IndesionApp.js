import React from 'react';
import AddOptions from './AddOption';
import OptionDisplay from './OptionDisplay';
import Action from './Action';
import Header from './Header';
import AddModal from './AddModal';
export default class IndesionApp extends React.Component{
    state={
        optionarr: ["option1", "option2", "option3", "option4"],
        selectedOption: undefined
    };
    /* constructor(props){
        super(props);
        this.DeleteOptions=this.DeleteOptions.bind(this);
        this.HandleAddOption=this.HandleAddOption.bind(this);
        this.ActionPerform=this.ActionPerform.bind(this);
        this.HandleDltOption=this.HandleDltOption.bind(this);
       
    } */
    DeleteOptions=()=>{
        this.setState(()=>{
            return{
                optionarr: []
            };
        });
    };
    ActionPerform=()=>{
        var value=Math.floor(Math.random()*this.state.optionarr.length);
        var optionForAlert= this.state.optionarr[value];
        this.setState(()=>({
            selectedOption: optionForAlert
        }))
    };
    HandleAddOption=(option)=>{
        this.setState((prevState)=>{
            return {
            optionarr: prevState.optionarr.concat(option)
        };
    });
    };
    HandleDltOption=(optionRemove)=>{
        console.log('hbd', optionRemove);
        this.setState((prevState)=>({
            optionarr: prevState.optionarr.filter((option)=>{
                return option !==optionRemove;
                })
        }))
    };
    ClearModal=()=>{
        this.setState(()=>({
            selectedOption: undefined
        }))
    }
    render(){
        
        return(
            <div>

            <Header></Header>
            <div className="container">
            <Action GivemeAct={this.ActionPerform} shouldDisplay={this.state.optionarr.length}></Action>
            <div className="widget">
            <OptionDisplay Optionlist={this.state.optionarr} deleteMe={this.DeleteOptions} HandleDltOption={this.HandleDltOption}></OptionDisplay>
            <AddOptions HandleAddOption={this.HandleAddOption}></AddOptions>
            </div>
            </div>
            <AddModal selectedOption={this.state.selectedOption} ClearModal={this.ClearModal}/>
            </div>
        )
    }
}
