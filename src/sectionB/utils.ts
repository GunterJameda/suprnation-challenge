import { Parser, Result, Token } from './types.js';

export const success = (value: Token[], rest: string): Result => ({
  success: true,
  value: value,
  rest,
});

export const failure = (reason: string): Result => ({ success: false, reason });

export const isEmpty: Parser = (input) => {
  if (input == '') return success([], '');
  else return failure('Not an empty string');
};
