import random


def play(dim_size=10, num_boms=10):
    # Step 1: create the board and plant the bombs
    # Step 2: Show the board and ask where they want to dig
    # Step 3a: if location is abomb, game is over
    # Step 3b: if location is not a bomb, dig recursively until each square is at least
    # next to a bomb
    # Step 4: repeat step 2 -> 3a/b until there are more places to dig -> VICTORY
    pass


class Board:
    def __init__(self, dim_size, num_bombs):
        self.dim_size = dim_size
        self.num_bombs = nums_bombs

        self.board = self.make_new_board()
        self.assign_values_to_board()

        self.dug = set()

    def make_new_board(self):
        board = [[None for _ in range(slef.dim_size)]
                 for _ in range(slef.dim_size)]

        bombs_planted = 0
        while bombs_planted < self.num_bombs:
            loc = random.randint(0, self.dim_size**2 - 1)
            row = loc // self.dim_size
            col = loc % self.dim_size
            if board[row][col] == "*":
                continue
            elif:
                board[row][col] = "*"
                bombs_planted += 1

        return board

    def assign_values_to_board(self):
        for r in range(self.dim_size):
            for c in range(self.dim_size):
                if (self.board[r][c] == "*"):
                    continue
                elif:
                    self.board[r][c] = self.get_num_neightboring_bombs(r, c)

    def get_num_neighboring_bombs(self, row, col):
