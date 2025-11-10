export function intToRomanNumeral(num: number): string {
  const RomanNumMap = new Map<number, string>();
  RomanNumMap.set(1000, 'M');
  RomanNumMap.set(500, 'D');
  RomanNumMap.set(100, 'C');
  RomanNumMap.set(50, 'L');
  RomanNumMap.set(10, 'X');
  RomanNumMap.set(5, 'V');
  RomanNumMap.set(1, 'I');

  let ans = '';

  RomanNumMap.forEach((val, key) => {
    while (num >= key) {
      ans += val;
      num -= key;
    }
  });

  // Replace invalid roman numeral patterns
  ans = ans.replace('DCCCC', 'CM'); // 900
  ans = ans.replace('CCCC', 'CD'); // 400
  ans = ans.replace('LXXXX', 'XC'); // 90
  ans = ans.replace('XXXX', 'XL'); // 40
  ans = ans.replace('VIIII', 'IX'); // 9
  ans = ans.replace('IIII', 'IV'); // 4

  return ans;
}

export const intToRomanNumeral2 = (num: number): string => {
  const RomanNumMap = new Map<number, string>();
  RomanNumMap.set(1000, 'M');
  RomanNumMap.set(900, 'CM');
  RomanNumMap.set(500, 'D');
  RomanNumMap.set(400, 'CD');
  RomanNumMap.set(100, 'C');
  RomanNumMap.set(90, 'XC');
  RomanNumMap.set(50, 'L');
  RomanNumMap.set(40, 'XL');
  RomanNumMap.set(10, 'X');
  RomanNumMap.set(9, 'IX');
  RomanNumMap.set(5, 'V');
  RomanNumMap.set(4, 'IV');
  RomanNumMap.set(1, 'I');
  let ans = '';

  RomanNumMap.forEach((val, key) => {
    while (num >= key) {
      ans += val;
      num -= key;
    }
  });
  return ans;
};

export const intToRomanNumeral3 = (num: number): string => {
  const romanNumMap: Record<string, number> = {
    M: 1000,
    D: 500,
    C: 100,
    L: 50,
    X: 10,
    V: 5,
    I: 1,
  };

  let ans = '';

  for (const key in romanNumMap) {
    // const val = romanNumMap[key];
    // console.log(`key: ${key}, val: ${val}`);
    while (num >= romanNumMap[key]) {
      ans += key;
      num -= romanNumMap[key];
    }
  }

  return replaceInvalidRomanNumerals(ans);
};

function replaceInvalidRomanNumerals(str: string): string {
  enum ShorcutRomanNumMap {
    DCCCC = 'CM', // 900
    CCCC = 'CD', // 400
    LXXXX = 'XC', // 90
    XXXX = 'XL', // 40
    VIIII = 'IX', // 9
    IIII = 'IV', // 4
  }

  for (const [key, value] of Object.entries(ShorcutRomanNumMap)) {
    // console.log(`Key: ${key}, Value: ${value}`);
    str = str.replace(key, value);
  }

  return str;
}

export const intToRomanNumeral4 = (num: number): string => {
  const val = [1000, 900, 500, 400, 100, 90, 50, 40, 10, 9, 5, 4, 1];
  const syms = [
    'M',
    'CM',
    'D',
    'CD',
    'C',
    'XC',
    'L',
    'XL',
    'X',
    'IX',
    'V',
    'IV',
    'I',
  ];

  let roman = '';
  for (let i = 0; i < val.length; i++) {
    while (num >= val[i]) {
      roman += syms[i];
      num -= val[i];
    }
  }
  return roman;
};
