
    var scss = require("gulp-scss");
    var gulp = require("gulp");
    gulp.task("scss", function () {
        gulp.src(
            "public/*.scss"
        ).pipe(scss(
        )).pipe(gulp.dest("views/css"));
    });
    gulp.task('default',['scss']);