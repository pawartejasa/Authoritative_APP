class Counter extends React.Component{
    constructor(props){
        super(props);
        
        this.Addone=this.Addone.bind(this);
        this.Subtract=this.Subtract.bind(this);
        this.Reset=this.Reset.bind(this);
        this.state={
            count: 0
        };
    }
    Addone(){
        
        this.setState((prevState)=>{
            return {
                count: prevState.count +1
            };
        });
        
    }
    Subtract(){
        console.log(this.state.count);
        this.setState((prevState)=>{
            if(prevState.count>0)
            return {
                count: prevState.count -1
            };
        });
    }
    Reset(){
        console.log(this.state.count);
        this.setState((prevState)=>{
            if(prevState.count>0)
            return {
                count: 0
            };
        });
        
    }
    render(){
        return(
            <div>
            <h1>Counter:{this.state.count}</h1>
            <button onClick={this.Addone}>ADD 1</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={this.Subtract}>Subtract 1</button>
            &nbsp; &nbsp; &nbsp;
            <button onClick={this.Reset}>Reset</button>
            </div>
        )
    }
}
var app=document.getElementById('approot');
ReactDOM.render(<Counter />, app);