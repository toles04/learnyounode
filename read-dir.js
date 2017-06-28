var fs = require('fs');
var ext = process.argv[3];
var file = process.argv[2];


fs.readdir(file, function(err, data){
    for(var i = 0; i < data.length; i++){
        var filex = data[i].split('.'); 
        if(filex[1] == ext){
            console.log(data[i]);   
        }
    }
});