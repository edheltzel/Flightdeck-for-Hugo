'use strict';

// Load plugins
const { series, parallel, src, dest, watch } = require('gulp');

// Flightdeck manifest
const flightdeck = {
  images:{
    src: './assets/images/**/*',
    dest: './static/images',
    interlaced: false,
    verbose: false,
    mozjpeg:{
      quality: 75,
      progressive: true
    },
    optimizationLevel: 2,
  }
}

// Optimize Images
async function images(done) {
  const { default: imagemin, gifsicle, mozjpeg, optipng } = await import('gulp-imagemin');

  src(flightdeck.images.src)
    .pipe(imagemin([
      gifsicle({ interlaced: flightdeck.images.interlaced }),
      mozjpeg(flightdeck.images.mozjpeg),
      optipng({ optimizationLevel: flightdeck.images.optimizationLevel })
      ],
      {verbose: flightdeck.images.verbose}
    ))
    .pipe(dest(flightdeck.images.dest));
    done();
}

// Watch files
function watchFiles() {
  watch(flightdeck.images.src, images);
}

// export tasks
exports.images = images;
exports.watch = watchFiles;
exports.default = series(images, watchFiles);
