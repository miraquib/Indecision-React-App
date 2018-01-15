const appRoot = document.getElementById('app');

let visibility = false;

const onToggle = () => {
    visibility = !visibility;
    renderDomElements();
}

const renderDomElements = () => {
   
    const template = (
        <div>
          <h1>{'Visibility Toggle'}</h1>
          <button onClick= {onToggle} >{visibility ? 'Hide Detials' : 'Show Details' }</button>
          {visibility && (
            <div>
                <p> Some Details </p>
            </div>
          )}
        </div>
      );
         
    ReactDOM.render(template, appRoot); 

   }
   
   renderDomElements();