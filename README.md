# blob.js
Create awesome svg blobs for your website.

`UNDER DEVELOPMENT`

## Basic Usage

Include blob.js into your project.
```html
<script src="blob.js"></script>
```

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
