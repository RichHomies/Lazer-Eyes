#!/usr/bin/env node

var fs = require("fs"),
    util = require("util");

var mime = require("mime");

var dataUri = base64Image("./icon4.png");
console.log(dataUri);

function base64Image(src) {
    var data = fs.readFileSync(src).toString("base64");
    return util.format("data:%s;base64,%s", mime.lookup(src), data);
}