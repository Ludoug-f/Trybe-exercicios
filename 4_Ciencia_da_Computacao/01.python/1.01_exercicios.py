# Crie uma função que receba dois números e retorne o maior deles.

def highest_number(n1, n2):
    if n1 > n2:
        return n1
    return n2

print(highest_number(5, 10))



# Calcule a média aritmética dos valores contidos em uma lista.

number_list = [2, 4, 6, 8, 10]

def average(lst):
    counter = 0

    for number in lst:
        counter += number

    return counter / len(lst)

print(average(number_list))



# Crie uma função que receba uma lista de nomes e retorne o nome com a maior quantidade de caracteres. 
# Por exemplo, para ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"], o retorno deve ser "Fernanda".

name_list = ["José", "Lucas", "Nádia", "Fernanda", "Cairo", "Joana"]

def highest_name(lst):
    max_len = 0
    index = 0

    for i, name in enumerate(lst):
        if len(name) > max_len:
            max_len = len(name)
            index = i

    return lst[index]

# outra forma de fazer
def find_biggest_name(names):
    biggest_name = names[0]
    for name in names:
        if len(name) > len(biggest_name):
            biggest_name = name
    return biggest_name

print(highest_name(name_list))
print(find_biggest_name(name_list))