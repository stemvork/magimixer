import magix

target = magix.roll_target()
numbers = magix.roll_dice()

print(f"TARGET: {target}")
print(f"ROLLED: {numbers}")

equation = magix.solve(target, numbers)
print(f"EQUATN: {equation}")
