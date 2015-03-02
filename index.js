var rescaleVertices = require('rescale-vertices');

function roundVertices(positions) {
  return positions.map(function(position) {
    return position.map(function(value) {
      //return parseInt(value);
      return value | 0;
    });
  });
}

function quantizeVertices(positions, bits) {
  if(positions.length === 0) {
    return [];
  }

  var dimensions = positions[0].length;
  var bounds = [
    new Array(dimensions),
    new Array(dimensions)
  ];

  for(var i=0; i<dimensions; i++) {
    bounds[0][i] = 0;
    bounds[1][i] = (typeof bits === 'number')
      ? (1 << bits) - 1
      : (1 << bits[i]) - 1
  }

  positions = rescaleVertices(positions, bounds);
  positions = roundVertices(positions);
  return positions;
}

module.exports = quantizeVertices;