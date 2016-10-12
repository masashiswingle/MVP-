var UberPrice = require ('./bUberPrice') 
var LyftPrice = require ('./cLyftPrice') 

export default class PriceCompare extends React.Component{
	constructor(props){
	  super(props);	
	  this.state = {startPoint: startPoint, endPoint: endPoint}; 
	  this.handleSumbit = this.handleSubmit.bind(this)
	}
	handleSubmit(event){
		this.setState = {startPoint: event.startPoint, endPoint: event.endPoint}
		fetch ('http://127.0.0.1/data', {
 		 method: 'GET',
 		 
  	}).then((response) => {
  	//another get request with the cordinate 
		fetch ('http://127.0.0.1/fares', {
 		 method: 'GET',
    }
  }
}
};

render {
	return {
		<div>
			<UberPrice uberPrice = {this.state.uberPrice} low = {this.state.uberStatus}></UberPrice> 
			<LyftPrice lyftPrice = {this.state.lyftPrice} low = {this.state.lyftStatus}></LyftPrice>
		</div> 
	}
}