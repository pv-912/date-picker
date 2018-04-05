import React from 'react';
import $ from 'jquery';
import {Function1} from '../utils/function';

var mobileSelect2 = Function1.MobileSelect({
    trigger: '#trigger1',
    title: '双项选择',
    wheels: [
                {data: weekdayArr},
                {data: timeArr}
            ],
    position:[1, 2],
    transitionEnd:function(indexArr, data){
        //console.log(data);
    },
    callback:function(indexArr, data){
        console.log(data);
    }
});

export default class HomeIndex extends React.Component{
	constructor(props) {
		super(props)
		this.state = {
			weekdayArr: ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'],
			timeArr = ['08:30','09:00','09:30','10:00','10:30','11:00','11:30','12:00','12:30','13:00','13:30','14:00','14:30','15:00','15:30','16:00','16:30','17:00','17:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00'],
			
		}
	}
	componentDidMount() {
		this.setState( prevState => {
			return {
				json: Contact
			}
		})
	}
    render(){
        return(
        	<div className="parentDiv">
        		<input type="text" id="trigger1" placeholder="Single Selection" />
            </div>
        )
    }
}