var child_process = require('child_process')
var exec = child_process.exec

exports.cmd = (cmd, done) => {
    var child = exec(cmd, done)
}