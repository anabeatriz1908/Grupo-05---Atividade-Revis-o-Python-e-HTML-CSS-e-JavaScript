def contador(frase):
    frase.lower()

    palavras = frase.split()

    contagem = {}

    for palavra in palavras:
        if palavra in contagem:
            contagem[palavra]+= 1
        else:
            contagem[palavra] = 1

    return contagem

frase = input("Digite uma frase: ")

qnt_palavras = contador(frase)

print(qnt_palavras)
