import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header'
import Action from './Action'
import Options from './Options'
import AddOption from './AddOption'
import OptionModal from './OptionModal';

export default class IndecisionApp extends React.Component {
    constructor(props) {
        super(props);
        this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
        this.handlePick = this.handlePick.bind(this);
        this.handleAddOption = this.handleAddOption.bind(this);
        this.handleDeleteOption = this.handleDeleteOption.bind(this);
        this.handleModalButton = this.handleModalButton.bind(this);
        this.state = {
            options: [],
            selectedOption: undefined
        }
    }

    componentDidMount() {
        try {
            const json = localStorage.getItem('options');
            const options = JSON.parse(json);

            if(options) {
                this.setState( () => ({ options: options}));
            }

        } catch(e) {
            // Do nothing
        }
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevState.options.length !== this.state.options.length) {
            const json = JSON.stringify(this.state.options);
            localStorage.setItem('options', json);
        }
    }

    componentWillUnmount() {

    }

    handleDeleteOptions() {
        this.setState(() => ({ options: [] }));
    }

    handleDeleteOption(optionToRemove) {
        this.setState((prevState) => ({
            options: prevState.options.filter((option) => {
                return optionToRemove !== option;
            })
        }));
    }

    handlePick() {
        const randomNum = Math.floor(Math.random() * this.state.options.length);
        const option = this.state.options[randomNum];
        this.setState(() => ({ selectedOption: option }));
    }

    handleAddOption(option) {
        if (!option) {
            return 'Enter a valid item to add to the option list';
        } else if (this.state.options.indexOf(option) > -1) {
            return 'The item already exists in the option list';
        }

        this.setState((prevState) => {
            return {
                options: prevState.options.concat([option])
            }
        });
    }

    handleModalButton() {
        this.setState(() => ({ selectedOption: undefined }));
    }

    render() {
        const subTitle = 'Put your life in the hands of a computer.';

        return (
            <div>
                <Header subTitle={subTitle} />
                <div className="container">
                    <Action
                        hasOptions={this.state.options.length > 0}
                        handlePick={this.handlePick}
                    />
                    <div className="widget">
                        <Options
                            options={this.state.options}
                            handleDeleteOptions={this.handleDeleteOptions}
                            handleDeleteOption={this.handleDeleteOption}
                        />
                        <AddOption
                            handleAddOption={this.handleAddOption}
                        />
                    </div>
                </div>
                <OptionModal 
                    selectedOption={this.state.selectedOption}
                    handleModalButton={this.handleModalButton}
                />
            </div>
        );
    }
}
