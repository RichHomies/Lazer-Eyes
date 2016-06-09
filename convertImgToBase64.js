var fs = require('fs');

var base64Images = {}

fs.readdir('./public/img/', function(err,  files){
  if (err) {
    process.exit(1)
  }
  console.log('files', files)
  files.forEach( function( file, index ) {
    console.log('file', file)
    var base64str = base64_encode(file)
    base64Images[file] = base64str
  })
})


function base64_encode(file) {
    // read binary data
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}


fs.writeFileSync('base64Images.txt',JSON.stringify(base64Images))