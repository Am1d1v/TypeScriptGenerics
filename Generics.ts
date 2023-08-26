
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

function len<T extends {length: number}>(arg: T){
    console.log(arg.length);   
}
len('abc');
len(['abc']);
len({length: 10});
//len(10);
//len(true);













