import time
import random


def naive_search(l, target):
    for i in range(len(l)):
        if l[i] == target:
            return i
    return -1


def binary_search(l, target):
    high = len(l)-1
    low = 0
    while low < high:
        mid = (high + low) // 2
        if l[mid] == target:
            return mid
        elif l[mid] > target:
            high = mid - 1
        elif l[mid] < target:
            low = mid + 1
    return -1


def binary_search_recursive(l, target, low=None, high=None):
    if low is None:
        low = 0
    if high is None:
        high = len(l)-1

    if low > high:
        return -1

    mid = (low + high) // 2

    if l[mid] == target:
        return mid
    elif l[mid] > target:
        return binary_search_recursive(l, target, low, mid - 1)
    elif l[mid] < target:
        return binary_search_recursive(l, target, mid + 1, high)


if __name__ == "__main__":
    # l = [1, 3, 5, 10, 12]
    # target = 10
    # print(naive_search(l, target))
    # print(binary_search_recursive(l, target))

    length = 10000
    sorted_list = set()
    while len(sorted_list) < length:
        sorted_list.add(random.randint(-3*length, 3*length))
    sorted_list = sorted(list(sorted_list))

    start = time.time()
    for target in sorted_list:
        naive_search(sorted_list, target)
    end = time.time()
    print(f"Naive search time is {(end-start)/length} seconds")
    start = time.time()
    for target in sorted_list:
        binary_search(sorted_list, target)
    end = time.time()
    print(f"Binary search time is {(end-start)/length} seconds")
