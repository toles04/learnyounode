var fs = require('fs');

//var buff  = fs.readFileSync(process.argv[2]);

//var str = buff.toString();

//var numLines = str.split('\n').length-1;
var loc = process.argv[2];

//console.log(numLines);
fs.readFile(loc, 'utf8', function(err, data){
    var num  = data.split('\n').length - 1;
    console.log(num);
});


