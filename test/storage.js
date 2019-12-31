(function() {
  let _localStorage;
  if(typeof window === 'undefined') {
    _localStorage = {}
  }
  global.localStorage = _localStorage ? _localStorage : window.localStorage;
  localStorage.setItem = function(key, val) {
    this[key] = val + '';
  };
  localStorage.getItem = function(key) {
    return this[key];
  };
  Object.defineProperty(localStorage, 'length', {
    get: function() {
      return Object.keys(this).length - 2;
    }
  });
})();
