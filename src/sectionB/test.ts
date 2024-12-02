import {
  choice,
  choiceN,
  doUntil,
  parseCharacter,
  parseCloseParenthesis,
  parseCloseParenthesis2,
  parseNumber,
  parseOpenParenthesis,
  parseOpenParenthesis2,
  parseOperator,
  parseOperator2,
  tokenizer,
  zip,
} from './code.js';

// All test cases in an outputable way for the terminal, nothing more
// Run "npm run testB" or "yarn testB" to see them working

console.log('====================================');
console.log('Test parseNumber');
console.log(parseNumber('123'));
console.log(parseNumber('1 + 2'));
console.log(parseNumber('+ 2'));
console.log('---');
console.log('Test parseOperator');
console.log(parseOperator('+'));
console.log(parseOperator('-'));
console.log(parseOperator('1 +'));
console.log(parseOperator('+ 2'));
console.log('---');
console.log('Test parseOpenParenthesis');
console.log(parseOpenParenthesis('('));
console.log(parseOpenParenthesis('+ ('));
console.log(parseOpenParenthesis(')'));
console.log('---');
console.log('Test parseCloseParenthesis');
console.log(parseCloseParenthesis(')'));
console.log(parseCloseParenthesis('+ )'));
console.log(parseCloseParenthesis('()'));
console.log('---');
console.log('Test parseCharacter("(", "OPEN_PARENTHESIS")');
console.log(parseCharacter('(', 'OPEN_PARENTHESIS')('('));
console.log(parseCharacter('(', 'OPEN_PARENTHESIS')('+ ('));
console.log(parseCharacter('(', 'OPEN_PARENTHESIS')(')'));
console.log('---');
console.log('Test: parseCharacter(")", "CLOSE_PARENTHESIS")');
console.log(parseCharacter(')', 'CLOSE_PARENTHESIS')(')'));
console.log(parseCharacter(')', 'CLOSE_PARENTHESIS')('+ )'));
console.log(parseCharacter(')', 'CLOSE_PARENTHESIS')('()'));
console.log('---');
console.log('Test: parseOpenParenthesis2');
console.log(parseOpenParenthesis2('('));
console.log(parseOpenParenthesis2('+ ('));
console.log(parseOpenParenthesis2(')'));
console.log('---');
console.log('Test: parseCloseParenthesis2');
console.log(parseCloseParenthesis2(')'));
console.log(parseCloseParenthesis2('+ )'));
console.log(parseCloseParenthesis2('()'));
console.log('---');
console.log('Test: choice(parseNumber, parseOperator)');
console.log(choice(parseNumber, parseOperator)('1+2'));
console.log(choice(parseNumber, parseOperator)('+2'));
console.log(choice(parseNumber, parseOperator)('(+'));
console.log('---');
console.log('Test: parseOperator2("+")');
console.log(parseOperator2('+'));
console.log(parseOperator2('1 +'));
console.log(parseOperator2('+ 2'));
console.log('---');
console.log(
  'Test: choiceN([parseNumber, parseOpenParenthesis, parseOperator])("1 + 2")'
);
console.log(
  choiceN([parseNumber, parseOpenParenthesis, parseOperator])('1 + 2')
);
console.log(
  choiceN([parseNumber, parseOpenParenthesis, parseOperator])(')1 + 2(')
);
console.log('---');
console.log('Test: zip(parseNumber, parseOperator)');
console.log(zip(parseNumber, parseOperator)('1+'));
console.log(zip(parseNumber, parseOperator)('+1'));
console.log(zip(parseNumber, parseOperator)('1+2+3'));
console.log('Test: doUntil');
console.log(doUntil(choiceN([parseNumber, parseOperator]))('1+2'));
console.log(doUntil(choiceN([parseNumber, parseOperator]))('1+('));
console.log('---');
console.log('Test: tokenizer');
console.log('01', tokenizer('1+2')); // true; okay
console.log('02', tokenizer('1-2')); // true; okay
console.log('03', tokenizer('1+2-')); // false; okay
console.log('04', tokenizer('1++2')); // false; okay
console.log('05', tokenizer('1+2+3')); // true; okay
console.log('06', tokenizer('1+2-3+4')); // true; okay
console.log('07', tokenizer('+2-3+4')); // false; okay
console.log('08', tokenizer('(1)')); // false; okay
console.log('09', tokenizer('(1+2)')); // true; okay
console.log('10', tokenizer('1+2-(3+4)')); // true; okay
console.log('11', tokenizer('(1+2)-(3+4)')); // true; not okay
console.log('12', tokenizer('1+2(3+4)')); // false; okay
console.log('13', tokenizer('1+2+(3+4+5)')); // true; not okay
console.log('====================================');
