quantize-vertices
=================
### Quantizes vertices to any bit precision

Takes vertices of arbitrary dimensions and quantizes their coordinates to any bit precision. The different dimensions can be quantized to different precisions by providing an array instead of an int as the number of bits.

Install
-------

```bash
$ npm install quantize-vertices
```

Usage
-----

```javascript
var quantizeVertices = require('quantize-vertices');

var positions = [ 
  [ 1,     0, -0.5],
  [ 0,   0.5,    0],
  [ 0,     1,  0.5],
];

var positions = quantizeVertices(positions, 8);

console.log(positions);
/*
[
  [256,   0,   0], 
  [  0, 128, 128], 
  [  0, 256, 256] 
]
*/
```

With various precisions for x, y and z 

```javascript
var quantizeVertices = require('quantize-vertices');

var positions = [ 
  [ 1,     0, -0.5],
  [ 0,   0.5,    0],
  [ 0,     1,  0.5],
];

var positions = quantizeVertices(positions, [2, 4, 8]);

console.log(positions);
/*
[
  [4,  0,   0], 
  [0,  8, 128], 
  [0, 16, 256]
]
*/
```
