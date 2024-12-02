// Section B

import { Parser, Token } from './types.js';
import { failure, isEmpty, success } from './utils.js';

export const parseNumber: Parser = (input: string) => {
  const match = /^\d+/.exec(input);
  if (match) {
    return success(
      [{ type: 'NUMBER', value: match[0] }],
      input.slice(match[0].length)
    );
  }
  return failure('Not a number');
};

// Exercise 15

export const parseOperator: Parser = (input: string) => {
  const match = /^[\+-]/.exec(input);
  if (match) {
    return success(
      [{ type: 'OPERATOR', value: match[0] }],
      input.slice(match[0].length)
    );
  }
  return failure("Expected '+' or '-'");
};

// Exercise 16

export const parseOpenParenthesis: Parser = (input: string) => {
  const match = /^\(/.exec(input);
  if (match) {
    return success(
      [{ type: 'OPEN_PARENTHESIS', value: match[0] }],
      input.slice(match[0].length)
    );
  }
  return failure("Expected '('");
};

// Exercise 17

export const parseCloseParenthesis: Parser = (input: string) => {
  const match = /^\)/.exec(input);
  if (match) {
    return success(
      [{ type: 'CLOSE_PARENTHESIS', value: match[0] }],
      input.slice(match[0].length)
    );
  }
  return failure("Expected ')'");
};

// Exercise 18

export const parseCharacter: (
  char: string,
  tokenType: Token['type']
) => Parser = (char, tokenType) => {
  return (input: string) => {
    const escapedChar = char.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
    const regex = new RegExp(`^${escapedChar}`);
    const match = regex.exec(input);

    if (match) {
      return success(
        [{ type: tokenType, value: match[0] }],
        input.slice(match[0].length)
      );
    }

    return failure(`Expected '${char}'`);
  };
};

// Exercise 19

export const parseOpenParenthesis2 = parseCharacter('(', 'OPEN_PARENTHESIS');
export const parseCloseParenthesis2 = parseCharacter(')', 'CLOSE_PARENTHESIS');

// Exercise 20

export const choice: (p1: Parser, p2: Parser) => Parser = (p1, p2) => {
  return (input) => {
    const result = p1(input);
    if (result.success) {
      return result;
    }
    return p2(input);
  };
};

// Exercise 21

export const parseOperator2 = choice(
  parseCharacter('+', 'OPERATOR'),
  parseCharacter('-', 'OPERATOR')
);

// Exercise 22

export const choiceN: (parsers: Parser[]) => Parser = (parsers) => {
  return (input) => {
    for (const parser of parsers) {
      const result = parser(input);
      if (result.success) {
        return result;
      }
    }
    return failure('Choice parser: All choices failed on input');
  };
};

// Exercise 23

export const zip: (parser1: Parser, parser2: Parser) => Parser =
  (parser1, parser2) => (input: string) => {
    const result1 = parser1(input);
    if (!result1.success) {
      return result1;
    }
    const result2 = parser2(result1.rest);
    if (result2.success) {
      return {
        ...result1,
        ...result2,
        value: [...result1.value, ...result2.value],
      };
    }
    return result2;
  };

// Exercise 24

export function doUntil(parser: Parser): Parser {
  return (input) => {
    const result = parser(input);
    if (!result.success) {
      return result;
    }
    return zip(
      () => success(result.value, result.rest),
      choiceN([doUntil(parser), isEmpty])
    )(result.rest);
  };
}

// Exercise 25

// I'm not able to make the rules escape the operators trap to introduce another operation instead of another number.
// This would be something I would have to look at with fresher eyes

const parentesesOperation = zip(
  zip(zip(parseOpenParenthesis, parseNumber), zip(parseOperator, parseNumber)),
  choiceN([parseCloseParenthesis, zip(parseOperator, parseNumber)])
);

const noParentesesOperation = zip(
  parseNumber,
  doUntil(zip(parseOperator, choiceN([parseNumber, parentesesOperation])))
);

export const tokenizer = doUntil(
  choiceN([
    noParentesesOperation,
    parentesesOperation,
    zip(
      choiceN([noParentesesOperation, parentesesOperation]),
      doUntil(
        zip(
          parseOperator,
          choiceN([parentesesOperation, noParentesesOperation])
        )
      )
    ),
  ])
);
