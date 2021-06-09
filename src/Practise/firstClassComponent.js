class IndesionApp extends React.Component{
    render(){
        var optionarr=["option1", "option2", "option3", "option4"]
        return(
            <div>
            <Header></Header>
            <Action></Action>
            <OptionDisplay Optionlist={optionarr}></OptionDisplay>
            <AddOptions></AddOptions>
            </div>
        )
    }
}
class Header extends React.Component{
render(){
    return(
        <div>
        <h1>Indisive App</h1>
        <h2>Be ready to dive into whole new world of computers</h2>
        </div>
    );
}
}
class Action extends React.Component{
    render(){
        return(
            <div>
            <h1>Add New Action</h1>
            </div>
        )
    }
}

class Options extends React.Component{
    constructor(){
        super();
        this.options=["Option1", "Option2"];
    }
    render(){
        return(
            <div>
            {
                this.options.map((option)=>(<h3 key={option}>{option}</h3>))
            }
            </div>
        )
    }
}
class OptionDisplay extends React.Component{
    render(){
        console.log(this.props.Optionlist.length);
        return(
            <div>
            <h1>Display My options</h1>
           {
               this.props.Optionlist.map((o)=>(<p key={o}>{o}</p>))
           }
            <Options></Options>
            </div>
        );
    }
}
class AddOptions extends React.Component{
    OnSubmitForm(e){
        e.preventDefault();
        var optionentered= e.target.elements.addOption.value;
        if(optionentered){
            alert('optionentered is Present')
        }
    }
    render(){
       
        return(
            <div>
            <form onSubmit={this.OnSubmitForm}>
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
    <Options></Options>
    <AddOptions></AddOptions>
    </div>
);

ReactDOM.render(<IndesionApp />, appcomp);