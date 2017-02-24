let nativeType = (input) => Object.prototype.toString.call(input).match(/\[object (.+)\]/)[1];
let isArray  = (a) => nativeType(a) === 'Array';

let arrayExample  = [1,2,3,[45,76,32,[4,78,0,-45]],3,[[[[[25,67,1,-687,34,[[[[45,52,100,[[[33,25]]]],0.5]],3.45]]],78,2]]],2,1,78];

/**
 * Deep sumatory
 * Return the sumatory of an array with a deep walk.
 *
 * @param  {Array} input
 * @return {Numeric}
 */
function sumatory(input)
{
    let total = 0;

    input.forEach((a) => total += isArray(a) ? sumatory(a) : a);

    return total;
}

console.log('The result of deep sumatory is: ', sumatory(arrayExample));