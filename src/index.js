var moment = require('momentjs');

var Moment = function() {
  this.evaluate = function() {
    return moment().format(this.format);
  };
  this.title = function() {
    return "Moment JS";
  };
};


Moment.identifier = "me.kjones.momentjs";
Moment.title = "Moment JS";
Moment.inputs = [
	InputField("format", "Format", "String", {persisted: true, placeholder: "Moment JS Format"})
];

registerDynamicValueClass(Moment);
