console.log('app.js is running')
const product = {
    title: 'Indecision App',
    subtitle: 'Put your life in the hands of a computer',
    options: []
  };
  
  const onFormSubmit = (e) => {
    e.preventDefault();
  
    const option = e.target.elements.option.value;
  
    if (option) {
      product.options.push(option);
      e.target.elements.option.value = '';
      renderApp();
    }
  };
  const RemoveAll=()=>{
      product.options=[];
      renderApp();
  }
const app= document.getElementById('approot');
const renderApp= () =>{
    const element=(
        <div>
            <h1>Toggle Button</h1>
            <h2>{product.options.length}</h2>
            <form onSubmit = {onFormSubmit}>
            <input type="text" name="option"/>
             <button>Add Option</button>
             <button onClick={RemoveAll}>Remove ALL</button>
             <ol>
             {
                product.options.map((option)=>{
                    return <li key={option}>Option:{option}</li>;
                })
             }
             </ol>
             </form>

        </div>
    );
   ReactDOM.render(element, app);
};

renderApp();