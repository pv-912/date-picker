import React from 'react';

import '../App.css';
import doctorData from './data.json';

export default class MainIndex extends React.Component{

    constructor() {
        super();
        this.state = {
            set:false,
            date:"",
            recentDate:"",
            month:"",
            recentMonth:"",
            time:"",
            recentTime:"",
            slot:"",
            recentSlot:"",
            err:"",
        }
    }

    componentDidMount() {
        let doctorSlots = doctorData.available_slots.map((data, i) => {
            data.value = data.date;
            if (data.date_slots.length > 0) {
                data.id = i + "-date";            
                data.childs = data.date_slots.map((data, j) => {
                    data.id = i + "-" + j + "-date-slot";
                    data.value = data.hour;
                    if (data.hour_slots.length > 0) {
                        data.childs = data.hour_slots.map((data, k) => {
                            for ( let prop in data) {
                                data.value = prop;
                            }
                            data.id = i + "-" + j + "-" + k + "-hour-slot";
                            return data
                        })
                    }
                    return data
                })
            } else {
                data.id = "no_slot_day";
                data.childs = [{
                    value:"No slots available on this date",
                    id:"no_slots"
                }]
            }
            return data
        });

        let month = ['jan','feb', 'march', 'april', 'may', 'june', 'july'];
        
        new window.MobileSelect({
            trigger: '#a',
            title: doctorData.title,
            cascade: true,
            wheels: [{
              data:doctorSlots}
            ],
            transitionEnd:(indexArr, data) => {
                if (data["2"]) {
                    this.setState({
                        recentDate:data["0"].value,
                        recentTime:data["1"].value,
                        recentSlot:data["2"].value
                    });
                } else if(data["1"]) {
                    this.setState({
                        recentDate:data["0"].value,
                        recentTime:data["1"].value,
                        recentSlot:""
                    });
                } else if(data["0"]) {
                    this.setState({
                        recentDate:data["0"].value,
                        recentTime:"",
                        recentSlot:""
                    });
                }
            },
            callback: (indexArr, data) => {
                if (data["2"] && !this.state.set) {
                    this.setState({
                        err:"",
                        set:true,
                        date:data["0"].value,
                        time:data["1"].value,
                        slot:data["2"].value
                    });
                } else if (this.state.set) {
                    this.setState({err: ''});
                } else {
                    this.setState({err: 'Please Select The Date'});
                }
                
            }
        });
    }

    render() {
        return(
            <div >
                <div id="selectedDate" className="drum" >
                	Drum Scroller<br/>
                </div>
                <div id="selectedError" className="error">
                    {this.state.err}
                </div>
                <div id="selectedDate" className="date" >
                    {this.state.set ? (this.state.date +" "+ this.state.slot) : " "}
                </div>
                <input type="text" className="hidden" id="a" />

            </div>
        )
    }
}