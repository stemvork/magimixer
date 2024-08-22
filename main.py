from random import randint

target = randint(1, 6) * 10 + randint(1, 6)
roll = sorted([randint(1, 6) for _ in range(5)])

print(f"TARGET: {target}")
print(f"ROLLED: {roll}")
