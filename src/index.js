var moment = require('momentjs');

var MomentJSValue = function() {
  this.evaluate = function() {
    return moment().format(this.format);
  };
  this.title = function() {
    return "Moment JS";
  };
  this.text = function() {
    return this.format;
  };
};


MomentJSValue.identifier = "io.kjones.PawExtensions.MomentJSDynamicValue";
MomentJSValue.title = "Moment JS Format";
MomentJSValue.inputs = [
	InputField("format", "Format", "String", {persisted: true, defaultValue: "YYYY-MM-DD", placeholder: "Moment JS Format"})
];

registerDynamicValueClass(MomentJSValue);
 