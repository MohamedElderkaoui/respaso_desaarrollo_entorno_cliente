numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

# Define a function to filter even numbers
def is_even(number):
    return number % 2 == 0

# Use filter() to filter even numbers from the list

even_numbers = list(filter(is_even, numbers))
# pasa lista a mapa
print(list(map(lambda x: x * 2, even_numbers)))
# [4, 8, 12, 16, 20]

