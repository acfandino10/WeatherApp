var require = meteorInstall({"imports":{"api":{"forecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// imports/api/forecast.js                                                                               //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
module.export({
  Forecast: function () {
    return Forecast;
  }
});
var Mongo;
module.link("meteor/mongo", {
  Mongo: function (v) {
    Mongo = v;
  }
}, 0);
var Forecast = new Mongo.Collection('forecast');
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}},"ui":{"DayForecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// imports/ui/DayForecast.js                                                                             //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

module.export({
  "default": function () {
    return DayForecast;
  }
});
var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);

var DayForecast =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(DayForecast, _Component);

  function DayForecast() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = DayForecast.prototype;

  _proto.render = function () {
    function render() {
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

    return render;
  }();

  return DayForecast;
}(Component);
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"MonthForecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// imports/ui/MonthForecast.js                                                                           //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 1);
var Forecast;
module.link("../api/forecast.js", {
  Forecast: function (v) {
    Forecast = v;
  }
}, 2);
var WeekForecast;
module.link("./WeekForecast.js", {
  "default": function (v) {
    WeekForecast = v;
  }
}, 3);

var MonthForecast =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(MonthForecast, _Component);

  function MonthForecast() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = MonthForecast.prototype;

  _proto.renderDays = function () {
    function renderDays() {
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

    return renderDays;
  }();

  _proto.render = function () {
    function render() {
      return React.createElement("div", null, React.createElement("div", {
        className: "row text-center theTitle"
      }, React.createElement("div", {
        className: "col-sm"
      }, "Month Forecast")), React.createElement("div", {
        className: "row"
      }, this.renderDays()));
    }

    return render;
  }();

  return MonthForecast;
}(Component);

module.exportDefault(withTracker(function () {
  return {
    forecast: Forecast.find({}).fetch()
  };
})(MonthForecast));
///////////////////////////////////////////////////////////////////////////////////////////////////////////

},"WeekForecast.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// imports/ui/WeekForecast.js                                                                            //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

var _inheritsLoose2 = _interopRequireDefault(require("@babel/runtime/helpers/inheritsLoose"));

var React, Component;
module.link("react", {
  "default": function (v) {
    React = v;
  },
  Component: function (v) {
    Component = v;
  }
}, 0);
var withTracker;
module.link("meteor/react-meteor-data", {
  withTracker: function (v) {
    withTracker = v;
  }
}, 1);
var Forecast;
module.link("../api/forecast.js", {
  Forecast: function (v) {
    Forecast = v;
  }
}, 2);
var DayForecast;
module.link("./DayForecast.js", {
  "default": function (v) {
    DayForecast = v;
  }
}, 3);

var WeekForecast =
/*#__PURE__*/
function (_Component) {
  (0, _inheritsLoose2.default)(WeekForecast, _Component);

  function WeekForecast() {
    return _Component.apply(this, arguments) || this;
  }

  var _proto = WeekForecast.prototype;

  _proto.renderDays = function () {
    function renderDays() {
      var _this = this;

      return this.props.forecast.map(function (d, i) {
        return i + 1 <= _this.props.max && i + 1 >= _this.props.min ? React.createElement(DayForecast, {
          key: d._id,
          report: d
        }) : null;
      });
    }

    return renderDays;
  }();

  _proto.render = function () {
    function render() {
      return React.createElement("div", {
        className: "row"
      }, this.renderDays());
    }

    return render;
  }();

  return WeekForecast;
}(Component);

module.exportDefault(withTracker(function () {
  return {
    forecast: Forecast.find({}).fetch()
  };
})(WeekForecast));
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},"client":{"main.js":function(require,exports,module){

///////////////////////////////////////////////////////////////////////////////////////////////////////////
//                                                                                                       //
// client/main.js                                                                                        //
//                                                                                                       //
///////////////////////////////////////////////////////////////////////////////////////////////////////////
                                                                                                         //
var React;
module.link("react", {
  "default": function (v) {
    React = v;
  }
}, 0);
var Meteor;
module.link("meteor/meteor", {
  Meteor: function (v) {
    Meteor = v;
  }
}, 1);
var render;
module.link("react-dom", {
  render: function (v) {
    render = v;
  }
}, 2);
var MonthForecast;
module.link("../imports/ui/MonthForecast.js", {
  "default": function (v) {
    MonthForecast = v;
  }
}, 3);
Meteor.startup(function () {
  render(React.createElement(MonthForecast, null), document.getElementById("root"));
});
///////////////////////////////////////////////////////////////////////////////////////////////////////////

}}},{
  "extensions": [
    ".js",
    ".json",
    ".html",
    ".css"
  ]
});

var exports = require("/client/main.js");