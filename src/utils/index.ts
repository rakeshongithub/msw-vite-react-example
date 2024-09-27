export const printNumber = (n: number) => {
  for (let i = 0; i < n; i++) {
    console.log(i);
  }
};

export const printString = (s: string) => {
  for (let i = 0; i < s.length; i++) {
    console.log(s[i]);
  }
};

export const printArray = <T>(a: T[]) => {
  for (const element of a) {
    console.log(element);
  }
};

export function printObject<T extends object>(o: T) {
  for (const [key, value] of Object.entries(o)) {
    console.log(key, value);
  }
}

printObject<{ a: number; b: string }>({ a: 1, b: "hello" });

printArray<string>(["a", "b", "c"]);
printArray<number>([1, 2, 3]);
printArray<boolean>([true, false, true]);
printArray([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
