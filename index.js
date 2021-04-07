
(function (root, factory) {
  "use strict";
  if (typeof define === 'function' && define.amd) {
      define('jsb', factory);
  } else if (typeof module === 'object' && module.exports) {
      module.exports = factory();
  } else {
      root.jsb = factory();
  }
}(this, function () {
  const defaultEarthRadius = 6378137; // equatorial Earth radius

  function toRadians(angleInDegrees) {
    return (angleInDegrees * Math.PI) / 180;
  }

  function toDegrees(angleInRadians) {
    return (angleInRadians * 180) / Math.PI;
  }

  function offset(c1, distance, bearing) {
    var lat1 = toRadians(c1[1]);
    var lon1 = toRadians(c1[0]);
    var dByR = distance / defaultEarthRadius;
    var lat = Math.asin(
      Math.sin(lat1) * Math.cos(dByR) + Math.cos(lat1) * Math.sin(dByR) * Math.cos(bearing)
    );
    var lon =
      lon1 +
      Math.atan2(
        Math.sin(bearing) * Math.sin(dByR) * Math.cos(lat1),
        Math.cos(dByR) - Math.sin(lat1) * Math.sin(lat)
      );
    return [toDegrees(lon), toDegrees(lat)];
  }

  return function circleToPolygon(center, radius, vectors) {
    var n = vectors || 32;
    var coordinates = [];
    for (var i = 0; i < n; ++i) {
      coordinates.push(offset(center, radius, (2 * Math.PI * -i) / n));
    }
    coordinates.push(coordinates[0]);

    return {
      type: "Polygon",
      coordinates: [coordinates]
    };
  }
}));
