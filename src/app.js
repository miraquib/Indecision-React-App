class IndecisionApp extends React.Component {
    render() {
        const title = 'Indecision';
        const subTitle = 'Put your life in the hands of a computer.';
        const options = ['1','2','3'];

        return (
            <div>
                <Header title={title} subTitle={subTitle} />
                <Action />
                <Options options={options} />
                <AddOption />
            </div>
        );
    }
}

class Header extends React.Component {
    render() {
       return (
            <div>
                <h1>{this.props.title}</h1>
                <h2>{this.props.subTitle}</h2>
            </div>
       ); 
    }
}

class Action extends React.Component {
    handleRequest() {
        alert('Handle Request Clicked');
    }
    
    render() {
        return (
             <div>
                 <button onClick={this.handleRequest}>What should I do? </button>
             </div>
        ); 
     }
}

class Options extends React.Component {
    handleRemoveAll() {
        alert('Remove all clicked');
    }    
    
    render() {
        return (
             <div>
                 <p>Number of Options: {this.props.options.length}</p>
                 <button onClick={this.handleRemoveAll}> Remove All </button>
                {
                    this.props.options.map((option, index) => 
                                <Option key={index} optionText={option} /> )
                }
             </div>
        ); 
     }
}

class AddOption extends React.Component {
    handleAddOption(e) {
        e.preventDefault();

        const option = e.target.elements.option.value.trim();

        if(option) {
            alert(option);
        }
    }
    
    render () {
        return (
            <div>
            <form onSubmit={this.handleAddOption}>
                <input type="text" name="option"/>
                <button>Add option</button>
            </form>
            </div>
        );
    }
}

class Option extends React.Component {
    
    render() {
        return (
             <div>
                 <p>{this.props.optionText}</p>
             </div>
        ); 
     }
}

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));