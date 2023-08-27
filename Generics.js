// Generics
/*
type TypeFactory<T> = T;
type XType1 = TypeFactory<string>;
type XType2 = TypeFactory<number>;
type XType3 = TypeFactory<boolean>;


function toArray<T>(...arg: T[]): T[]{
    return arg;
}
toArray(1,2,3);
toArray('a', 'a');
*/
// Constraints
/*
function len<T extends {length: number}>(arg: T){
    console.log(arg.length);
}
len('abc');
len(['abc']);
len({length: 10});
//len(10);
//len(true);
*/
// Keyof
/*
type WindowProp = keyof Window;

const myValue: WindowProp = "alert";

interface PC {
    brand: string;
    year: number;
}

type Type1 = keyof PC;
const val1: Type1 = "brand";


type Tuple1 = keyof [string, number];
const val2: Tuple1 = "0";
*/
// Constraints of Keyof
/*
function prop<T, U extends keyof T>(key: U, obj: T){
    console.log(obj[key]);
}
*/
/*
interface Laptop  {
    brand: string;
}
type F = Laptop["brand"];
*/
/*
const obj1 = {a: 1, b: 2, c: 3};
prop('a', obj1);
//prop('d', obj1); Error
*/
// Default Value of Type
/*
interface AnyObject {
    [key: string]: unknown;
}

async function someRequest<T = AnyObject>(url: string): Promise<T>{
    const response = await fetch(url);

    console.log(response);
    return response.json();
}

const data = someRequest('https://jsonplaceholder.typicode.com/todos/1');
*/
// Type Scope
function TupleCreatorFirstArg(first) {
    return function (second) {
        return [first, second];
    };
}
var Tuple1 = TupleCreatorFirstArg(1);
var val2 = Tuple1(2);
console.log(val2);
