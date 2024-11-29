/**
 * Introduction to Web technologies
 * 
 * JavaScript - Conditions
 * 
 * https://github.com/egalli64/web-intro
 */

let flag = true;

if (flag) {
    console.log('flag is true');
}

let x;

if (x) {
    console.log('you are not expected to get here');
} else {
    console.log('undefined is falsy');
}

let value = 42;

switch (value) {
    case 1:
        console.log('Value is "one"');
        break;
    default:
        console.log('Value is not "one"');
        break;
}

let s = x ? 'you are not supposed to get this string' : 'x is undefined, and undefined is falsy';
console.log(s);
