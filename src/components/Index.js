import React from 'react';
// import $ from 'jquery';
// import {Function1} from '../utils/function';
var months = ['January','Febuary','March','April','May','June','July','August','September','October','November','December'];
    	var daysInCurrMonth = 0;
      function daysInMonth(month, year) {
        return new Date(year, month, 0).getDate();
      }

      function populateDates(yeardropdown,monthdropdown,daydropdown){
        var today = new Date(),
            // day = today.getUTCDate(),
            month = today.getUTCMonth(),
            year = 1980,
            daysInCurrMonth = daysInMonth(month, year);

        // Year
        for(var i = 0; i < 80; i++){
          var opt = document.createElement('option');
          opt.value = i + year;
          opt.text = i + year;
          console.log(yeardropdown);
          yeardropdown.innerHTML = 'po';
          yeardropdown.appendChild(opt);
        }

        // Month
        for( i = 0; i < 12; i++){
           opt = document.createElement('option');
          opt.value = months[i];
          opt.text = months[i];
          monthdropdown.appendChild(opt);
        }

        // Day
        for( i = 0; i < daysInCurrMonth; i++){
           opt = document.createElement('option');
          opt.value = i + 1;
          opt.text = i + 1;
          daydropdown.appendChild(opt);
        }
      }

export default class HomeIndex extends React.Component{
	constructor(props) {
		super(props);
    this.state = {
    	date: 1,
    	month:'January',
    	year:1980 
    };
	populateDates(this.state.year,this.state.month,this.state.day);
	    this.handleChange = this.handleChange.bind(this);
	    this.handleSubmit = this.handleSubmit.bind(this);
	    
	  }

	  handleChange(event) {
	  	event.preventDefault();
	  	console.log(event);
	    	const value= event.target.value;
	    	const name = event.target.name;

	    this.setState({
	      [name]: value,
	    });
		let data = {
		            monthdropdown: this.state.month,
		            yeardropdown: this.state.year,
		            daydropdown: this.state.date,
		        }


	    var newMonth = months.indexOf(data.monthdropdown.value) + 1,
	        newYear = data.yeardropdown.value;
	    
	    daysInCurrMonth = daysInMonth(newMonth, newYear);

	    data.daydropdown.innerHTML = "";
	    for(var i = 0; i < daysInCurrMonth; i++){
	      var opt = document.createElement('option');
	      opt.value = i + 1;
	      opt.text = i + 1;
	      data.daydropdown.appendChild(opt);
	    }        
	  
	   populateDates(data.yeardropdown,data.monthdropdown,data.daydropdown);

	  }

	  handleSubmit(event) {
	    alert('A name was submitted: ' + this.state.value);
	    event.preventDefault();
	  }
    render(){
    	
        return(
        	<div className="parentDiv">
        		<div className="contain">
				    <div className="fixWidth">
				        <div className="nav">
				            <h1>mobileSelect Demo</h1>
				        </div>
				        <div className="demo">
            				<form action="" name="someform" onSubmit={this.handleSubmit}>
						      <select id="monthdropdown" value="this.state.month" onChange={this.handleChange}>Month</select> 
						      <select id="yeardropdown" value="this.state.year" onChange={this.handleChange}>Year</select> 
						      <select id="daydropdown" value="this.state.date" onChange={this.handleChange}>day</select> 
						      <input type="submit" value="Submit" placeholder="selectDate" />
						    </form>
				        </div>
				    </div>
				</div>
            </div>
        )
    }
}