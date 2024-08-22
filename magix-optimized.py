from random import randint
from functools import lru_cache

# Optimization 9: Using Memoization for solved subproblems
@lru_cache(None)
def solve(goal, numbers_tuple):
    ops = ["+", "*", "/", "-"]
    numbers = list(numbers_tuple)  # Convert tuple back to list for mutability

    # Optimization 2: Avoid eval() as much as possible
    if len(numbers) == 1:
        if numbers[0] == goal:
            return numbers[0]
        else:
            return False

    # Optimization 10: Avoid excessive looping by eliminating redundant operations
    for i in range(len(numbers) - 1):
        if i > 0 and numbers[i] == numbers[i - 1]:
            continue
        for j in range(i + 1, len(numbers)):
            if j - i > 1 and numbers[j] == numbers[j - 1]:
                continue
            last_result = -1
            for k in range(4):
                new_numbers = calculate(numbers, i, ops[k], j)
                if new_numbers is None:  # Invalid operation, skip it
                    continue

                new_result = new_numbers[-1]  # Last element is already the new value
                if new_result == last_result or (new_result % 1 != 0 and ops[k] != '/'):
                    continue

                resort(new_numbers)
                # Optimization 9: Recursion with caching by converting list to tuple
                equation = solve(goal, tuple(new_numbers))

                if equation:
                    return equation
                else:
                    last_result = new_result

    return False

def calculate(array, x, operator, y):
    # Prevent division by zero without using eval
    if operator == "/" and (array[x] == 0 or array[y] == 0):
        return None

    returning = array[:]
    if operator == "+":
        new_value = array[x] + array[y]
    elif operator == "-":
        new_value = array[y] - array[x]
    elif operator == "*":
        new_value = array[x] * array[y]
    elif operator == "/":
        if array[x] == 0 or array[y] == 0:  # Redundant check just to be safe
            return None
        new_value = array[y] / array[x]

    # Replace the two numbers with the new result
    returning.pop(max(x, y))  # Remove the higher index first
    returning.pop(min(x, y))  # Then the lower index
    returning.append(new_value)
    return returning

def resort(array):
    # Sort array without repeated eval() calls
    array.sort(key=lambda x: x)
    return array

# Example usage (small scale)
def test():
    numbers = [randint(1, 6) for _ in range(5)]
    goal = randint(1, 6) * 10 + randint(1, 6)
    result = solve(goal, tuple(numbers))
    return result

n = 1_000_000
count_succ = sum([1 if test() else 0 for _ in range(n)])
print(f"There were {count_succ} solvable outcomes out of {n} outcomes so about {count_succ/n*100:.2f} percent.")

