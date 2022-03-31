def magical_number(num):
    if (num < 10):
        return True
    copy_num = num
    sum_of_digits_raise_to_kth = 0
    k = len(str(num))
    while (num > 0):
        last_digit = num % 10
        sum_of_digits_raise_to_kth += pow(last_digit, k)
        num = int(num / 10)
    return sum_of_digits_raise_to_kth == copy_num


print(magical_number(153))
print(magical_number(38))
