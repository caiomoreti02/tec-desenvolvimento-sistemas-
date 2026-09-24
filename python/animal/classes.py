class Animal:
    def __init__(self,nome, idade):
        self.__nome = nome
        self.__idade = idade

    def getNome (self):
        return self.__nome
    
    def setNome (self, novoNome):
        self.__nome = novoNome
        return self.__nome

    def getIdade (self):
        return self.__idade

    def setIdade (self, novaIdade):
        self.__idade = novaIdade
        return self.__idade

    def emitir_som (self):
        return "Qualquer Som"

class Cao(Animal):
    def emitir_som (self):
        return f"{self.getNome()} diz: Au Au"

class Gato(Animal):
    def emitir_som (self):
        return f"{self.getNome()} diz: Miau Miau"

animal1 = Cao("Rex", 5)
animal2 = Gato("Viado", 5)


print(animal2.emitir_som())