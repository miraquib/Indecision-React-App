import React from 'react';
import ReactDOM from 'react-dom';
import Options from './Options'

const Option = (props) => {
    return (
        <div>
            {props.optionText}
            <button
                onClick={(e) => {
                    props.handleDeleteOption(props.optionText);
                }}
            >
            Remove
           </button>
        </div>
);
}
export default Option;


