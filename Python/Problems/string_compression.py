class Solution:
    def string_compression(self, str):
        if len(str) <= 1:
            return str
        current = str[0]
        count = 1
        compressed = ""
        for i in range(1, len(str)): #O(n + k^2)
            if str[i] == current:
                count += 1
            else:
                compressed += f"{current}{count}"
                current = str[i]
                count = 1
                if i == len(str) - 1:
                    compressed += f"{current}{count}"
                    break
        return compressed if len(compressed) > len(str) else str
    