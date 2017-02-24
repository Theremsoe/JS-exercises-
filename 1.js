/**
 * Max element
 *
 * Take an array and return the max element
 * @param  {Array} input
 * @return {Numeric}
 */
function max(input)
{
    if (Object.prototype.toString.call(input) !== '[object Array]' && input.length > 0)
    {
        throw "Input retrived is not an array or is a empty element";
    }

    return input.slice(0).sort().pop();
}

/** Start the demo */
let arrayExample     = [12,34,654,67,0,-345,78],

console.log('The max element is: ', max(arrayExample));