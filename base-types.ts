// 基础数据类型

let isDone: boolean = false;

let age: number = 323;
let binaryNumber: number = 0b1111;

let firstName: string = "viking";
let message: string = `Hello, ${firstName}, age is ${age}`;

let u: undefined = undefined;
let n: null = null;

// any type & union type

let notSure: any = 4;
notSure = "maybe it is a string";
notSure = true;
// notSure.getName(); // run error

let numberOrString: string | number = 234;
numberOrString = "234";

// array

let arrOfNumbers: number[] = [1, 2, 3, 4];
arrOfNumbers.push(12);

function test() {
    console.log(arguments);
}

type tuple = [string, number];
const myTuple: tuple = ["123", 12];

// interface

interface Person {
    readonly id: number;
    name: string;
    age: number;
    school?: string;
}

let viking: Person = {
    id: 1234,
    name: "viking",
    age: 18,
};
// viking.id = 111 can't
// readonly 是在属性上，const 是在变量上

// function 与类型推测

const add = function (x: number, y: number, z?: number): number {
    if (typeof z === "number") {
        return x + y + z;
    } else {
        return x + y;
    }
};

let sumTwo = add(2, 3);
let sumThree = add(2, 3, 4);

const add2: (x: number, y: number, z?: number) => number = add;

// Class 类，继承与初始化继承

class Animal {
    name: string;
    constructor(name: string) {
        this.name = name;
    }
    run() {
        return `${this.name} is running`;
    }
}

const snake = new Animal("lily");
console.log(snake.run());

class Dog extends Animal {
    bark() {
        return `${this.name} is barking`;
    }
}

const xiaobao = new Dog("xiaobao");
console.log(xiaobao.bark());

class Cat extends Animal {
    constructor(name) {
        super(name);
        console.log(this.name);
    }
    run() {
        return "Meow, " + super.run();
    }
}
const maomao = new Cat("maomao");
console.log(maomao.run());

// class 类修饰符号public(公开) | private（不可继承） | protected（可继承可写）| readonly（公开只读）

// 类 行为抽象

interface Radio {
    switchRadio(triggerL: boolean): void;
}

interface Battery {
    checkBatteryStatus();
}

interface RadioWithBattery extends Radio {
    charge();
    checkBatteryStatus();
}

class Car implements Radio {
    switchRadio() {}
}

class CellPhone implements Radio, RadioWithBattery {
    charge() {}
    switchRadio() {}
    checkBatteryStatus() {}
}

// 枚举 直接赋值

enum Direction {
    UP,
    DOWN,
    LEFT,
    RIGHT,
}
console.log(Direction.UP);
// console.log(Direction)

if ("UP" === Direction[0]) {
    console.log("go up");
}
//{
//     '0': 'UP',
//     '1': 'DOWN',
//     '2': 'LEFT',
//     '3': 'RIGHT',
//     UP: 0,
//     DOWN: 1,
//     LEFT: 2,
//     RIGHT: 3
//}

// generics 泛型，函数名称后面加尖括号，以及类型占位符

function echo<T>(arg: T): T {
    return arg;
}

const resultNumber = echo(123);
const resultString = echo("123");
const reusltBoolean = echo(true);

function swap<T, U>(tuple: [T, U]): [U, T] {
    return [tuple[1], tuple[0]];
}
const result = swap(["string", 123]);
console.log(result);

// 约束泛型, 函数和参数返回值中使用泛型

function echoWithArr<T>(arg: T[]): T[] {
    console.log(arg.length);
    return arg;
}

const arrs = echoWithArr([1, 2, 3]);

interface IWithLength {
    length: number;
}

function echoWithLength<T extends IWithLength>(arg: T): T {
    console.log(arg.length);
    return arg;
}
console.log(echoWithLength("str"));
console.log(echoWithLength({ length: 10, width: 34 }));
console.log(echoWithLength([1, 2, 3]));

// 泛型约束，在类名称后添加泛型

class Queue<T> {
    private data: T[] = [];

    push(item: T) {
        return this.data.push(item);
    }

    pop(): T | undefined {
        return this.data.shift();
    }
}
const queue = new Queue<number>();
queue.push(1);
queue.push(232);
console.log(queue);
console.log(queue.pop()?.toFixed());
console.log(queue.pop()?.toFixed());

const queueStr = new Queue<string>();
queueStr.push("str");
console.log(queueStr.pop()?.length);

interface keyPair<T, U> {
    key: T;
    value: U;
}

let kp1: keyPair<number, string> = { key: 123, value: "123" };
let kp2: keyPair<string, number> = { key: "str", value: 123 };

let arr: number[] = [1, 2, 3];
let arrTwo: Array<number> = [1, 3, 2];

interface IPlus<T> {
    (a: T, b: T, c: T): T;
}

function plus(a: number, b: number, c: number): number {
    return a + b + c;
}
function connect(a: string, b: string, c: string): string {
    return a + b + c;
}
const plusNumber: IPlus<number> = plus;
const connectString: IPlus<string> = connect;

// 类型别名 alias
type PlusType<T> = (a: T, b: T, c: T) => T;
function sum(x: number, y: number, z: number): number {
    return x + y + z
}

const sum3: PlusType<number> = sum

type NameResolver = () => string
type NameOrResolver = string | NameResolver
function getName(n: NameOrResolver): string {
    if (typeof n === 'string') {
        return n
    } else {
        return n()
    }
}

// type assertion 类型断言

function getLength(input: string | number): number {
    // 此时更清楚自己的需求
    // const str = input as String
    // if(str.length) {
    //     return str.length
    // } else {
    //     const number = input as Number
    //     return number.toString().length
    // }
    if ((<string>input).length) {
        return (<string>input).length
    } else {
        return input.toString().length
    }
}

