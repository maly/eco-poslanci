var parse = require('csv-parse');
var generate = require('csv-generate');
var stringify = require('csv-stringify');

var fs = require('fs');
var data = fs.readFileSync('data/poslanci_id.original');
parse(data, {delimiter: "\t"}, function(e,p) {
	console.log(p[0])

	for (var i = 1; i<p.length;i++) {
		let q = p[i];
		q[4] = 'https://cs.wikipedia.org/wiki/'+q[1].replace(' ','_')+"_"+q[0].replace(' ','_');
	}

    stringify(p, {delimiter: "\t"}, function(e,p) {
    	fs.writeFileSync('data/poslanci_id.tsv', p)
    })

});
