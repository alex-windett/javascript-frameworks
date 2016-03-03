import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

export default class TeamList extends React.Component {
    render() {

        var commentNode = this.props.data.map(function(member){

            return (
                <Member key={member.id} cat-id={member['bf-team-cat'][0]}>
                    <h2>{member.title.rendered}</h2>
                    <h4> {member.content.rendered}</h4>
                </Member>
            )
        });

        return (
            <ul classMame="comment__list">
                {commentNode}
            </ul>
        )
    }
};

var Member = React.createClass({

    render(){

        return (

            <div className="comment__item">
                <h2 className="author">{this.props.author}</h2>

                <li>
                    {this.props.children}
                </li>
            </div>
        )
    }
})
