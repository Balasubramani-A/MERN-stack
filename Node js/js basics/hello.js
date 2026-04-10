//Number
let balance = 1000;
console.log(balance);
console.log(typeof (balance));

let anotherBalance = new Number(2000);
console.log(anotherBalance);
console.log(typeof (anotherBalance));
//[Number: 2000] -> Prints this because it is an object and not a primitive value

typeof (anotherBalance);
//mostly in js, everything is an object


//boolean
let isLoggedIn = true;
console.log(isLoggedIn);
let anotherLoggedIn = new Boolean(false);
console.log(anotherLoggedIn);
console.log(typeof (anotherLoggedIn));
//Not recommended to use the Boolean constructor as it creates an object and not a primitive value


//Null and undefined
let user = null;
console.log(user);
let anotherUser;
console.log(anotherUser);
console.log(typeof (user));
console.log(typeof (anotherUser));
//null is an object and undefined is undefined