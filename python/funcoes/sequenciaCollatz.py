# -*- coding: utf-8 -*-

# Função de collatz

def collatz():
    try:    
        number = int(input("Entre com um numero para gerar a sequencia de  Collatz : "))
        while(number > 1):
            if ((number % 2)== 0):
                number = (number // 2)
                print(number)
            else:
                number = ((3 * number) + 1)
                print(number)
        return number
    except ValueError:
        print("Valor inválido para cálculo")


collatz()