# # Global variable used as a pointer to traverse the given string
# scout_index = 0
#
# def balance_parens(str):
#     """We are given a string that may contain parentheses, numbers, and letters. Compile a new string that only contains balanced parentheses and
#         any letters/numbers in the order given
#
#     Args:
#         str (string): A given string that can contain letters, numbers, or parentheses
#
#     Returns:
#         string: A string that contains all letters, numbers, and balanced parentheses in the order given
#     """
#
#     # Split the given string into array of strings to evaluate
#     array_of_elements = list(str)
#
#     # Prepare an array that will be used to store all legal characters from the given string
#     answer_array = []
#
#     # Since we use a global variable - declare it here for later usage
#     global scout_index
#
#     # Loop through the elements from the array
#     for i in range(0, len(array_of_elements)):
#         # The current element from the array to evaluate
#         elem = array_of_elements[i]
#
#         # If scout index is less then the current index and it's an open paren
#         if scout_index < i and elem == "(":
#             # Can we find a legal closing paren for the current open paren?
#             if can_find_closing_parentheses(list(str), i + 1):
#                 # We found a balanced closing paren, add this open to the answer array
#                 answer_array.append(elem)
#             # If we didn't find the balanced closing paren for this open paren - then we don't add it to the answer array
#         # If we scouted ahead successfully or the elem is not a paren then add to answer array
#         elif scout_index >= i or elem != "(" and elem != ")":
#             answer_array.append(elem)
#
#     # reset scout index for the next time the function is called
#     scout_index = 0
#
#     # Join the array to make it a string
#     return "".join(answer_array)
#
#
# def can_find_closing_parentheses(array, starting_index):
#     """Scout ahead and try to find a legal closing parentheses for the current open parentheses, return true/false,
#        update scout_index if successful
#
#     Args:
#         array (array): Given array to scout in
#         starting_index (int): The next element in the array to be evaluated
#
#     Returns:
#         boolean: Did we find a legal closing parentheses for this element?
#     """
#
#     # Track any nested parentheses while finding a legal closing parentheses
#     nested = 0
#
#     # Loop through array starting at the starting index until we find a legal closing parentheses, or not
#     for i in range(starting_index, len(array)):
#         # Current element to be evaluated
#         elem = array[i]
#
#         # If the element is an open parentheses then it could be nested
#         if elem == "(":
#             nested += 1
#         # If the element is a closing parentheses and we have nested open parentheses
#         elif elem == ")" and nested > 0:
#             nested -= 1
#         # If the element is a closing parentheses and nested is 0 then
#             # we find a legal closing parentheses for the element in question
#         elif elem == ")" and nested == 0:
#             global scout_index
#             scout_index = i;
#             return True
#
#     # We didn't find a legal closing parentheses so return false
#     return False

def balance_parens(string_of_stuff):
    stack = []
    results_str = []
    for stuff in string_of_stuff:
        if stuff == "(":
            results_str.append(stuff)
            stack.append(len(results_str) - 1)
        elif stuff == ")":
            if len(stack) == 0:
                continue
            results_str.append(stuff)
            stack.pop()
        else:
            results_str.append(stuff)

    mega_results_str = ""
    for i in range(len(results_str)):
        result = results_str[i]
        if i not in stack:
            mega_results_str += result

    return mega_results_str


print(balance_parens("abc((d)e(fgh)(i)j(k"))
print(balance_parens("abc((d))e(fgh)(i)j(k"))
print(balance_parens("abc(d)e(fgh))(i)j)k"))
