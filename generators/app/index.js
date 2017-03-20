'use strict';
var Generator = require('yeoman-generator');
var chalk = require('chalk');
var yosay = require('yosay');

module.exports = class extends Generator {
    constructor(args, opts) {
        // Calling the super constructor is important so our generator is correctly set up
        super(args, opts)
    }

    init () {
        this.log(yosay(
            'Welcome to the peachy ' + chalk.red('generator-frontend-webpack')
        ));

    }

    // writing() {
    //     this.fs.copyTpl(
    //         this.templatePath('_package.json'),
    //         this.destinationPath('package.json'),
    //         { title: 'Templating with Yeoman' }
    //     );
    // }

    writing () {
        // Have Yeoman greet the user.
        this.log(yosay(
            'Welcome to the peaafachy ' + chalk.red('generator-frontend-webpack')
        ));
        this.fs.copy(
            this.templatePath('_package.json'),
            this.destinationPath('package.json')
        );
        this.fs.copy(
            this.templatePath('sass-lint.yml'),
            this.destinationPath('.sass-lint.yml')
        );
        this.fs.copy(
            this.templatePath('eslintrc'),
            this.destinationPath('.eslintrc')
        );
        this.fs.copy(
            this.templatePath('gitignore'),
            this.destinationPath('.gitignore')
        );
        this.fs.copy(
            this.templatePath('_karma.conf.js'),
            this.destinationPath('karma.conf.js')
        );
        this.fs.copy(
            this.templatePath('_postcss.config.js'),
            this.destinationPath('postcss.config.js')
        );
        this.fs.copy(
            this.templatePath('_webpack.config.js'),
            this.destinationPath('webpack.config.js')
        );
        this.fs.copy(
            this.templatePath('design/**'),
            this.destinationPath('design')
        );
        this.fs.copy(
            this.templatePath('dev/**'),
            this.destinationPath('dev')
        );
        this.fs.copy(
            this.templatePath('src/**'),
            this.destinationPath('src')
        );
        this.fs.copy(
            this.templatePath('test/**'),
            this.destinationPath('test')
        );
    }

    install  () {
        this.installDependencies({
            bower: false
        });
    }

    end () {
        if (!this.options['skip-install']) {
            this.log(chalk.green('All is done! Thank you for using Frodigo Frontend-webpack generator! Enter `npm start` to start development'));
        }
    }
};