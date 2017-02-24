/**
 * Exists
 *
 * Check if a value exists in an object or array
 *
 * @param  {Number} search      The value to search
 * @param  {Mixed} source       Array or Object where the function search
 * @return {Boolean}
 */
function exists(search, source)
{
    for (let i in source)
    {
        if (source[i] === search)
        {
            return true;
        }
    }

    return false;
}

console.log('Number exists?', exists(1, [0,9,3,5,2,4,4,1]), exists(7, {value1: 1, value2: 3, value3: 9}));