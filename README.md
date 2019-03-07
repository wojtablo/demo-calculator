# Yet Another JS/PHP Calculator

Calculator uses 

* Source: [https://github.com/wojtablo/demo-calculator](https://github.com/wojtablo/demo-calculator)


## Installation

Choose one of the following options:

- Download the latest stable release
- Clone the git repo — `git clone
  https://github.com/wojtablo/demo-calculator` - and checkout the
  [tagged release](https://github.com/wojtablo/demo-calculator/releases)
  you'd like to use.
- Assuming you work on MacOS (or Linux) feel free to use Shell script to automate installation of dependencies `calculator-install.sh`


#### Manual installation of dependencies  
- Enter `app` directory and `composer install`
- Enter `assets` directory and `npm install` 
- Run project locally with [Browser-Sync](https://www.browsersync.io/), run command: `gulp server`
- or prepare a build  with [gulp]('https://gulpjs.com/'), run commend: `gulp build`
- make sure you have permissions to write in `.log/` directory
### Using Browser-Sync
In order to use Browser-Sync you must provide your local domain address in file `assets/Gulpfile.babel.js`

## Features

* HTML5 ready. Use the new elements with confidence.
* Designed with progressive enhancement in mind.
  * Modular SCSS structure
  * Modular JavaScript structure
* Using Composer and packages:
  * Twig - templating system
  * Agent - for Browser Detection
* Shell script for aumating installation of packages

## Browser support

* Chrome *(latest 2)*
* Edge *(latest 2)*
* Firefox *(latest 2)*
* Internet Explorer 11
* Opera *(latest 2)*
* Safari *(latest 2)*

## License

The code is available under the MIT License.
