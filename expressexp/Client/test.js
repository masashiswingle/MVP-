var React = require('react');
var ReactDom = require('react-dom');

var Test = React.createClass{{
	render: function(){
	return (
	<h1> hello world </h1>
	)
 }
}
ReactDOM.render(
	React.createElement(Test, document.getElementById('app'));
