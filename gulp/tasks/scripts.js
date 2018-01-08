var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts',['modernizr'], function (callback) {
    /*웹팩은 err 과 stats */
    webpack(require('../../webpack.config'), function (err,stats) {
        if(err) {
            console.log(err.toString());
        }
        console.log(stats.toString());
        callback();
    });
});