var fs = require('fs');

var raw = fs.readFileSync('trial\ 1\ baseline\ control.csv');
var data = raw.toString();
var rows = data.split('\n');
var newData = '';
rows.forEach(function(item, index){
  if(index < 5){
    newData += item + '\n';
  } else {
    if(index % 20 === 0){
      newData += item + '\n';
    }
  }
});

fs.writeFileSync('./trial\ 1\ baseline\ control.csv', newData);