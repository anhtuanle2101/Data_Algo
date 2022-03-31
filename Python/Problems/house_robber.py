def house_robber(nums):
    memo = dict()
    return Rob(0, nums, memo)


def Rob(n, nums, memo):
    if (n in memo.keys()):
        return memo[n]
    if (n >= len(nums)):
        return 0
    memo[n] = max(Rob(n+1, nums, memo), Rob(n+2, nums, memo) + nums[n])

    return memo[n]


print(house_robber([1, 2, 3, 1]))  # 4
print(house_robber([9, 7, 5, 3, 3, 10]))  # 24
print(house_robber([0, 0, 0, 0, 0, 2, 3]))  # 3
print(house_robber([10, 2, 0, 3, 0, 0, 20, 15, 0]))  # 33
