# Callgebra

The little algebra of callbacks.

## Introduction

This package exports functions for composing callbacks. You can read
about the idea in my [Medium post about composable callbacks][1].

## API

```hs
type Callback a b = (b -> a) -> a
```

### <a name="of" href="https://github.com/fluture-js/callgebra/blob/master/index.mjs#L19">`of :: a -⁠> Callback b a`</a>

Creates a callback for a given return value.

### <a name="chain" href="https://github.com/fluture-js/callgebra/blob/master/index.mjs#L24">`chain :: (a -⁠> Callback c b) -⁠> Callback c a -⁠> Callback c b`</a>

Sequence two callback-accepting functions.

### <a name="map" href="https://github.com/fluture-js/callgebra/blob/master/index.mjs#L29">`map :: (a -⁠> b) -⁠> Callback c a -⁠> Callback c b`</a>

Modify the return value of a callback.

### <a name="ap" href="https://github.com/fluture-js/callgebra/blob/master/index.mjs#L34">`ap :: Callback c (a -⁠> b) -⁠> Callback c a -⁠> Callback c b`</a>

Apply the function returned by one callback to the value returned by
another.

### <a name="callback" href="https://github.com/fluture-js/callgebra/blob/master/index.mjs#L40">`callback :: (a -⁠> b) -⁠> Callback b a -⁠> b`</a>

Given a function and a Callback, runs the Callback using the function.

[1]: https://medium.com/@avaq/composable-callbacks-81c84f0324
