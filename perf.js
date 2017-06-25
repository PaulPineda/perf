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

  function invokeMultipleTimes(n,fn){
    var results = [],
      args = [].slice.call(arguments, 1),
      timesToInvoke = args[args.length-1];

    for(var i=0; i<n; i++){
      results.push(timeToExecute.apply(null, args));
    }
    return results;
  };

  function averageTimeToComplete(array){
    return array.reduce(
      function(acc,c)
      {
        return (acc += c);
      },
      0
    )/array.length * 100;
  }

  exports.perf = {
    timeFunction: timeFunction
  }
})(
  (typeof exports !== 'undefined')
  ? exports
  : window
);

