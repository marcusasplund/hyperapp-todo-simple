const browserify = require('browserify')
const { createReadStream, existsSync } = require('fs')
const { createServer } = require('http')

createServer(({ url }, res) => {
  if (url === '/bundle.js') {
    browserify(`${__dirname}/app/index.js`)
      .transform(require('browserify-css'), {
        global: true
      })
      .transform('babelify', {
        presets: ['react', 'latest'],
        plugins: [
          ['transform-react-jsx', {
            'pragma': 'h'
          }]/*,
          ["transform-object-rest-spread"] */
        ]
      })
      .bundle().on('error', e => {
        res.writeHead(500, e.toString())
        res.end()
      }).pipe(res)
  } else if (url === '/' || url === '/style.css') {
    createReadStream(__dirname + (url === '/' ? '/index.html' : url)).pipe(res)
  } else {
    res.end()
  }
}).listen(8080)
