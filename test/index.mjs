import {deepStrictEqual} from 'assert';
import {of, chain, map, ap, callback} from '..';

function id (x) {
  return x;
}

function inc (x) {
  return x + 1;
}

function eq (actual) {
  return function eqq (expected) {
    deepStrictEqual (actual, expected);
  };
}

const value = callback (id);

eq (value (of (42))) (42);
eq (value (chain (of) (of (42)))) (42);
eq (value (map (inc) (of (41)))) (42);
eq (value (ap (of (inc)) (of (41)))) (42);

console.log('Tests pass');
