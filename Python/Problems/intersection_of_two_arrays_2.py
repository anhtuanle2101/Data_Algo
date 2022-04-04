class Solution(object):
    def intersect(self, arr1, arr2):
        """
        :type nums1: List[int]
        :type nums2: List[int]
        :rtype: List[int]
        """
        hash_map = dict()
        result = []
        for element in arr1:
            if hash_map.get(element) is None:
                hash_map[element] = 1
            else:
                hash_map[element] = hash_map.get(element) + 1
        for element in arr2:
            if hash_map.get(element) == 1:
                result.append(element)
                del hash_map[element]
            elif hash_map.get(element) > 1:
                result.append(element)
                hash_map[element] = hash_map.get(element) - 1

        return result
