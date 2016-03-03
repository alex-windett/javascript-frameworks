import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

import TeamContainer from './components/CommentBox.js';


const bfTeam    = "http://www.9bar.com/wp-json/wp/v2/bf-team";
const bfTeamCat = "http://www.9bar.com/wp-json/wp/v2/bf-team-cat";

// <TeamContainer teamURL='http://www.9bar.com/wp-json/wp/v2/bf-team' catURL="http://www.9bar.com/wp-json/wp/v2/bf-team-cat"/>

var TeamSelector = React.createClass({
    getInitialState:function(){
        return {
            selectValue:'ultra-running',
            catData: [],
            teamData: []
        };
    },
    handleChange:function(e){

        // On change set the state to the selected value from dropdown
        this.setState({
            selectValue:e.target.value
        }, function(){
            // React does not immediately mutate the state, so ajax must be called once it has completed

            // Create an ajaz request with the selected values slug as the filter
            let url = 'http://www.9bar.com/wp-json/wp/v2/bf-team?filter[bf-team-cat]=' + this.state.selectValue
            $.ajax({
                url: url,
                dataType: 'json',
                cache: false,
                success: function(data) {
                    this.setState({
                        teamData: data
                    });
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(url, status, err.toString());
                }.bind(this)

            });
        });
    },

    loadCommentsFromServer() {

        // Load all the catagaries for the dropdown
        $.ajax({
            url: 'http://www.9bar.com/wp-json/wp/v2/bf-team-cat',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({catData: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('http://www.9bar.com/wp-json/wp/v2/bf-team-cat', status, err.toString());
            }.bind(this)
        })

        // Load all the team to populat the page on laod
        $.ajax({
            url: 'http://www.9bar.com/wp-json/wp/v2/bf-team',
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({teamData: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error('http://www.9bar.com/wp-json/wp/v2/bf-team', status, err.toString());
            }.bind(this)

        })
    },

    componentDidMount() {
        this.loadCommentsFromServer();
    },

    render() {
        var message='You selected '+this.state.selectValue;
        var cats = this.state.catData;
        const members = this.state.teamData

        var singleData = cats.map(function(item){
            return (
                <option value={item.slug} key={item.id}>{item.name}</option>
            )
        })

        let number = 0;
        const teamList = members.map(function(member){
            number++;

            return (
                <article key={number++}>
                    <h1>{member.title.rendered}</h1>
                    <p>{member.content.rendered}</p>
                </article>
            )

        });

        return (
            <div>
                <select
                value={this.state.selectValue}
                onChange={this.handleChange}>
                    {singleData}
                </select>

                <p>{message}</p>

                <div>
                    {teamList}
                </div>
            </div>
        );
    }
});

ReactDOM.render(
    <TeamSelector name="World" />,
    document.getElementById('app')
)
