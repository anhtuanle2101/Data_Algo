class Solution:
    def checkPermutation(str1, str2):
        if len(str1) != len(str2):
            return False
        mp = map()
        for char in str1:
            if char not in mp:
                mp[char] = 1
            else:
                mp[char] += 1
        for char in str2:
            if char not in mp:
                return False
            else:
                mp[char] -= 1
                if mp[char] == 0:
                    del mp[char]
        return True
