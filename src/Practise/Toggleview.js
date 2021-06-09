var option=true;
var display= "show details";
var message= "";
var ToggleView=()=>{
    if(option){
        display="hide details";
        console.log(option);
        option=false;
        message= "hi I am visble";
        renderApp();
    }
    else{
        display="show details";
        console.log(option);
        option=true;
        message= "";
        renderApp();
    }
    
}
const app= document.getElementById('approot');
const renderApp= () =>{
    const element=(
        <div>
            <h1>Toggle Button</h1>
            
            <button onClick={ToggleView}>{display}</button>
            <h2>{message}</h2>
        </div>
    );
   ReactDOM.render(element, app);
};

renderApp();