# About

In this repo I'm learning Reactive programming in JS (using RX.js)

## Requirements

Before running `npm i` you need to check your gulp CLI version (`gulp -v`).
Or you can simply do `npm rm --global gulp` and then run: `npm install --global gulp-cli`

## Tasks

`gulp scripts:server` - transpile server source with babel to the `build` folder

`gulp watch:server:scripts` - watcher for server files, transpile them to the `build` folder

`npm run nodemon build\<file_name>` - run nodemon for watching transpiled files 