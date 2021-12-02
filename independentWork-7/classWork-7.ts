//#1 Напишите интерфейсы для 3-х обьектов ниже

interface Obj1 {
  prop1: string,
  prop2: string,
  prop3: object
}

const obj1: Obj1 = {
  prop1: "prop1",
  prop2: "prop2",
  prop3: () => "prop3"
};

interface Obj2 {
  prop4: number,
  prop5: object,
  prop6: object,
  prop7: object,
  prop8: boolean
}
const obj2: Obj2 = {
  prop4: 45,
  prop5: Object.keys(obj1),
  prop6: () => +"100" + +"100",
  prop7: () => () => +"100" - +"100" + "50",
  prop8: !(() => +"55" * 20 + "150")
};


// в obj3 нужно передать в дженерик - интерфейс типы
// которые будет возвращать функция propObj4

interface Obj3<Type>{
  propObj1: number,
  propObj2: () => () => Obj1,
  propObj3: () => [Obj1, Obj2],
  propObj4: (num: number) => Type
  
}

const obj3: Obj3<number | string | Obj1 | [string, number, Obj2]> = {
  propObj1: 43,
  propObj2: () => () => obj1,
  propObj3: () => [obj1, obj2],
  propObj4: (num: number) => {
    if (num === 1) {
      return "num1";
    } else if (num === 2) {
      return 2;
    } else if (num === 3) {
      return obj1;
    } else {
      return ["1", 2, obj2];
    }
  }
};

//#2 работа с Untility Types
const unionObj = {
  key1: "key1",
  key2: "key2",
  key3: "key3",
  key4: "key4"
};
type unionKeys = Pick<typeof unionObj, 'key1' | 'key2'>
type unionKeys2 = Omit<typeof unionObj, 'key3' | 'key4'>

type unionKeys3 = Exclude<keyof typeof unionObj, 'key3' | 'key4'>
type unionKeys4 = Extract<keyof typeof unionObj, 'key1' | 'key2'>
//получить обьединение ключей 'key1' | 'key2'
// из обьекта unionObj
//type unionKeys = 

interface IBaseInterface {
  goodProp1: string;
  goodProp2: number;
  badProp1: string;
}

interface IBaseInherit extends IBaseInterface {
  goodProp3: string;
  goodProp4: number;
  badProp2: string;
}
type goodProps = Pick<IBaseInherit, "goodProp1" | "goodProp2" | "goodProp3" | "goodProp4">
type goodProps1 = Omit<IBaseInherit, "badProp1" | "badProp2">
// получить тип только с хорошими свойствами из IBaseInherit
//type goodProps = 

// получить тип этой функции
// и тип ее возвращаемого значения
const exampleHandler = () => ({
  exampleKey1: "exampleKey1",
  exampleKey2: 100,
  exampleKey3: "exampleKey3"
});

type TExampleHandler = typeof exampleHandler
type TExampleReturnType = ReturnType<typeof exampleHandler>

//#3
// передать функцию в typeFunction чтобы она полностью
// подходила под тип funcType

type funcType = (
  param: number
) =>
  | undefined
  | null
  | ((flag: boolean) => string | (() => Promise<(string | number)[]>));

const typeFunction = (func: funcType) => {
  func(1);
};

typeFunction((param: number) => {
    switch (param) {
    case 0:
      return undefined
    case 1:
      return null
    case 2:
      return (flag: boolean) => {
        if (flag) {return 'string'}
        return () => {
          return new Promise<(string | number)[]>((resolve, reject) => {
            if (!flag) {
              resolve(['string1','string2'])
            }
            else {
              reject()
            }
          })
        }
      }
    }
  }
);

//#4
// напишите тело класса чтобы имплеминитровать
// интерфейсы IImplement1 и IImplement2

interface IImplement1<T extends string | number> {
  name: string;
  randomProp: T;

  handler(param1: T, param2: T): T;

  handler2(param: string, param2: number): () => boolean;
}

interface IImplement2{
  handler3<T>(param: T): T[];

  handler4(): Promise<string>;
}


class Implementator implements IImplement1<string>, IImplement2 {
  name = 'string'
  randomProp = "1";
  handler(param1: string, param2: string): string {
    return 'str'
  }
  handler2(param: string, param2: number): () => boolean {
    return () => false
  }
  handler3<T>(param: T): T[] {
    return []
  };
  handler4(): Promise<string> {
    return new Promise<string>(resolve => {
      resolve('string1')
    })
  }
}