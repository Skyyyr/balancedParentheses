/**
 * @private Only used within the file - don't edit manually
 * @param scoutIdx This is our 2nd pointer that is utilized when travsing the given array
 */
let scoutIdx = 0;

/**
 * @param str This is a given string that may contain (, ), letters, and numbers.
 * @returns a string of all letters, numbers, and balanced parentheses in the order given.
 */
balanceParens = (str) =>
{
    /**
     * @param splitString This is the given string turned into an array for evaluation
     */
    let splitString = str.split('');

    /**
     * @param answerArr Our array that we add to for all the legal characters from the given string
     */
    let answerArr = [];

    // Loop through the string array
    for (let i = 0; i < splitString.length; i++) {
        /**
         * @param element Current character under evaluation
         */
        const element = splitString[i];
        // If scoutIdx has not evaluated this character, and is a (
        if (scoutIdx < i && element === "(") {
            // Can we find a closing for this particular paren
            if (canFindClosingParentheses(splitString, i + 1)) {
                // We found it, add it to the answer array
                answerArr.push(element);
            }
            // If we returned false ^ then don't add to answer array
        // If the character is not a paren just add it
        } else if (element != "(" && element != ")") {
            answerArr.push(element);
        // If we have scouted ahead successfully (found balanced parens up to the idx) then add it - these are nested or a closer
        } else if (scoutIdx >= i && (element === ")" || element === "(")) {
            answerArr.push(element);
        }
    }

    // ScoutIdx has done it's job, set to 0 for the next time the function is called
    scoutIdx = 0;

    // Return the array as a string
    return answerArr.join('');
}

module.exports = { balanceParens }

/**
 * 
 * @param {array} array The array that will be scouted
 * @param {int} startingIndex This is the index that we will start searching at
 * @returns true or false if we can find a balanced parentheses within the array from the starting point.
 */
function canFindClosingParentheses(array, startingIndex) {
    /**
     * @param nested This is used to track any and all nested parentheses
     */
    let nested = 0;

    // Loop over the array at the starting idx
    for (let i = startingIndex; i < array.length; i++) {
        /**
         * @param element the current character being evaluated
         */
        const element = array[i];

        // If the element is an open then it might be nested so ++
        if (element === "(") {
            nested++;
        // If the element is a close and we have nested opens; --
        } else if (element === ")" && nested > 0) {
            nested--;
        // If the element is a close and any nested parens are balanced; true
        } else if (element === ")" && nested === 0) {
            scoutIdx = i;
            return true;
        }
    }

    // We reached the end and didn't balance nested; false
    return false;
}
