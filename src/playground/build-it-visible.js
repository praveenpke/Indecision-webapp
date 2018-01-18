let visibility = false;


const toggleVisibility = () =>{
    visibility = !visibility;
    render();
};
const render = () =>{
    const jsx =(
            <div>
                <h1>Visibility Toggle</h1>
                <button>
                    {visibility ? 'Hide details' : 'Show details'}
                
                </button>
                {visibility && <p>Show the details </p>}

            </div>
    );

    ReactDOM.render(jsx, document.getElementById('app'));

};

render();