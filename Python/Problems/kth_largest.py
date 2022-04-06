# first approach

def kth_largest1(arr, k):
    for i in range(k-1):
        arr.remove(max(arr)) 
    return max(arr)

# TC: O(kn)

# second approach

def kth_largest2(arr, k):
    n = len(arr)
    arr.sort()
    return arr[n-k]

# TC: O(nlogn)

# third approach heap

import heapq

def kth_largest3(arr, k):
    arr = [-element for element in arr]
    heapq.heapify(arr)
    for i in range(k-1):
        heapq.heappop(arr)
    return -heapq.heappop(arr)

# TC: O(n + klogn)