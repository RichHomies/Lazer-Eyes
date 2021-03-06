var fs = require('fs');

var base64Images = {};

var files = fs.readdirSync('./public/img/');

// files.forEach(function(file, index) {
//     if (file !== 'DS_Store') {
//         var base64str = base64_encode(file);
//         base64Images[file] = 'base64:' + base64str;
//     }
// });

export default files;

// export default base64Images;
// fs.writeFileSync('base64Images.js','var base64Images = ' + JSON.stringify(base64Images) +'; export default base64Images;');

function base64_encode(file) {
    // read binary data
    var fullPath = __dirname + '/public/img/';
    file = fullPath + file;
    var bitmap = fs.readFileSync(file);
    // convert binary data to base64 encoded string
    return new Buffer(bitmap).toString('base64');
}