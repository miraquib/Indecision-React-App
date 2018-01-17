class ToggleVisibility extends React.Component {
  constructor(props) {
    super(props);
    this.handleToggleVisibility = this.handleToggleVisibility.bind(this);
    this.state = {
      visibility: false
    }
  }

  handleToggleVisibility(prevState) {
    this.setState( (prevState) => {
        return {
            visibility: !prevState.visibility
        }
    });
  }

  render() {
    return (
      <div>
          <h1>{'Visibility Toggle'}</h1>
          <button onClick= {handleToggleVisibility} >
            {this.state.visibility ? 'Hide Detials' : 'Show Details' }</button>
          {this.state.visibility && (
            <div>
                <p> Some Details </p>
            </div>
          )}
        </div>
    );
  }
}

ReactDOM.render(<ToggleVisibility />, document.getElementById('app')); 

// const appRoot = document.getElementById('app');

// let visibility = false;

// const onToggle = () => {
//     visibility = !visibility;
//     renderDomElements();
// }

// const renderDomElements = () => {
   
//      const template = (
//         <div>
//           <h1>{'Visibility Toggle'}</h1>
//           <button onClick= {onToggle} >{visibility ? 'Hide Detials' : 'Show Details' }</button>
//           {visibility && (
//             <div>
//                 <p> Some Details </p>
//             </div>
//           )}
//         </div>
//       );
         
//     ReactDOM.render(template, appRoot); 

//    }
   
//    renderDomElements();