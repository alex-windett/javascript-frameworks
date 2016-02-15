import React from "react";

const bfTeam    = "http://www.9bar.com/wp-json/wp/v2/bf-team";
const bfTeamCat = "http://www.9bar.com/wp-json/wp/v2/bf-team-cat";

var CommentList = React.createClass({
    render() {

        var commentNode = this.props.data.map(function(member){
            const bfTeamCat = "http://www.9bar.com/wp-json/wp/v2/bf-team-cat";

            return (
                <Comment key={member.id}>
                    <h2>{member.title.rendered}</h2>
                    <h4>{member.content.rendered}</h4>
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

var CommentBox = React.createClass({
    loadCommentsFromServer: function() {
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
    },

    // loadCatagoryFromServer() {
    //     $.ajax({
    //         url: "http://www.9bar.com/wp-json/wp/v2/bf-team-cat",
    //         dataType: 'json',
    //         cache: false,
    //         success: function(data) {
    //             this.setState({data: data});
    //         }.bind(this),
    //         error: function(xhr, status, err) {
    //             console.error(bfTeamCat, status, err.toString());
    //         }.bind(this)
    //     })
    // },

    getInitialState: function() {
        return {data: []};
    },

    componentDidMount: function() {
        this.loadCommentsFromServer();
        // this.loadCatagoryFromServer();
    },

    render: function() {
        return (
            <div className="commentBox">
                <h2>This is the Comment Box</h2>
                <CommentList data={this.state.data} />
                <CommentForm />
            </div>
        );
    }
});
