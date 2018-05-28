const browserSync = require('browser-sync')
const wbBuild = require('workbox-build')
const rollup = require('rollup')

let isWatching = false
let isServer = false

export async function reload (task) {
  isWatching && isServer && browserSync.reload()
}

const target = 'dist'
const releaseTarget = 'release'
const applicationId = 'hyperapp-todo-simple8'

const src = {
  js: 'src/**/*.js',
  scss: 'src/styles/app.scss',
  staticAssets: [
    'src/static/**/*.*',
    'src/*.html'
  ]
}

export async function cache () {
  await wbBuild.generateSW({
    cacheId: `${applicationId}`,
    globDirectory: `${releaseTarget}/`,
    swDest: `${releaseTarget}/sw.js`,
    globPatterns: ['*.{js,html,css,png}']
  })
    .then(() => {
      console.log('Service worker generated.')
    })
    .catch((err) => {
      console.log('[ERROR] This happened: ' + err)
    })
}

export async function clean (task) {
  await task.clear([target, releaseTarget])
}

export async function copyStaticAssets (task, o) {
  await task.source(o.src || src.staticAssets).target(target)
}

const rollupInputOptions = {
  input: './src/index.js',
  plugins: [
    require('rollup-plugin-buble')({
      jsx: 'h',
      transforms: {
        dangerousForOf: true
      },
      objectAssign: 'Object.assign'
    }),
    require('rollup-plugin-commonjs')({
      include: 'node_modules/**'
    }),
    require('rollup-plugin-replace')({
      'process.env.NODE_ENV': JSON.stringify(isWatching ? 'development' : 'production')
    }),
    require('rollup-plugin-node-resolve')({
      browser: true,
      main: true
    })
  ]
}

const rollupOutputOptions = {
  file: `${target}/index.js`,
  format: 'iife',
  name: 'window'
}

export async function js () {
  const bundle = await rollup.rollup(rollupInputOptions)
  await bundle.write(rollupOutputOptions)
}

export async function styles (task) {
  await task.source(src.scss).sass({
    outputStyle: 'compressed',
    includePaths: ['']
  })
    .postcss({
      plugins: [require('autoprefixer')({
        browsers: ['last 2 versions']
      })]
    })
    .target(`${target}`)
}

export async function build (task) {
  await task.serial(['clean', 'copyStaticAssets', 'styles', 'js'])
}

export async function release (task) {
  await task.source(`${target}/index.js`).uglify({
    compress: {
      conditionals: 1,
      drop_console: 1,
      comparisons: 1,
      join_vars: 1,
      booleans: 1,
      loops: 1
    }
  }).target(target)
  await task.source(`${target}/**/*`).rev({
    ignores: ['.html', '.png', '.svg', '.ico', '.xml', '.json']
  }).revManifest({dest: releaseTarget, trim: target}).revReplace().target(releaseTarget)
  await task.source(`${releaseTarget}/*.html`).htmlmin().target(releaseTarget)
  await task.serial(['cache'])
}

export async function watch (task) {
  isWatching = true
  await task.start('build')
  await task.watch(src.js, ['js', 'reload'])
  await task.watch(src.scss, ['styles', 'reload'])
  await task.watch(src.staticAssets, ['copyStaticAssets', 'reload'])
  await task.start('serve')
}

export async function serve (task) {
  isServer = 1
  browserSync({
    logPrefix: `${applicationId}`,
    server: target,
    port: process.env.PORT || 4000,
    cors: false,
    middleware: [
      require('connect-history-api-fallback')()
    ]
  })
}
