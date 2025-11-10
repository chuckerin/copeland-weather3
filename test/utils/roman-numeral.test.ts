import { describe, test, expect } from 'vitest';
import {
  intToRomanNumeral,
  intToRomanNumeral2,
  intToRomanNumeral3,
  intToRomanNumeral4,
} from '../../src/utils/roman-numeral';

describe('Test Convert Int to Roman Numeral', () => {
  test('Test 1, expect I', () => {
    expect(intToRomanNumeral(1)).toEqual('I');
  });

  test('Test 3, expect III', () => {
    expect(intToRomanNumeral(3)).toEqual('III');
  });

  test('Test 4, expect IV', () => {
    expect(intToRomanNumeral(4)).toEqual('IV');
  });

  test('Test 5, expect V', () => {
    expect(intToRomanNumeral(5)).toEqual('V');
  });

  test('Test 9, expect IX', () => {
    expect(intToRomanNumeral(9)).toEqual('IX');
  });

  test('Test 10, expect X', () => {
    expect(intToRomanNumeral(10)).toEqual('X');
  });

  test('Test 40, expect XL', () => {
    expect(intToRomanNumeral(40)).toEqual('XL');
  });

  test('Test 49, expect XLIX', () => {
    expect(intToRomanNumeral(49)).toEqual('XLIX');
  });

  test('Test 57, expect LVII', () => {
    expect(intToRomanNumeral(57)).toEqual('LVII');
  });

  test('Test 93, expect XCIII', () => {
    expect(intToRomanNumeral(93)).toEqual('XCIII');
  });

  test('Test 120, expect CXX', () => {
    expect(intToRomanNumeral(120)).toEqual('CXX');
  });

  test('Test 403, expect CDIII', () => {
    expect(intToRomanNumeral(403)).toEqual('CDIII');
  });

  test('Test 516, expect DXVI', () => {
    expect(intToRomanNumeral(516)).toEqual('DXVI');
  });

  test('Test 951, expect CXX', () => {
    expect(intToRomanNumeral(120)).toEqual('CXX');
  });

  test('Test 1494, expect MCDXCIV', () => {
    expect(intToRomanNumeral(1494)).toEqual('MCDXCIV');
  });

  test('Test 2273, expect MMCCLXXIII', () => {
    expect(intToRomanNumeral(2273)).toEqual('MMCCLXXIII');
  });

  test('Test 3999, expect MMMCMXCIX', () => {
    expect(intToRomanNumeral(3999)).toEqual('MMMCMXCIX');
  });

  // this is by far, my most clever test case
  test('Test 1, 1000, 51, 6, & 500, expect I M LIVID', () => {
    const result =
      intToRomanNumeral(1) +
      ' ' +
      intToRomanNumeral(1000) +
      ' ' +
      intToRomanNumeral(51) +
      intToRomanNumeral(6) +
      intToRomanNumeral(500);
    expect(result).toBe('I M LIVID');
  });
});

describe('Test Convert Int to Roman Numeral 2', () => {
  test('Test 1, expect I', () => {
    expect(intToRomanNumeral2(1)).toEqual('I');
  });

  test('Test 3, expect III', () => {
    expect(intToRomanNumeral2(3)).toEqual('III');
  });

  test('Test 4, expect IV', () => {
    expect(intToRomanNumeral2(4)).toEqual('IV');
  });

  test('Test 5, expect V', () => {
    expect(intToRomanNumeral2(5)).toEqual('V');
  });

  test('Test 9, expect IX', () => {
    expect(intToRomanNumeral2(9)).toEqual('IX');
  });

  test('Test 10, expect X', () => {
    expect(intToRomanNumeral2(10)).toEqual('X');
  });

  test('Test 40, expect XL', () => {
    expect(intToRomanNumeral2(40)).toEqual('XL');
  });

  test('Test 49, expect XLIX', () => {
    expect(intToRomanNumeral2(49)).toEqual('XLIX');
  });

  test('Test 57, expect LVII', () => {
    expect(intToRomanNumeral2(57)).toEqual('LVII');
  });

  test('Test 93, expect XCIII', () => {
    expect(intToRomanNumeral2(93)).toEqual('XCIII');
  });

  test('Test 120, expect CXX', () => {
    expect(intToRomanNumeral2(120)).toEqual('CXX');
  });

  test('Test 403, expect CDIII', () => {
    expect(intToRomanNumeral2(403)).toEqual('CDIII');
  });

  test('Test 516, expect DXVI', () => {
    expect(intToRomanNumeral2(516)).toEqual('DXVI');
  });

  test('Test 951, expect CXX', () => {
    expect(intToRomanNumeral2(120)).toEqual('CXX');
  });

  test('Test 1494, expect MCDXCIV', () => {
    expect(intToRomanNumeral2(1494)).toEqual('MCDXCIV');
  });

  test('Test 2273, expect MMCCLXXIII', () => {
    expect(intToRomanNumeral2(2273)).toEqual('MMCCLXXIII');
  });

  test('Test 3999, expect MMMCMXCIX', () => {
    expect(intToRomanNumeral2(3999)).toEqual('MMMCMXCIX');
  });

  // this is by far, my most clever test case
  test('Test 1, 1000, 51, 6, & 500, expect I M LIVID', () => {
    const result =
      intToRomanNumeral2(1) +
      ' ' +
      intToRomanNumeral2(1000) +
      ' ' +
      intToRomanNumeral2(51) +
      intToRomanNumeral2(6) +
      intToRomanNumeral2(500);
    expect(result).toBe('I M LIVID');
  });
});

describe('Test Convert Int to Roman Numeral 3', () => {
  test('Test 1, expect I', () => {
    expect(intToRomanNumeral3(1)).toEqual('I');
  });

  test('Test 3, expect III', () => {
    expect(intToRomanNumeral3(3)).toEqual('III');
  });

  test('Test 4, expect IV', () => {
    expect(intToRomanNumeral3(4)).toEqual('IV');
  });

  test('Test 5, expect V', () => {
    expect(intToRomanNumeral3(5)).toEqual('V');
  });

  test('Test 9, expect IX', () => {
    expect(intToRomanNumeral3(9)).toEqual('IX');
  });

  test('Test 10, expect X', () => {
    expect(intToRomanNumeral3(10)).toEqual('X');
  });

  test('Test 40, expect XL', () => {
    expect(intToRomanNumeral3(40)).toEqual('XL');
  });

  test('Test 49, expect XLIX', () => {
    expect(intToRomanNumeral3(49)).toEqual('XLIX');
  });

  test('Test 57, expect LVII', () => {
    expect(intToRomanNumeral3(57)).toEqual('LVII');
  });

  test('Test 93, expect XCIII', () => {
    expect(intToRomanNumeral3(93)).toEqual('XCIII');
  });

  test('Test 120, expect CXX', () => {
    expect(intToRomanNumeral3(120)).toEqual('CXX');
  });

  test('Test 403, expect CDIII', () => {
    expect(intToRomanNumeral3(403)).toEqual('CDIII');
  });

  test('Test 516, expect DXVI', () => {
    expect(intToRomanNumeral3(516)).toEqual('DXVI');
  });

  test('Test 951, expect CXX', () => {
    expect(intToRomanNumeral3(120)).toEqual('CXX');
  });

  test('Test 1494, expect MCDXCIV', () => {
    expect(intToRomanNumeral3(1494)).toEqual('MCDXCIV');
  });

  test('Test 2273, expect MMCCLXXIII', () => {
    expect(intToRomanNumeral3(2273)).toEqual('MMCCLXXIII');
  });

  test('Test 3999, expect MMMCMXCIX', () => {
    expect(intToRomanNumeral3(3999)).toEqual('MMMCMXCIX');
  });

  // this is by far, my most clever test case
  test('Test 1, 1000, 51, 6, & 500, expect I M LIVID', () => {
    const result =
      intToRomanNumeral3(1) +
      ' ' +
      intToRomanNumeral3(1000) +
      ' ' +
      intToRomanNumeral3(51) +
      intToRomanNumeral3(6) +
      intToRomanNumeral3(500);
    expect(result).toBe('I M LIVID');
  });
});

describe('Test Convert Int to Roman Numeral 4', () => {
  test('Test 1, expect I', () => {
    expect(intToRomanNumeral4(1)).toEqual('I');
  });

  test('Test 3, expect III', () => {
    expect(intToRomanNumeral4(3)).toEqual('III');
  });

  test('Test 4, expect IV', () => {
    expect(intToRomanNumeral4(4)).toEqual('IV');
  });

  test('Test 5, expect V', () => {
    expect(intToRomanNumeral4(5)).toEqual('V');
  });

  test('Test 9, expect IX', () => {
    expect(intToRomanNumeral4(9)).toEqual('IX');
  });

  test('Test 10, expect X', () => {
    expect(intToRomanNumeral4(10)).toEqual('X');
  });

  test('Test 40, expect XL', () => {
    expect(intToRomanNumeral4(40)).toEqual('XL');
  });

  test('Test 49, expect XLIX', () => {
    expect(intToRomanNumeral4(49)).toEqual('XLIX');
  });

  test('Test 57, expect LVII', () => {
    expect(intToRomanNumeral4(57)).toEqual('LVII');
  });

  test('Test 93, expect XCIII', () => {
    expect(intToRomanNumeral4(93)).toEqual('XCIII');
  });

  test('Test 120, expect CXX', () => {
    expect(intToRomanNumeral4(120)).toEqual('CXX');
  });

  test('Test 403, expect CDIII', () => {
    expect(intToRomanNumeral4(403)).toEqual('CDIII');
  });

  test('Test 516, expect DXVI', () => {
    expect(intToRomanNumeral4(516)).toEqual('DXVI');
  });

  test('Test 951, expect CXX', () => {
    expect(intToRomanNumeral4(120)).toEqual('CXX');
  });

  test('Test 1494, expect MCDXCIV', () => {
    expect(intToRomanNumeral4(1494)).toEqual('MCDXCIV');
  });

  test('Test 2273, expect MMCCLXXIII', () => {
    expect(intToRomanNumeral4(2273)).toEqual('MMCCLXXIII');
  });

  test('Test 3999, expect MMMCMXCIX', () => {
    expect(intToRomanNumeral4(3999)).toEqual('MMMCMXCIX');
  });

  // this is by far, my most clever test case
  test('Test 1, 1000, 51, 6, & 500, expect I M LIVID', () => {
    const result =
      intToRomanNumeral4(1) +
      ' ' +
      intToRomanNumeral4(1000) +
      ' ' +
      intToRomanNumeral4(51) +
      intToRomanNumeral4(6) +
      intToRomanNumeral4(500);
    expect(result).toBe('I M LIVID');
  });
});
