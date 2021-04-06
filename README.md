# Callgebra

The little algebra of callbacks.

## Introduction

This package exports functions for composing callbacks. You can read
about the idea in my [Medium post about composable callbacks][1].

## Usage

### Node

```console
$ npm install --save callgebra
```

On Node 12 and up, this module can be loaded directly with `import` or
`require`. On Node versions below 12, `require` or the [esm][]-loader can
be used.

```js
import {of, callback} from 'callgebra';
callback (console.log) (of (42));
```

### Deno and Modern Browsers

You can load the EcmaScript module from various content delivery networks:

- [Skypack](https://cdn.skypack.dev/callgebra@2.1.0)
- [JSPM](https://jspm.dev/callgebra@2.1.0)
- [jsDelivr](https://cdn.jsdelivr.net/npm/callgebra@2.1.0/+esm)

### Old Browsers and Code Pens

There's a [UMD][] file included in the NPM package, also available via
jsDelivr: https://cdn.jsdelivr.net/npm/callgebra@2.1.0/dist/umd.js

This file adds `flutureProject` to the global scope, or use CommonJS/AMD
when available.

```js
const {of, callback} = require ('callgebra');
callback (console.log) (of (42));
```

## API

```hs
type Callback a b = (b -> a) -> a
```

#### <a name="of" href="https://github.com/fluture-js/callgebra/blob/v2.1.0/index.js#L57">`of :: a -⁠> Callback b a`</a>

Creates a callback for a given return value.

#### <a name="chain" href="https://github.com/fluture-js/callgebra/blob/v2.1.0/index.js#L62">`chain :: (a -⁠> Callback c b) -⁠> Callback c a -⁠> Callback c b`</a>

Sequence two callback-accepting functions.

#### <a name="map" href="https://github.com/fluture-js/callgebra/blob/v2.1.0/index.js#L67">`map :: (a -⁠> b) -⁠> Callback c a -⁠> Callback c b`</a>

Modify the return value of a callback.

#### <a name="ap" href="https://github.com/fluture-js/callgebra/blob/v2.1.0/index.js#L72">`ap :: Callback c (a -⁠> b) -⁠> Callback c a -⁠> Callback c b`</a>

Apply the function returned by one callback to the value returned by
another.

#### <a name="callback" href="https://github.com/fluture-js/callgebra/blob/v2.1.0/index.js#L78">`callback :: (a -⁠> b) -⁠> Callback b a -⁠> b`</a>

Given a function and a Callback, runs the Callback using the function.

[1]: https://medium.com/@avaq/composable-callbacks-81c84f0324
[esm]: https://github.com/standard-things/esm
[UMD]: https://github.com/umdjs/umd
