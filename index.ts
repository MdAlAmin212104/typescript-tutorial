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



let users :  object[];
users = [];

let user1 : {
    name: string;
    age: number;
}
user1 = {name: 'john', age: 23};
users.push(user1);
let user2:{
    name: string;
    age: number;
}
user2 = {name: 'ali', age: 25}
users.push(user2);

for(const key in users){
    console.log(users[key]['name']);
}