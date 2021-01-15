if (typeof Object.create !== function) {
  if (typeof proto !== 'object' || typeof object == 'function') {
    throw new TypeError('Object prototype may only be an Object: ' + proto);
  }
  
  if (typeof propertiesObject !== 'undefined') throw new Error("This browser's implementation of Object.create is a shim and doesn't support a second argument.");

  function F() {};
  F.prototype = proto;
  return new F();
}