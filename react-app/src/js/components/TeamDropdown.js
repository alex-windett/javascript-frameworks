// import React from "react";
// import $ from 'jquery';
//
// var itemWrapper = React.createClass({
//
//     render(){
//         return (
//             <option>{this.props.data.id}</option>
//         )
//     }
// })
//
// var OptionList = React.createClass({
//
//     render() {
//
//         var listItem = this.props.data;
//
//         return (
//             <select>
//                 {listItem.map(function(item){
//                     return <option value={item.slug} key={item.id}>{item.name}</option>
//                 })}
//             </select>
//         )
//     }
// });
//
// // export default class TeamDropdown extends React.Component {
// //
// //     constructor(){
// //         super();
// //         this.state = {data: []};
// //     }
//
//     // loadCatagoryFromServer(){
//     //
//     //     $.ajax({
//     //         url: "http://9bar.alex.dev/wp-json/wp/v2/bf-team-cat",
//     //         dataType: 'json',
//     //         cache: false,
//     //         success: function(data) {
//     //             this.setState({data: data});
//     //         }.bind(this),
//     //         error: function(xhr, status, err) {
//     //             console.error(this.props.url, status, err.toString());
//     //         }.bind(this)
//     //
//     //     })
//     // }
//     //
//     // componentDidMount() {
//     //     // run function above
//     //     this.loadCatagoryFromServer();
//     // }
//
//     render() {
//
//         return (
//             <OptionList data={this.state.data}/>
//         )
//     }
// }
