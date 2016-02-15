import React from "react";
import ReactDOM from "react-dom";

// import Archives from "./pages/Archives";
// import Featured from "./pages/Featured";
// import Layout from "./pages/Layout";
// import Settings from "./pages/Settings";

var data = [
  {id: 1, name:"Alex", sport: "football"},
  {id: 2, name:"John", sport: "cricket"},
  {id: 3, name:"Pete", sport: "handball"},
  {id: 4, name:"Bob", sport: "cycling"},
  {id: 5, name:"Jim", sport: "rugby"},
];

const bfTeam = "http://www.9bar.com/wp-json/wp/v2/bf-team";

var CommentList = React.createClass({
    render() {

        var commentNode = this.props.data.map(function(member){
            return (
                <Comment key={member.id}>
                    <h2>{member.name}</h2>
                    <h4>{member.sport}</h4>
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
    render(){

        return (
            <div>
                <h2>This is the Comment Box</h2>
                <CommentList data={this.props.data}/>
                <CommentForm />
            </div>
        )
    }
})

ReactDOM.render(
    <CommentBox data={data}/>,
    document.getElementById('app')
)
