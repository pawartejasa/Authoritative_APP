class IndesionApp extends React.Component{
    constructor(props){
        super(props);
        this.DeleteOptions=this.DeleteOptions.bind(this);
        this.HandleAddOption=this.HandleAddOption.bind(this);
        this.ActionPerform=this.ActionPerform.bind(this);
        this.HandleDltOption=this.HandleDltOption.bind(this);
        this.state={
            optionarr: ["option1", "option2", "option3", "option4"]
        };
    }
    DeleteOptions(){
        this.setState(()=>{
            return{
                optionarr: []
            };
        });
    }
    ActionPerform(){
        var value=Math.floor(Math.random()*this.state.optionarr.length);
        var optionForAlert= this.state.optionarr[value];
        alert(optionForAlert);
    }
    HandleAddOption(option){
        this.setState((prevState)=>{
            return {
            optionarr: prevState.optionarr.concat(option)
        };
    });
    }
    HandleDltOption(optionRemove){
        console.log('hbd', optionRemove);
        this.setState((prevState)=>({
            optionarr: prevState.optionarr.filter((option)=>{
                return option !==optionRemove;
                })
        }))
    }
    render(){
        
        return(
            <div>
            <Header></Header>
            <Action GivemeAct={this.ActionPerform} shouldDisplay={this.state.optionarr.length}></Action>
            <OptionDisplay Optionlist={this.state.optionarr} deleteMe={this.DeleteOptions} HandleDltOption={this.HandleDltOption}></OptionDisplay>
            <AddOptions HandleAddOption={this.HandleAddOption}></AddOptions>
            </div>
        )
    }
}
const Header=()=>{

    return(
        <div>
        <h1>Indisive App</h1>
        <h2>Be ready to dive into whole new world of computers</h2>
        </div>
    );
}
class Action extends React.Component{
    
    render(){
        return(
            <div>
            <button onClick={this.props.GivemeAct} disabled={!this.props.shouldDisplay}>What Should I Do?</button>
            </div>
        )
    }
}

const OptionDisplay=(props)=>{

        return(
            <div>
            <h1>Display My options</h1>
           {
               props.Optionlist.map((o)=>(
                   
                  <Tasks key={o} taskToDo={o} HandleDltOption={props.HandleDltOption}></Tasks>
                   ))
                
           }
            <button onClick={props.deleteMe}>Delete All</button>
            </div>
        );
    
}
const Tasks=(props)=>{
    return(
        <div>
        
        <h3>{props.taskToDo}</h3>
        <button onClick={(option)=>{props.HandleDltOption(props.taskToDo)}}>Remove This</button>
        </div>
    );
}
class AddOptions extends React.Component{
    constructor(props){
        super(props);
        this.HandleAddOption=this.HandleAddOption.bind(this);

    }
    HandleAddOption(e){
        e.preventDefault();
        var optionentered= e.target.elements.addOption.value.trim();
        if(optionentered){
            this.props.HandleAddOption(optionentered);
            e.target.elements.addOption.value='';
        }
    }
    render(){
       
        return(
            <div>
            <form onSubmit={this.HandleAddOption}>
            <input type="text" name="addOption" />
            <button>Click This to add new Option</button>
            </form>
            <div>
            
            
            </div>
            </div>
        )
    }
}
const appcomp=document.getElementById('approot');
const element=(
    <div>
    <Header></Header>
    <Action></Action>
  
    <AddOptions></AddOptions>
    </div>
);

ReactDOM.render(<IndesionApp />, appcomp);