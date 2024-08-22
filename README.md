# magimixer (stemvork)
After being introduced to the magimixer dice game... it had to become the next programming learning opportunity. Based on the example by volucris, we strive to implement the project in Python and expand on the project as we learn.

Features:
- [x] generate random numbers
- [x] start to port the solver
- [ ] reduce the number of parentheses
- [ ] expand operations: powers, faculty, modulo
- [ ] calculate the number of solutions
- [ ] ui? statistics? networking?

## Usage (Python)
```
python3 main.py
```

Example output:
```
TARGET: 64
ROLLED: [2, 3, 4, 4, 5]
EQUATN: ((4 * 4) * (5 - (3 - 2)))
Out of 1000 experiments, 902 were solvable and 98 were not solvable.
Percentage of solvable outcomes: 90.2
```

## Usage (Node)
```
node magix-node.mjs
```

Example output:
```
GOAL:     26
NUMBERS:  2,2,5,6,6
EQUATION: (((5 + 2) * 2) + (6 + 6))
Out of 1000 experiments, 886 were solvable, so about 88.6 percent.
```

# magimixer (volucris)

The hyperaddictive magimixer (a dice game) improved my arithmetics as a kid and can still keep me and my friends occupied for hours. Generating and solving these little puzzles provides a nice case for my very first github project and phonegap app.

The objective is to create the sum of the black dices using all 5 other dices exactly once by adding, substracting, multiplying and dividing, with as many parentheses as you need.
