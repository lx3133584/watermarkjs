# watermark.js [![Build Status](https://travis-ci.org/brianium/watermarkjs.svg?branch=master)](https://travis-ci.org/brianium/watermarkjs)

watermark.js的小程序版

## Installing

watermark.js is available via npm and bower:

```
# install via npm
$ npm install lx3133584/watermarkjs

# install via bower
$ bower install lx3133584/watermarkjs
```

## Usage
```html
<canvas id="watermark" type="2d" style="width: 0;height: 0">
</canvas>
```

```js
// watermark by local path
watermark('../../images/test.jpg')
  .text(watermark.text.upperRight({text: '测试水印1', font: '24px sans-serif', fillStyle: '#ffffff', alpha: 0.5, stroke: true, strokeStyle: '#000', distance: 30}))
  .text(watermark.text.upperLeft({text: '测试水印2', font: '24px sans-serif', fillStyle: '#ffffff'}))
  .image(watermark.image.lowerLeft({image: 'https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2', width: 150, height: 150, alpha: 0.5, distance: 30}))
  .exec(res => console.log('success:', res))
  .catch(res => console.error('error:', res))

// load a net url
watermark('https://dss0.baidu.com/73x1bjeh1BF3odCf/it/u=138126325,1485620701&fm=85&s=7FAB2EC3909A35D01E299C1A030010D2')
  .image(watermark.image.lowerLeft({image: 'http://host.com/logo.png'}))
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

## Suggestions? Improvements?

Please open issues or pull requests if you have bugs/improvements.
