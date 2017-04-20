# Generator-front-webpack

> Yeoman generator for frontend apps - lets you quickly set up a project
 including dev server, unit tests and [Webpack](http://webpack.github.io/) module system.

## Features

- Transpiling ES2015 to ES5 via Babel-Loader
- Compiling SCSS/SASS to CSS
- Autoprefixing styles via PostCSS
- Automatic JavaScript code linting via esLint
- Automatic Sass code linting via sasslint
- HTML linting via html-validator
- Web accessibility linting via AccessSniff
- Ability to unit test JavaScript code via Karma and Jasmine
- Automatic generation of sass documentation via sassdoc

## Installation
```bash
# Make sure  is installed globally
npm install -g yo
npm install -g generator-front-webpack
npm install -g karma-cli
```

## Setting up projects
```bash
# Create a new directory, and `cd` into it:
mkdir new-project && cd new-project

# setting up project
yo front-webpack
```

### Commands

#### Dev server

Run dev server: `$ npm start`
Open `http://localhost:8080/` to see compiled app.

#### Build app

If you want to build files without dev server run command `$ npm run build`

#### Test app

If you want test your app enter `$npm test`

This command including:

- unit testing
- js linting
- sass linting
- html validation
- web accessibility linting

If you want run only one kind of a test you can use one of these commands:

##### Unit testing

`$ karma start`

##### JavaScript linting

`$ npm start eslint`

##### SASS linting

`$ npm run sasslint`

##### HTML validation

`$ npm run htmllint`

##### Web accessibility linting

`$ npm start accessibility`

#### Creating sass documentation

`$ npm run sassdoc`

#### Open server to preview documentation

`$ npm run docsserver`
