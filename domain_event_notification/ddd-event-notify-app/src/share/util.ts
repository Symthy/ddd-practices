export const stringToEnum = <T extends string>(
  o: readonly T[],
): { [K in T]: K } => {
  return o.reduce((accumulator, currentValue) => {
    accumulator[currentValue] = currentValue;

    return accumulator;
  }, Object.create(null));
};

const Direction = stringToEnum(['North', 'South', 'East', 'West']);
type Direction = keyof typeof Direction;

// const a: Direction = Direction.North; // enumのようにアクセスできる。文字列リテラルだけではこれは不可能。
// const b: Direction = 'North'; // 直接の文字列でもコンパイルエラーにならない。enum型ではこれは不可能。
