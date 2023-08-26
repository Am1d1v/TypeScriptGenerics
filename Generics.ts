
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











