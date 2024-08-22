from random import randint

ops = ['+','-','*','/']

target = randint(1, 6) * 10 + randint(1, 6)
roll = sorted([randint(1, 6) for _ in range(5)])

def solve(goal, numbers):
    ops = ["+", "*", "/", "-"]

    if len(numbers) == 1:
        if eval(str(numbers[0])) == goal:
            return numbers[0]
        else:
            return False

    for i in range(len(numbers) - 1):
        if i > 0 and eval(str(numbers[i])) == eval(str(numbers[i-1])):
            continue
        for j in range(i + 1, len(numbers)):
            if j - i > 1 and eval(str(numbers[j])) == eval(str(numbers[j-1])):
                continue
            last_result = -1
            for k in range(4):
                new_numbers = calculate(numbers, i, ops[k], j)
                if new_numbers is None:  # Check for None which indicates an invalid operation
                    continue
                new_result = eval(str(new_numbers[-1]))
                if new_result == last_result or (new_result % 1 > 0 and ops[k] != '/'):  # Allow fractions only for division
                    continue

                resort(new_numbers)
                equation = solve(goal, new_numbers)

                if equation:
                    return equation
                else:
                    last_result = new_result

def calculate(array, x, operator, y):
    # Prevent division by zero
    if operator == "/" and (eval(str(array[x])) == 0 or eval(str(array[y])) == 0):
        return None

    returning = array[:]
    new_expression = f"({array[y]} {operator} {array[x]})"
    returning.pop(max(x, y))  # Remove the higher index first
    returning.pop(min(x, y))  # Then the lower index
    returning.append(new_expression)
    return returning

def resort(array):
    inserting = array.pop()
    insert_value = eval(inserting)
    for i in reversed(range(len(array) + 1)):
        if i == 0 or insert_value >= eval(str(array[i-1])):
            array.insert(i, inserting)
            break
    return array

print(f"TARGET: {target}")
print(f"ROLLED: {roll}")

equation = solve(target, roll)
print(f"EQUATN: {equation}")
