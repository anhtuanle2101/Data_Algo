class Solution:
    def one_away(self, str1, str2):
        if len(str1) == len(str2):
            self.check_replace(str1, str2) #O(n)
        elif len(str1) - 1 == len(str2):
            self.check_insert(str1, str2) #O(n)
        elif len(str1) + 1 == len(str2):
            self.check_insert(str2, str1) #O(n)
    
    def check_replace(self, str1, str2):
        first_difference_found = False
        for i in range(len(str1)): #O(n)
            if str1[i] != str2[i]:
                if not first_difference_found:
                    first_difference_found = True
                else:
                    return False
        return first_difference_found
    
    def check_insert(self, str1, str2):
        index1 = 0
        index2 = 0
        while index2 < len(str2) and index1 < len(str1): #O(n)
            if str1[index1] != str2[index2]:
                if index1 != index2:
                    return False
                index2 += 1
            else:
                index1 += 1
                index2 += 1
        return True

# O(n) time
# O(1) space