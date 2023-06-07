#!/usr/bin/python3
import random
number = random.randint(-10000, 10000)
last_digit = abs(number) % 10
print(f"Last digit of {number}, followed by the number, followed by the string is {last_digit}, followed by the string and is ", end='')
if last_digit > 5:
    print("greater than 5")
elif last_digit == 0:
    print("0")
else:
    print("less than 6 and not 0")

print()
