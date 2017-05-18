var express = require('express');
var serveIndex = require('serve-index')
var app = express();
app.use('/', serveIndex(__dirname + '/build', { 'icons': true }));
app.use('/', express.static(__dirname + '/build')); // ← adjust
app.listen(3000, function() { console.log('listening'); });