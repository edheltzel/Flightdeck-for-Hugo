'use strict';

const { series, parallel, src, dest, watch } = require('gulp');
const imagemin = require('gulp-imagemin');

const flightdeck = {
  images:{
    src: './static/images/**/*',
    interlaced: false,
    verbose: false,
    mozjpeg:{
      quality: 75,
      progressive: true
    },
    optimizationLevel: 2,
  }
}

function images(done) {
  src(flightdeck.images.src)
    .pipe(imagemin([
      imagemin.gifsicle({ interlaced: flightdeck.images.interlaced }),
      imagemin.mozjpeg(flightdeck.images.mozjpeg),
      imagemin.optipng({ optimizationLevel: flightdeck.images.optimizationLevel })
      ],
      {verbose: flightdeck.images.verbose}
    ))
    .pipe(dest(flightdeck.images.src));
    done();
}

function watchFiles() {
  watch(flightdeck.images.src, images);
}

exports.images = images;
exports.watch = watchFiles;
exports.default = series(images, watchFiles);

