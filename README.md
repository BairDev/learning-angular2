#learning-angular2

####The name says it: I try to learn Angular2 here.

Note, that this is not unsophisticated, it is an almost offensive trial. I neither use ES6, nor TypeScript and stuff. Just plain, old ES5.

You'll find an html file, some css and a `main.js`.
The *main purpose* was to let this work in LightTable:

|Entry in about LightTable|Version|
|---|---|
|Light Table version|0.7.2|
|Binary version|0.8.6|

Yet you will probably get the following error on hitting `ctrl+return`

```
Uncaught Error: ModuleEvaluationError: undefined is not a function in traceur-runtime@0.0.88/src/runtime/async.js
  angular2.sfx.dev.js [2331]	UncoatedModuleInstantiator.getUncoatedModule
  angular2.sfx.dev.js [2413]	ModuleStore.get
  angular2.sfx.dev.js [3187]	anonymous
Uncaught ReferenceError: angular is not defined
  main.js [5]	anonymous
```

If you open the index.html in Firefox (Linux, v38) it will work. All I've figured about this is, if you use use the downloaded file of version *2.0.0-alpha.20*, more precisely the *angular2.sfx.dev.js* file, it will work in Firefox, but not in LightTable. But using the linke to this file (also for alpha.27) it won't work anywhere.
For the [Angular2 Code look here](https://github.com/angular/code.angularjs.org/tree/master/2.0.0-alpha.27).
