import random


def guess_num(x):
    random_number = random.randint(1, x)
    guess = 0
    while guess != random_number:
        guess = int(input(f"Your guess between 1 and {x}: "))
        if guess < random_number:
            print("Sorry, guess again. Too low.")
        elif guess > random_number:
            print("Sorry, guess again. Too high.")

    print(f"Yay, your guess is right. The answer is {guess}!")


guess_num(10)


def computer_guess(x):
    low = 1
    high = x
    feedback = ""
    guess = 0
    while feedback != "c":
        if low != high:
            guess = random.randint(low, high)
        else:
            guess = low
        feedback = input(
            f"Is {guess} too high (h), too low (l), or corret (c)??").lower()
        if feedback == "h":
            high = guess
        elif feedback == "l":
            low = guess
    print(f"Computer guess is right with the guess of {guess}")
