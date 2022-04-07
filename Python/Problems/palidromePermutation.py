class Solution:
    def palindromePermutation(self, str):
        arr = [0 for i in range(26)]
        for char in str: #O(n)
            if (ord(char) >= 65 and ord(char) <= 90) or (ord(char) <= 97 and ord(char) <= 122):
                index = ord(char.lower()) - 97
                arr[index] += 1
        count_odd = 0
        for element in arr: # O(1)
            if element % 2 != 0:
                if len(str) % 2 == 0:
                    return False
                else:
                    count_odd += 1
                    if count_odd > 1:
                        return False
        return True