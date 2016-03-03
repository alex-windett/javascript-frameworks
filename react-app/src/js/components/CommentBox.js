import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

import OptionList from './dropdown/OptionList'
import TeamList from './teamList/TeamList'


export default class TeamContainer extends React.Component {

    constructor(){
        super();
        this.state = {
            teamData: [],
            catData: []
        }
    }

    loadCommentsFromServer() {
        $.ajax({
            url: this.props.teamURL,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({teamData: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.teamURL, status, err.toString());
            }.bind(this)
        });

        $.ajax({
            url: this.props.catURL,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({catData: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.catURL, status, err.toString());
            }.bind(this)

        })
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    handleChange() {
        console.log('changed')
    }

    render() {
        return (

            <div className="commentBox">
                <OptionList onChange={this.handleChange} data={this.state.catData} class="this-team-list" />

                <h2>This is the Team List</h2>
                <TeamList data={this.state.teamData} />
            </div>
        );
    }
}
