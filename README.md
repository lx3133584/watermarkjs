# watermark.js [![Build Status](https://travis-ci.org/brianium/watermarkjs.svg?branch=master)](https://travis-ci.org/brianium/watermarkjs)

watermark.js的小程序版

**Note:**
For anyone that is interested: I ported this to a ClojureScript library called
[Dandy Roll](https://github.com/brianium/dandy-roll).

## Installing

watermark.js is available via npm and bower:

```
# install via npm
$ npm install watermarkjs

# install via bower
$ bower install watermarkjs
```

## Usage
```html
<canvas id="watermark" type="2d" style="width: 0;height: 0">
</canvas>
```

```js
// watermark by local path
watermark('../../images/test.jpg')
  .text(watermark.text.upperRight('测试水印1', '24px sans-serif', '#ffffff', 0.5))
  .text(watermark.text.upperLeft('测试水印2', '24px sans-serif', '#ffffff', 1))
  .image(watermark.image.lowerLeft('https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2', 150, 150, 0.5))
  .exec(res => console.log('success:', res))
  .catch(res => console.error('error:', res))

// load a net url
watermark('https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2')
  .image(watermark.image.lowerLeft('http://host.com/logo.png', 100, 100, 0.5))
  .exec(res => console.log('success:', res))

// watermark from remote source
const options = {
  init(img) {
    img.crossOrigin = 'anonymous'
  },
  type: 'png',
  quality: 1,
  id: 'watermark'
};
watermark('http://host.com/photo.jpg', options)
  .image(watermark.image.lowerRight('http://host.com/logo.png', 0.5))
  .exec(res => console.log('success:', res))
```

## Building

Before building or testing, install all the deps:

```
npm i
```

There is an npm script you can run to build:

```
npm run build
```

Or to kick off the file watcher and build as you make changes, run the start task:

```
$ npm start
```

## Testing

There is an npm script for that too!:

```
$ npm test
```

This library uses the [Jest](https://facebook.github.io/jest/) testing framework. Due to some current
issues with Jest, Node 0.10.x is required to run the tests.

## Examples

You can view examples and documentation by running the `sync` task via npm:

```
$ npm run sync
```
The examples demonstrate using watermark images and text, as well as a demonstration
of uploading a watermarked image to Amazon S3. It is the same content hosted at
[http://brianium.github.io/watermarkjs/](http://brianium.github.io/watermarkjs/).

## Development

Running `npm run dev` will start a browser and start watching source files for changes.

## Motivation

* Not every server has image libraries (shared hosting anyone?)
* Not every server has reliable concurrency libs for efficient uploading (shared hosting anyone?)
* JavaScript is fun and cool - more so with ES6

Clearly watermarking on the client has some limitations when watermarking urls and on-page elements. The curious can find urls for non-watermarked images, but it is likely that most average users won't go down this path - keeping this soft barrier useful. However!...

watermark.js has the ability to accept file inputs as a source for watermarking. This makes it easy to preview, watermark, and upload without the non-watermarked image ever becoming public. Check out the [uploading](http://brianium.github.io/watermarkjs/uploading.html) demo to see this in action.

This tool certainly shines in admin or CMS environments where you want to generate watermarks and upload them asynchronously where it would not be possible or preferable on the server. One less thing the server has to do can be a good thing :)

## Suggestions? Improvements?

Please open issues or pull requests if you have bugs/improvements.
