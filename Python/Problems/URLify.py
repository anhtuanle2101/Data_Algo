class Solution:
    def URLify(self, str, true_length):
        num_spaces = 0
        true_str = str[0:true_length]
        num_spaces = [num_spaces + 1 for char in true_str if char == " "]
        end_pointer = true_length - 1 + num_spaces * 2
        for (start_pointer, char) in enumerate(str):
            if (char == " "):
                str[end_pointer:end_pointer-3:-1] = "%20"
                end_pointer -= 3
            else:
                str[end_pointer] = str[start_pointer]
                end_pointer -= 1

# O(n) time
# O(n) space

