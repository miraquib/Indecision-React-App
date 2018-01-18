import React from 'react';
import ReactDOM from 'react-dom';
import IndecisionApp from './components/IndecisionApp'
import 'normalize.css/normalize.css'
import './styles/style.scss'

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));

class OldSyntax {
    constructor() {
        this.name = 'Aqib'
        this.getGreetings = this.getGreetings.bind(this);
    }

    getGreetings() {
        return `Hi This is ${this.name}`;
    }
}

const oldSyntax = new OldSyntax();
const getGreetings = oldSyntax.getGreetings;
console.log(getGreetings());

class NewSyntax {
    name = 'Abass'

    getGreetings = () => {
        return `Hi This is ${this.name}`;
    }
}

const newSyntax = new NewSyntax();
const newGetGreetings = newSyntax.getGreetings;
console.log(newGetGreetings());