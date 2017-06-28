var num = process.argv.length - 1;
var sum = 0;
for(var i=2; i <= num; i++ ){
    sum += Number(process.argv[i]);
}
console.log(sum);
