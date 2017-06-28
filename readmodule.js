var mymodule = require('./module');
var path = require('path');
var directory = process.argv[2];
var extension = process.argv[3];

var callback = function (err, data) {
    if (err) throw err;
    data.forEach(function (file) {
        console.log(file);
    })
}

mymodule(directory, extension, callback);