console.log('hello typescript');
console.log('Now I start typescript learning');
let userName: string = 'md al amin islam';
console.log(userName);

function Display(): void {
    console.log('Hi, this is displaying...');   
}

Display();

function total(a: number, b: number){
    return a + b;
}

console.log(total(125,20));

let userId : number | string | boolean;
userId = '01';
userId = 3;
userId = true;

console.log(userId);
