console.log('hello typescript');
console.log('Now I start typescript learning');
var userName = 'md al amin islam';
console.log(userName);
function Display() {
    console.log('Hi, this is displaying...');
}
Display();
function total(a, b) {
    return a + b;
}
console.log(total(125, 20));
var userId;
userId = '01';
userId = 3;
userId = true;
console.log(userId);
var users;
users = [];
var user1;
user1 = { name: 'john', age: 23 };
users.push(user1);
var user2;
user2 = { name: 'ali', age: 25 };
users.push(user2);
for (var key in users) {
    console.log(users[key]['name']);
}
var User = /** @class */ (function () {
    function User(userName, userId) {
        this.userName = userName;
        this.userId = userId;
    }
    User.prototype.display = function () {
        console.log("Name: ".concat(this.userName, ", UserId: ").concat(this.userId));
    };
    return User;
}());
var userObj = new User('John Doe', 1);
userObj.display();
