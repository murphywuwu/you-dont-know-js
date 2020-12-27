if (typeof Object.assign !== 'function') {
  Object.defineProperty(Object, 'assign', {
    value: function(target, varArgs) {
      'use strict';
      if (target === null || target === undefined) {
        throw new Error('Cannot conver undefined or null to Object');
      }

      var to = Object(target);

      for(var index = 1; index < arguments.length; index++) {
        var nextSource = arguments[index];

        if (nextSource !== null && nextSource !== undefined) {
          for (var nextKey in nextSource) {
            // Avoid bugs when hasOwnProperty is shadowed
            if (Object.prototype.hasOwnProperty.call(nextSource, nextKey)) {
              to[nextKey] = nextSource[nextKey];
            }
          }
        }
      }

      return to;
    },
    writable: true,
    configurable: true
  })
}