### learning-angular2

#I try to learn how to use Angular2 here.

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

If you open the index.html in Firefox (Linux, v38) it will work.
