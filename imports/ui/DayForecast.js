import React, { Component } from 'react';

export default class DayForecast extends Component {
    render() {
        return (
            <div className="col-sm">
                <div className="card">
                    <p className="lighter"> {this.props.report.date}</p>
                    <p className="top">{this.props.report.dayName}</p>
                    <img className="img-fluid imgSize" alt="Responsive image"
                         src={((this.props.report.status === 'Mostly sunny') || (this.props.report.status === 'Nice day')) ?
                             'https://cdn3.iconfinder.com/data/icons/summertime-1/44/summertime-03-512.png' :
                             (this.props.report.status.includes('shower') ?
                                 'https://png.pngtree.com/element_origin_min_pic/17/09/12/428b1c939011d9eeec9fd5372a838e87.jpg':
                                 (this.props.report.status.includes('colder') || this.props.report.status === 'Chilly' ?
                                     'https://cdn2.iconfinder.com/data/icons/coloured-weather-icon-set-svg/100/Coloured_Weather_Icon_Set_by_ViconsDesign-13-512.png':
                                     'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEfbFnsK7CcgmDF7qRyzMrRnAYPj5T0PV9KEDk3zwr3EcLG9U'))}/>
                    <div className={'baby'}>{this.props.report.minTemp}°C</div>
                    <p className="maxTemp">{this.props.report.maxTemp}°C</p>
                    <p className="bottom">{this.props.report.status}</p>
                </div>
            </div>
        );
    }
}