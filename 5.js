/**
 * Is Number
 *
 * Check if an argument is a number
 *
 * @param  {Mixed}  number
 * @return {Boolean}
 */
function isNumber(number)
{
    return Object.prototype.toString.call(number) === '[object Number]';
}

console.log('Is a number?', isNumber(0.91883),  isNumber(new Number(3)), isNumber(new String('Lorem ipsum dolor.')));