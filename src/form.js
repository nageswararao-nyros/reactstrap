import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';
//import dataValidate from './components/dataValidate.js'

class Form extends Component{

	constructor(props){
		super(props);

		this.state ={
			name:'',
			rollNumber:'',
			phoneNumber:'',
			sport:''
		}

		this.handleChange = this.handleChange.bind(this);
    	this.handleSubmit = this.handleSubmit.bind(this);

	}

		handleChange(event) {


			if (event.target.name === 'name') {
				this.setState({ 'name': event.target.value });
			}
			if (event.target.name === 'rollNumber') {
				this.setState({ 'rollNumber': event.target.value });
			}
			if (event.target.name === 'phoneNumber') {
				this.setState({ 'phoneNumber': event.target.value });
			}
			if (event.target.name === 'sport') {
				this.setState({ 'sport': event.target.value });
			}
	 
  		}

  		handleSubmit(event) {
    	
    	var data ={
    		name:this.state.name,
    		rollNumber:this.state.rollNumber,
    		phoneNumber:this.state.phoneNumber,
    		sport:this.state.sport
    	}
    	console.log(data)
    	event.preventDefault();


 		 }

	render(){

		var tableStyle = {
				padding:'10px',
				margin:'5px',
				color:'red',

			};

			var btnStyle ={
				'backgroundColor':'green',
				padding:'10px',
				color:'white',
				outline:'none',
				'borderRadius':'10px',
				border:'none'
			};

		return(
			
			
			<div align="center"><h1>Welcome to sports-competition</h1>

			<form onSubmit={this.handleSubmit}>

				<table style={tableStyle}>

				<tbody>
					<tr>
						<td>Name of the Student:</td>
						<td><input type = "text" placeholder = "Name here" name= "name" onChange={this.handleChange}/></td>
					</tr>
					<tr>
						<td>Roll number:</td>
						<td><input type = "text" placeholder = "Roll-number here" name= "rollNumber" onChange={this.handleChange}/></td>
					</tr>
					<tr>
						<td>Phone number:</td>
						<td><input type = "text" placeholder = "Phone number here" name="phoneNumber" onChange={this.handleChange}/></td>
					</tr>
					<tr>
						<td>Interest of Sports</td>
						<td><input type = "text" placeholder = "sports name here" name="sport" onChange={this.handleChange}/></td>
					</tr>

					<tr>
					<td colSpan="2" align="center"><input type="submit" style={btnStyle} value ="participate"/></td>
					</tr>
					</tbody>
				</table>
				</form>

			</div>


		)
	}

}
export default Form;