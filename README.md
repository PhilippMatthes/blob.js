# blob.js
Create awesome svg blobs for your website.

*Discontinuation Notice*: We archived this project to go after other projects. If you are interested in continuing our project, feel free to contact us (via: mail@philippmatth.es)!


`UNDER DEVELOPMENT`

## Getting started

### Download

Via npm

```bash
$ npm install blobjs --save
```

Via yarn
```bash
$ yarn add blobjs --save
```

or manual [download](https://github.com/PhilippMatthes/blob.js).

### Usage

#### ES6 modules

```javascript
import blob from 'blobjs';
```

#### CommonJS

```javascript
const blob = require('blobjs');
```

#### File include

Link `blob.min.js` in your HTML :

```html
<script src="blob.min.js"></script>
```

## Basic Usage

Create a blob on an html element of your choice:
```javascript
blob({ id: 'blob-container' });
```

## Advanced Usage

Configure the blobs shape:
```javascript
const b = blob({ 
  id: 'blob-container',
  avoidedEdges: [ 'left', 'bottom' ], // left, bottom, right, top, none, all
  roughness: 0.5
});
```

By default, the blob is randomized. Choose a custom seed to get deterministic blob shaping:
```javascript
const b = blob({ 
  id: 'blob-container',
  avoidedEdges: [ 'all' ],
  roughness: 1.0,
  seed: 1337
});

console.log(b.seed); // 1337
```
