import path from 'path';

module.exports.autoPrefixerConfig = JSON.stringify({
  browsers: [
    'last 1 versions',
    'IE 11',
    'Opera 12.1'
  ]
});

module.exports.svgoConfig = JSON.stringify({
  plugins: [
    {removeTitle: true},
    {convertColors: {shorthex: false}},
    {convertPathData: false}
  ]
});

const alias = {
  // axios requires `es6-promise` polyfill so we replace it with bluebird
  'es6-promise': 'bluebird'
};

module.exports.aliasClient = {
  ...alias,
  cfg: path.join(__dirname, 'src', 'configClient.js')
};

module.exports.aliasServer = {
  ...alias,
  cfg: path.join(__dirname, 'src', 'configServer.js')
};

module.exports.resolve = {
  extensions: ['', '.js'],
  modulesDirectories: ['node_modules']
};
