(function(exports){
  'use strict'
  function timeToExecute(fn){
    var args = [].slice.call(arguments, 1),
      t0 = performance.now(),
      t1 = 0;
    
    fn.apply(null, args);
    t1 = performance.now();

    return t1-t0;
  };

  exports.perf = {
    timeFunction: timeFunction
  }
})(
  (typeof exports !== 'undefined')
  ? exports
  : window
);
