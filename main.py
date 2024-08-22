import magix

target = magix.roll_target()
numbers = magix.roll_dice()

print(f"TARGET: {target}")
print(f"ROLLED: {numbers}")

equation = magix.solve(target, numbers)
print(f"EQUATN: {equation}")

n = 1_000
count_succ = 0
count_fail = 0
for i in range(n):
    target = magix.roll_target()
    numbers = magix.roll_dice()
    equation = magix.solve(target, numbers)
    if equation: 
        # print(f"[SUCC] {equation} for {target} and {numbers}")
        count_succ += 1
    else: 
        # print(f"[FAIL] {equation} for {target} and {numbers}")
        count_fail += 1

print(f"Out of {n} experiments, {count_succ} were solvable and {count_fail} were not solvable.")
print(f"Percentage of solvable outcomes: {count_succ / n * 100}")
