const Q=12;

var gulp = require("gulp");

var range = function(start, end){
  var i = start;
  var product = [];
  while(i <= end){
    product.push(i);
    i = i +1;
  }
  return product;
};

var toFile = function(index){
  index = format(index);
  return {
    name: index + ".js",
    get src(){
      return "src/js/" + this.name;
    },
    get distDir(){
      return "public/test";
    }
  };
};

var format = function(i){
  if(i < 10){
    return "0" + i;
  }
  return i + "";
};

var buildjs = function(file){
  console.log("build " + file.src);
  var browserify = require("browserify");
  var source = require("vinyl-source-stream");
  return browserify({
    entries: [file.src],
    transform: ["debowerify"]
  })
    .bundle()
    .pipe(source(file.name))
    .pipe(gulp.dest(file.distDir));
};

gulp.task("copy", ["copyjs", "copycss"]);

gulp.task("copycss", function(){
  var files = ["src/js/components/mocha/mocha.css"];
  return gulp.src(files).pipe(gulp.dest("public/css"));
});

gulp.task("copyjs", function(){
  var files = ["src/js/components/mocha/mocha.js"];
  return gulp.src(files).pipe(gulp.dest("public/js"));
});

gulp.task("buildhtml", function(){
  var ejs = require("gulp-ejs");
  var rename = require("gulp-rename");

  var src = "src/html/test.html";
  var dist = "public";
  
  range(1, Q).forEach(function(i){
    i = format(i);
    return gulp.src(src).
      pipe(ejs({number: i})).
      pipe(rename(i + ".html")).
      pipe(gulp.dest(dist));
  });
});

gulp.task("buildjs", function(){
  range(1, Q).map(toFile).forEach(buildjs);
});

gulp.task("build", ["copy", "buildjs", "buildhtml"]);

gulp.task("serve",  function(){
  var connect = require('gulp-connect');
  connect.server({
    root: "public",
    livereload: false
  });
});

gulp.task("default", ["buildjs"]);
