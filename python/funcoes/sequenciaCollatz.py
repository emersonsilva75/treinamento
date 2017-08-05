# -*- coding: utf-8 -*-

# Sequencia de collatz / Collatz Sequence

# Também chamado de "o mais simples problema matemático impossível"  
# Se o numero for par fazemos uma divisao inteira por 2 (numero // 2), se o numero for impar
# muliplicamos por 3 e somamos o numero 1 -> ((3 x numero) + 1)
# iteramos com o resultado até chegar no resultado = 1

# It also called "the simplest mathematical problem impossible"
# If the number is an even number we divide the number by 2 and if the number is an odd number
# we multiplier the number by 3 and after add the value 1.
# we repeting the process until the result being equal 1

def collatz(number):
    if ((number % 2)== 0):
        number = (number // 2)
    else:
        number = ((3 * number) + 1)
    return number
# Processando e tratando erro no processamento
# Processing treating errors and exception
try:    
    number = int(input("Entre com um numero para gerar a sequencia de  Collatz : "))
    while(number > 1):
        number = collatz(number)
except ValueError:
    print("Valor inválido para cálculo")