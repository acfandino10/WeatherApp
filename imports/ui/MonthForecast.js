import React, { Component } from "react";
import { withTracker } from 'meteor/react-meteor-data';

import { Forecast } from '../api/forecast.js';
import WeekForecast from "./WeekForecast.js";

class MonthForecast extends Component {

    renderDays() {
        return (
            <div className="bottomPadding">
                <WeekForecast min={1} max={7} />
                <WeekForecast min={8} max={14}/>
                <WeekForecast min={15} max={21}/>
                <WeekForecast min={22} max={28}/>
                <WeekForecast min={29} max={31}/>
            </div>
        );
    }

    render() {
        return (
            <div>
                <div className="row text-center theTitle">
                    <div className="col-sm">
                        Month Forecast
                    </div>
                </div>
                <div className="row">
                    {this.renderDays()}
                </div>
            </div>
        );
    }
}

export default withTracker(() => {
    return {
        forecast: Forecast.find({}).fetch(),
    };
})(MonthForecast);