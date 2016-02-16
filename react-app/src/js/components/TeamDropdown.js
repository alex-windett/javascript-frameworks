import React from "react";
import $ from 'jquery';

export default class TeamDropdown extends React.Component {

    constructor(){
        super();
        this.state = {data: []};
    }

    loadCatagoryFromServer(){

        $.ajax({
            url: "http://9bar.alex.dev/wp-json/wp/v2/bf-team-cat",
            dataType: "JSON",
            cahce: false,
            success: function(data){
                console.log('success! ')
                console.log(data)
            }.bind(this),
            error: function(xhr, status, err){
                console.error('error: ', xhr, status, err.toString());
            }.bind(this)

        })
    }

    componentDidMount() {
        this.loadCatagoryFromServer();
    }

    render() {

        return (
            <select>
                <option value="cycling">Cycling</option>
                <option value="running">Running</option>
                <option value="climbing">Climbing</option>
                <option value="team-gb">Team GB</option>
            </select>
        )
    }
}
