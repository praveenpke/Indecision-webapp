console.log('App.js is running');


//JSX - Javascript XML


const app={
    title: 'Indecision App',
    subtitle:'Put your life in the hands of a computer',
    options: []
};




//on form submit
const onFormSubmit = (e) =>{
    e.preventDefault();
    
    const option = e.target.elements.option.value;

    if (option){
        app.options.push(option);
        render();
        e.target.elements.option.value = '';
    }
}


//removing options from options array
const onRemoveAll =()=>{
    app.options=[];
    render();
}



//get element from html
const appRoot = document.getElementById('app');


//making decision
const onMakeDecision = () => {
    const randomNum = Math.floor(Math.random() * app.options.length);
    const option = app.options[randomNum];
    app.options.pop(option);
    render();
    alert(option);
};



//render app
const render =()=>{

    const template = (
        <div>
            <h1>{app.title}</h1>
            {app.subtitle && <p>{app.subtitle}</p>}
            <p>{app.options.length>0?'Here are your Options':'No Options'}</p>
            
            <button disabled={app.options.length===0} onClick={onMakeDecision}>What should I do?</button>

            <button onClick = {onRemoveAll}>Remove All</button>

           <ol>
                {
                    app.options.map((item) =>{
                        return <li key ={item}>{item}</li>;
                    })

                }       

           </ol>

            <form onSubmit={onFormSubmit}>
                    <input type="text" name="option"/>
                    <button>Add Option</button>

            </form>
        </div>
        );


    ReactDOM.render(template,appRoot);
}
 
render();