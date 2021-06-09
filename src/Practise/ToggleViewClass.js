class Counter extends React.Component{
    constructor(props){
        super(props);
        
        this.ToggleView=this.ToggleView.bind(this);
        this.state={
            visibility: false,
            message: "",
            title:"show details"
        };
    }
    ToggleView(){
        
        this.setState((prevState)=>{
            if(prevState.visibility){
                return{
                    visibility: false,
                    message: "",
                    title: "show Details"
                };
            }
            else{
                return{
                    visibility: true,
                    message: "Hi you have clicked toggle view button !",
                    title: "Hide Details"
                };
            }
        });
        
    }
    
    render(){
        return(
            <div>
            <h1>Toggle Button</h1>
            
            <button onClick={this.ToggleView}>{this.state.title}</button>
            <h2>{this.state.message}</h2>
        </div>
        )
    }
}
var app=document.getElementById('approot');
ReactDOM.render(<Counter />, app);