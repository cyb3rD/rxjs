# About

In this repo I'm learning Reactive programming in JS (using RX.js)

## Requirements

Before running `npm i` you need to check your gulp CLI version (`gulp -v`).
Or you can simply do `npm rm --global gulp` and then run: `npm install --global gulp-cli`

For using Live Reloading you can run `live-reload` in `public` dir.
If you don't have Live Reload, you can install it globally: `npm install --g live-reload` 

## Tasks

`gulp scripts:server` - transpile server source with babel to the `build` folder

`gulp watch:server:scripts` - watcher for server files, transpile them to the `build` folder

`gulp watch:client:scripts` -  - watcher for cleint files, bundle them to the `public\build` folder

`gulp watch:scripts` - parallel watching server and client scripts

`npm run nodemon build\<file_name>` - run nodemon for watching transpiled files 