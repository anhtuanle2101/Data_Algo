def intersection_of_two_arrays(arr1, arr2):
    new_set_1 = set(arr1)
    new_set_2 = set(arr2)
    for element in new_set_2.copy():
        if element not in new_set_1:
            new_set_2.remove(element)
    return new_set_2


print(intersection_of_two_arrays([1, 2, 2, 1], [2, 2]))
print(intersection_of_two_arrays([9, 5, 4], [9, 4, 9, 8, 4]))
