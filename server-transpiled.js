'use strict';

var _express = require('express');

var _express2 = _interopRequireDefault(_express);

var _path = require('path');

var _path2 = _interopRequireDefault(_path);

var _dotenv = require('dotenv');

var _dotenv2 = _interopRequireDefault(_dotenv);

var _morgan = require('morgan');

var _morgan2 = _interopRequireDefault(_morgan);

var _chalk = require('chalk');

var _chalk2 = _interopRequireDefault(_chalk);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var port = process.env.PORT || 8000;
var app = (0, _express2.default)();

_dotenv2.default.config();
app.use((0, _morgan2.default)('dev'));
app.use(_express2.default.static(__dirname + '/dist'));
app.use('*', function (request, response) {
    response.sendFile(_path2.default.join(__dirname, '/dist/index.html'));
});

app.listen(port, function (error) {
    return error ? (0, _morgan2.default)(error) : console.log(_chalk2.default.green('App running on port ' + port));
});
