import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import DayForecast from "./DayForecast.js";

class WeekForecast extends Component {

    renderDays() {
        return this.props.forecast.map((d,i) => (
            ( (i+1 <= this.props.max) && (i+1 >= this.props.min) ) ? <DayForecast key={d._id} report={d} /> : null
        ));
    }

    render() {
        return (
                <div className="row">
                    {this.renderDays()}
                </div>
        );
    }
}

export default withTracker(() => {
    return {
        forecast: Forecast.find({}).fetch(),
    };
})(WeekForecast);