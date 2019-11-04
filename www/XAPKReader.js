var exec = require('cordova/exec');
var utils = require('cordova/utils');

exports.downloadExpansionIfAvailable = function(successCB, errorCB) {
  exec(successCB, errorCB, "XAPKReader", "downloadExpansionIfAvailable");
};

exports.extractFile = function(successCB, errorCB, assetPath) {
  exec(successCB, errorCB, "XAPKReader", "extractFile", [assetPath]);
};
