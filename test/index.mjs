import {deepStrictEqual} from 'assert';
import {of, chain, map, ap, callback} from '../index.mjs';
import test from 'oletus';

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

test ('of', () => {
  eq (value (of (42))) (42);
});

test ('chain', () => {
  eq (value (chain (of) (of (42)))) (42);
});

test ('map', () => {
  eq (value (map (inc) (of (41)))) (42);
});

test ('ap', () => {
  eq (value (ap (of (inc)) (of (41)))) (42);
});
