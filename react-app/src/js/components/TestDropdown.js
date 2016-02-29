import React from 'react';

export default class TestDropdown extends React.Component {

    constructor(){
        super();
        this.state = Selected.initialCount
    }

    change(){
        this.setState({
            value: event.target.value
        })
    }

    render(){

        return (
            <div>
                <select onChange={this.change} value={this.state.value}>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                </select>

                <p>
                    {this.state.value}
                </p>
            </div>
        )
    }
}

var Selected = "select"

Selected.defaultProps = { initialCount: 'select' };
