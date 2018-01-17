class Counter extends React.Component {
    constructor(props) {
        super(props);
        this.handleAddOne = this.handleAddOne.bind(this);
        this.handleMinusOne = this.handleMinusOne.bind(this);
        this.handleReset = this.handleReset.bind(this);
        this.state = {
            count: 0
        }
    }

    componentDidMount() {
        try {
            const number = parseInt(localStorage.getItem('count'), 10);

            if(number !== NaN) {
                this.setState( () => ({ count: number}));
            }
x   
        } catch(e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
       if(prevState.count !== this.state.count) {
            localStorage.setItem('count', this.state.count);
       }
    }
    
    handleAddOne(count) {
        this.setState( (prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    handleMinusOne(count) {
        this.setState( (prevState) => {
            return {
                count: prevState.count - 1
            }
        });
    }

    handleReset(count) {
        this.setState( () => {
            return {
                count: 0
            }
        });
    }
    
    render () {
        return (
            <div>
                 <h1>Count: {this.state.count}</h1>
                 <button onClick={this.handleAddOne}>+1</button>
                 <button onClick={this.handleMinusOne}>-1</button>
                 <button onClick={this.handleReset}>reset</button>
             </div>
        );
    }
}


ReactDOM.render(<Counter />, document.getElementById('app')); 

// let count = 0;
// const addOne = () => {
//     count++;
//     renderDomElements();
// };
// const minusOne = () => {
//     count--;
//     renderDomElements();
// };
// const reset = () => {
//     count = 0;
//     renderDomElements();
// };
// const appRoot = document.getElementById('app');

// const renderDomElements = () => {
   
//  const templateTwo = (
//         <div>
//           <h1>Count: {count}</h1>
//           <button onClick={addOne}>+1</button>
//           <button onClick={minusOne}>-1</button>
//           <button onClick={reset}>reset</button>
//         </div>
//       );
      
//   ReactDOM.render(templateTwo, appRoot);   
// }

// renderDomElements();