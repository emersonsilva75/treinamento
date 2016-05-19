# Biblioteca / Library
import sys;

# Validar o inteiro / Validate the integer

def verificaint(num):
	if int(num):
		return True
	else:
		return False

#  Calcula o quadrado do numero / Calculate the square of the number 

def quadrado(num):
	valor = num ** 2
	return valor


#  Processa o texto  / Processing the string 

def caracteres(num):
	try:
		if verificaint(num) == True:
			if int(num) == 1:
				print "Numero Feliz"
				sys.exit()
			elif int(num) == 0:
				print "Numero Infeliz"
				sys.exit()
			else:
				num2 = str(num)
				qtd_caracteres = len(num2) 
				soma = 0
				for caracter in range(qtd_caracteres): 
					caracter_individual = num2[caracter]
					soma += quadrado(int(caracter_individual))
				caracteres(soma)				
		else:
			print "Numero invalido"
			sys.exit()
	except (RuntimeError,TypeError,NameError):
		print "Numero Infeliz" 
		sys.exit()

# Chamada ao programa / To run the program 

print caracteres(input('Entre com o valor do numero para avaliacao : '))







