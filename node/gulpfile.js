// @info Algumas tasks retiradas de: https://gist.github.com/webdesserts/5632955
// @state Ainda não está a ser usado

var gulp = require('gulp'),
    spawn = require('child_process').spawn,
    node;
var ts = require('gulp-typescript');

/**
 * $ gulp server
 * description: launch the server. If there's a server already running, kill it.
 */
gulp.task('server', function() {
    if (node) node.kill()
    node = spawn('node', ['app.ts'], {stdio: 'inherit'})
    node.on('close', function (code) {
        if (code === 8) {
            gulp.log('Error detected, waiting for changes...');
        }
    });
})

/**
 * $ gulp
 * description: start the development environment and watch for node.js app changes
 */
gulp.task('default', ['server'], function() {
    //gulp.watch(['./index.js', './lib/**/*.js'], ['server']);
    gulp.watch(['app.ts'], ['server']);
})

// clean up if an error goes unhandled.
process.on('exit', function() {
    if (node) node.kill()
})