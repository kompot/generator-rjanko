var generators = require('yeoman-generator');

module.exports = generators.Base.extend({

  constructor: function () {
    generators.Base.apply(this, arguments);
  },

  prompting: function () {
    var done = this.async();
    this.prompt({
      type    : 'input',
      name    : 'name',
      message : 'Your Rjanko project name',
      default : this.appname
    }, function (answers) {
      this.log(answers.name);
      done();
    }.bind(this));
  },

  writing: function () {
    var vars = { title: this.appname };
    this.copy('.babelrc');
    this.copy('gitignore', '.gitignore');
    this.copy('nginx.conf');
    this.template('package.json', vars);
    this.copy('Procfile');
    this.copy('server.js');
    this.copy('webpack.config.client.js');
    this.copy('webpack.config.js');
    this.copy('webpack.config.server.js');
    this.copy('src/client.js');
    this.template('src/configClient.js', vars);
    this.template('src/configServer.js', vars);
    this.copy('src/models.js');
    this.copy('src/modelsDb.js');
    this.copy('src/client.less');
    this.copy('src/server.js');
  },

  install: function() {
    this.npmInstall();
  }

});
