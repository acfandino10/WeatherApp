var require = meteorInstall({"imports":{"api":{"forecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/api/forecast.js                                                           //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
module.export({
  Forecast: () => Forecast
});
let Mongo;
module.link("meteor/mongo", {
  Mongo(v) {
    Mongo = v;
  }

}, 0);
const Forecast = new Mongo.Collection('forecast');
///////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"DayForecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/ui/DayForecast.js                                                         //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
module.export({
  default: () => DayForecast
});
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);

class DayForecast extends Component {
  render() {
    return React.createElement("div", {
      className: "col-sm"
    }, React.createElement("div", {
      className: "card"
    }, React.createElement("p", {
      className: "lighter"
    }, " ", this.props.report.date), React.createElement("p", {
      className: "top"
    }, this.props.report.dayName), React.createElement("img", {
      className: "img-fluid imgSize",
      alt: "Responsive image",
      src: this.props.report.status === 'Mostly sunny' || this.props.report.status === 'Nice day' ? 'https://cdn3.iconfinder.com/data/icons/summertime-1/44/summertime-03-512.png' : this.props.report.status.includes('shower') ? 'https://png.pngtree.com/element_origin_min_pic/17/09/12/428b1c939011d9eeec9fd5372a838e87.jpg' : this.props.report.status.includes('colder') || this.props.report.status === 'Chilly' ? 'https://cdn2.iconfinder.com/data/icons/coloured-weather-icon-set-svg/100/Coloured_Weather_Icon_Set_by_ViconsDesign-13-512.png' : 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUEfbFnsK7CcgmDF7qRyzMrRnAYPj5T0PV9KEDk3zwr3EcLG9U'
    }), React.createElement("div", {
      className: 'baby'
    }, this.props.report.minTemp, "\xB0C"), React.createElement("p", {
      className: "maxTemp"
    }, this.props.report.maxTemp, "\xB0C"), React.createElement("p", {
      className: "bottom"
    }, this.props.report.status)));
  }

}
///////////////////////////////////////////////////////////////////////////////////////

},"MonthForecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/ui/MonthForecast.js                                                       //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 1);
let Forecast;
module.link("../api/forecast.js", {
  Forecast(v) {
    Forecast = v;
  }

}, 2);
let WeekForecast;
module.link("./WeekForecast.js", {
  default(v) {
    WeekForecast = v;
  }

}, 3);

class MonthForecast extends Component {
  renderDays() {
    return React.createElement("div", {
      className: "bottomPadding"
    }, React.createElement(WeekForecast, {
      min: 1,
      max: 7
    }), React.createElement(WeekForecast, {
      min: 8,
      max: 14
    }), React.createElement(WeekForecast, {
      min: 15,
      max: 21
    }), React.createElement(WeekForecast, {
      min: 22,
      max: 28
    }), React.createElement(WeekForecast, {
      min: 29,
      max: 31
    }));
  }

  render() {
    return React.createElement("div", null, React.createElement("div", {
      className: "row text-center theTitle"
    }, React.createElement("div", {
      className: "col-sm"
    }, "Month Forecast")), React.createElement("div", {
      className: "row"
    }, this.renderDays()));
  }

}

module.exportDefault(withTracker(() => {
  return {
    forecast: Forecast.find({}).fetch()
  };
})(MonthForecast));
///////////////////////////////////////////////////////////////////////////////////////

},"WeekForecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// imports/ui/WeekForecast.js                                                        //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
let React, Component;
module.link("react", {
  default(v) {
    React = v;
  },

  Component(v) {
    Component = v;
  }

}, 0);
let withTracker;
module.link("meteor/react-meteor-data", {
  withTracker(v) {
    withTracker = v;
  }

}, 1);
let Forecast;
module.link("../api/forecast.js", {
  Forecast(v) {
    Forecast = v;
  }

}, 2);
let DayForecast;
module.link("./DayForecast.js", {
  default(v) {
    DayForecast = v;
  }

}, 3);

class WeekForecast extends Component {
  renderDays() {
    return this.props.forecast.map((d, i) => i + 1 <= this.props.max && i + 1 >= this.props.min ? React.createElement(DayForecast, {
      key: d._id,
      report: d
    }) : null);
  }

  render() {
    return React.createElement("div", {
      className: "row"
    }, this.renderDays());
  }

}

module.exportDefault(withTracker(() => {
  return {
    forecast: Forecast.find({}).fetch()
  };
})(WeekForecast));
///////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////
//                                                                                   //
// client/main.js                                                                    //
//                                                                                   //
///////////////////////////////////////////////////////////////////////////////////////
                                                                                     //
let React;
module.link("react", {
  default(v) {
    React = v;
  }

}, 0);
let Meteor;
module.link("meteor/meteor", {
  Meteor(v) {
    Meteor = v;
  }

}, 1);
let render;
module.link("react-dom", {
  render(v) {
    render = v;
  }

}, 2);
let MonthForecast;
module.link("../imports/ui/MonthForecast.js", {
  default(v) {
    MonthForecast = v;
  }

}, 3);
Meteor.startup(() => {
  render(React.createElement(MonthForecast, null), document.getElementById("root"));
});
///////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");