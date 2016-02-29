import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';

var itemWrapper = React.createClass({

    render(){
        return (
            <option>{this.props.data.id}</option>
        )
    }
})

var OptionList = React.createClass({

    change(event) {
        var a = this
        return (
            console.log(a)
        )
    },

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
});


var CommentList = React.createClass({
    render() {

        var commentNode = this.props.data.map(function(member){

            return (
                <Comment key={member.id} cat-id={member['bf-team-cat'][0]}>
                    <h2>{member.title.rendered}</h2>
                    <h4> {member.content.rendered}</h4>
                </Comment>
            )
        });

        return (
            <ul classMame="comment__list">
                {commentNode}
            </ul>
        )
    }
});

var CategoryList = React.createClass({
    render() {

        var categoryNode = this.props.data.map(function(catagory){
            console.log(catagory + 'adsadsa')
            return (
                <Comment key={catagory.id}>
                    <h2>{catagory.title.rendered}</h2>
                    <h4>{catagory.content.rendered}</h4>
                </Comment>
            )
        });

        return (
            <ul classMame="catagory__list">
                {categoryNode}
            </ul>
        )
    }
});

var CommentForm = React.createClass({

    render(){

        return (

            <div className="comment__form">
                This is the comment form
            </div>
        )
    }
})

var Comment = React.createClass({

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

export default class CommentBox extends React.Component {
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

    render() {
        return (

            <div className="commentBox">
                <OptionList data={this.state.catData} class="this-team-list" />

                <h2>This is the Comment Box</h2>
                <CommentList data={this.state.teamData} />
                <CommentForm />
            </div>
        );
    }
}
