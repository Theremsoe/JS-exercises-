/**
 * Palindrome
 *
 * Retrive a string and check if this are a palindrome
 *
 * @param  {String}  phrase
 * @return {Boolean}
 */
function isPalindrome(phrase)
{
    phrase = phrase.replace(/\s/g, '').toLowerCase();

    return phrase === [].slice.call(phrase, 0).reverse().join('');
}

console.log('Is palindrome?:', isPalindrome('Yo soy'));