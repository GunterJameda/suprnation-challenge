import { factorial } from './utils.js';

// Section A

export function sumInts(a: number, b: number): number {
  return a > b ? 0 : a + sumInts(a + 1, b);
}

// Exercise 1

export function sumSquares(a: number, b: number): number {
  return a > b ? 0 : a * a + sumSquares(a + 1, b);
}

// Exercise 2

export function sumCubes(a: number, b: number): number {
  return a > b ? 0 : a * a * a + sumCubes(a + 1, b);
}

// Exercise 3

export function sumFactorials(a: number, b: number): number {
  return a > b ? 0 : factorial(a) + sumFactorials(a + 1, b);
}

// Exercise 4

export const sumMap: (
  mapFn: (value: number) => number
) => (a: number, b: number) => number = (mapFn) => (a, b) =>
  a > b ? 0 : mapFn(a) + sumMap(mapFn)(a + 1, b);

// Exercise 5

export const sumInts2 = sumMap((x) => x);
export const sumSquares2 = sumMap((x) => x * x);
export const sumCubes2 = sumMap((x) => x * x * x);
export const sumFactorials2 = sumMap(factorial);

// Exercise 6

export function prodInts(a: number, b: number): number {
  return a > b ? 1 : a * prodInts(a + 1, b);
}

// Exercise 7

export function prodSquares(a: number, b: number): number {
  return a > b ? 1 : a * a * prodSquares(a + 1, b);
}

// Exercise 8

export function prodCubes(a: number, b: number): number {
  return a > b ? 1 : a * a * a * prodCubes(a + 1, b);
}

// Exercise 9

export function prodFactorial(a: number, b: number): number {
  return a > b ? 1 : factorial(a) * prodFactorial(a + 1, b);
}

// Exercise 10

export const prodMap: (
  mapFn: (value: number) => number
) => (a: number, b: number) => number = (mapFn) => (a, b) =>
  a > b ? 1 : mapFn(a) * prodMap(mapFn)(a + 1, b);

// Exercise 11

export const prodInts2 = prodMap((x) => x);
export const prodSquares2 = prodMap((x) => x * x);
export const prodCubes2 = prodMap((x) => x * x * x);
export const prodFactorial2 = prodMap((x) => factorial(x));

// Exercise 12

export const mapReduce: (
  mapFn: (value: number) => number,
  reduceFn: (first: number, second: number) => number,
  zero: number
) => (a: number, b: number) => number = (mapFn, reduceFn, zero) => (a, b) =>
  a > b ? zero : reduceFn(mapFn(a), mapReduce(mapFn, reduceFn, zero)(a + 1, b));

// Exercise 13

export const mapReduce2: (
  reduceFn: (first: number, second: number) => number,
  zero: number
) => (mapFn: (value: number) => number) => (a: number, b: number) => number =
  (reduceFn, zero) => (mapFn) => (a, b) =>
    a > b
      ? zero
      : reduceFn(mapFn(a), mapReduce2(reduceFn, zero)(mapFn)(a + 1, b));

// Exercise 14

export const sumMap2 = mapReduce2((a, b) => a + b, 0);
export const prodMap2 = mapReduce2((a, b) => a * b, 1);
