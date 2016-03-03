import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

export default class CommentBox extends React.Component {

    constructor() {
        super()
    }

    change(event) {
        return (
            console.log('state: ' + this.state)
        )
    }

    render() {

        var listItem = this.props.data;

        return (
            <select onChange={this.change}>
                {listItem.map(function(item){
                    return <option value={item.slug} key={item.id}>{item.name}</option>
                })}
            </select>
        )
    }
};
