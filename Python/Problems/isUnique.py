class Solution:
    def isUnique(self, str):
        if len(str) <= 1:
            return True
        #init set
        st = set()
        for char in str: # O(n)
            if char in st:
                return False
            else:
                st.add(char)
        return True

# O(n) time
# O(n) space