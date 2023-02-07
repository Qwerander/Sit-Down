const { src, dest, series, watch } = require('gulp')
const htmlMin = require('gulp-htmlmin')
const autoprefixer = require('gulp-autoprefixer')
const cleanCSS = require('gulp-clean-css')
const image = require('gulp-imagemin')
const babel = require('gulp-babel')
const notify = require('gulp-notify')
const uglify = require('gulp-uglify-es').default
const del = require('del')
const ifProduct = require('gulp-if') 
const sass = require('gulp-sass')(require('sass'))

const sourcemaps = require('gulp-sourcemaps')
const browserSync = require('browser-sync').create()

const arg = require('yargs').argv
let isDevelopment

if (arg.build) {
    isDevelopment = false
} else {
    isDevelopment = true 
}

const clean = () => {
    return del(['dist'])
}

const resources = () => {
    return src('src/assets/**')
        .pipe(dest('dist/assets'))
}



const styles = () => {
    return src('src/css/*.scss')
        .pipe(ifProduct(isDevelopment, sourcemaps.init()))
        .pipe(sass())
        .pipe(autoprefixer({
            cascade: false
        }))
        .pipe(ifProduct(!isDevelopment, cleanCSS({
            level: 2
        })))
        .pipe(ifProduct(isDevelopment, sourcemaps.write()))
        .pipe(dest('dist/css'))
        .pipe(browserSync.stream())   
}

const htmlMinify = () => {
    return src('src/**/*.html')
        .pipe(ifProduct(!isDevelopment, htmlMin({
            collapseWhitespace: true
        })))
        .pipe(dest('dist'))
        .pipe(browserSync.stream())
}


const scripts = () => {
    return src('src/js/*.js',)
    .pipe(ifProduct(isDevelopment, sourcemaps.init()))
    .pipe(babel({
        presets: ['@babel/env']
    }))
    .pipe(ifProduct(!isDevelopment, uglify({
        toplevel: true
    }).on('error', notify.onError())))
    .pipe(ifProduct(isDevelopment, sourcemaps.write()))
    .pipe(dest('dist/js'))
    .pipe(browserSync.stream())
}



const images = () => {
    return src([
        'src/img/**/*.jpg',
        'src/img/**/*.png',
        'src/img/**/*.jpeg',
        'src/img/**/*.svg',
    ])
    .pipe(image())
    .pipe(dest('dist/img'))
}

const watchFiles = () => {
    browserSync.init({
        server: {
            baseDir: 'dist'
        }
    })
}

watch('src/**/*.html', htmlMinify)
watch('src/css/**/*.css', styles)
watch('src/js/**/*.js', scripts)
watch('src/assets/**', resources)


exports.styles = styles
exports.scripts = scripts
exports.htmlMinify = htmlMinify
exports.clean = clean
exports.default = series(clean, resources, htmlMinify, scripts, styles, images, watchFiles)