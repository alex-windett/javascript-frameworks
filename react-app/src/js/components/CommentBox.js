import React from "react";
import ReactDOM from "react-dom";
import $ from 'jquery';


var CommentList = React.createClass({
    render() {

        var commentNode = this.props.data.map(function(member){

            return (
                <Comment key={member.id}>
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
        this.state = {data: []}
    }

    loadCommentsFromServer() {
        $.ajax({
            url: this.props.url,
            dataType: 'json',
            cache: false,
            success: function(data) {
                this.setState({data: data});
            }.bind(this),
            error: function(xhr, status, err) {
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
    }

    componentDidMount() {
        this.loadCommentsFromServer();
    }

    render() {
        return (
            <div className="commentBox">
                <h2>This is the Comment Box</h2>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
}
