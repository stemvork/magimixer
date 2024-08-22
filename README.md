# magimixer (stemvork)
After being introduced to the magimixer dice game... it had to become the next programming learning opportunity. Based on the example by volucris, we strive to implement the project in Python and expand on the project as we learn.

Features:
- [x] generate random numbers
- [x] start to port the solver
- [ ] reduce the number of parentheses
- [ ] expand operations: powers, faculty, modulo
- [ ] calculate the number of solutions
- [ ] ui? statistics? networking?

Usage:
```
python3 main.py
```

Example output:
```
TARGET: 61
ROLLED: [1, 3, 3, 4, 5]
EQUATN: ((((5 * 3) + 1) * 4) - 3)
```

Statistics:
```
Out of 1000 experiments, 900 were solvable and 100 were not solvable.
Out of 1000 experiments, 913 were solvable and 87 were not solvable.
Out of 1000 experiments, 919 were solvable and 81 were not solvable.
Percentage of solvable outcomes: 90.0 91.3 91.9
```

# magimixer (volucris)

The hyperaddictive magimixer (a dice game) improved my arithmetics as a kid and can still keep me and my friends occupied for hours. Generating and solving these little puzzles provides a nice case for my very first github project and phonegap app.

The objective is to create the sum of the black dices using all 5 other dices exactly once by adding, substracting, multiplying and dividing, with as many parentheses as you need.
