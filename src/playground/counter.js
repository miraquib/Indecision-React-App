let count = 0;
const addOne = () => {
    count++;
    renderDomElements();
};
const minusOne = () => {
    count--;
    renderDomElements();
};
const reset = () => {
    count = 0;
    renderDomElements();
};
const appRoot = document.getElementById('app');

const renderDomElements = () => {
   
 const templateTwo = (
        <div>
          <h1>Count: {count}</h1>
          <button onClick={addOne}>+1</button>
          <button onClick={minusOne}>-1</button>
          <button onClick={reset}>reset</button>
        </div>
      );
      
  ReactDOM.render(templateTwo, appRoot);   
}

renderDomElements();