from pymongo import MongoClient


client = MongoClient("mongodb://localhost:27017")


db = client["pokemonstats_db"]
colecao = db["pokemons"]

def listaPokemons():
    for pokemon in colecao.find():
        print(f"Nome: {pokemon['nome']}, \nVida: {pokemon['HP']} , \nAtack:{pokemon['atack']},\nDefesa:{pokemon['defesa']} ,\nSP_atack:{pokemon['SP_atack']} ,\nSP_defesa:{pokemon['SP_defesa']} ,\nVelocidade:{pokemon['velocidade']} ,\nTipo:{pokemon['tipo']}")


def adicionaPokemons():
    nome_novo_pokemon = input("Entre com o nome do pokemon:")
    HP_novo_pokemon = input("Entre com a vida do pokemon:")
    atack_novo_pokemon = input("Entre com o atack do pokemon:")
    defesa_novo_pokemon = input("Entre com o defesa do pokemon:")
    SP_atack_novo_pokemon = input("Entre com o SP_atack do pokemon:")
    SP_defesa_novo_pokemon = input("Entre com o SP_defesa do pokemon:")
    velocidade_novo_pokemon = input("Entre com o velocidade do pokemon:")
    tipo_novo_pokemon = input("Entre com o tipo do pokemon:")
    novo_pokemon = {
        'nome': nome_novo_pokemon, 
        'HP': HP_novo_pokemon, 
        'atack': atack_novo_pokemon, 
        'defesa': defesa_novo_pokemon, 
        'SP_atack': SP_atack_novo_pokemon, 
        'SP_defesa': SP_defesa_novo_pokemon,
        'velocidade': velocidade_novo_pokemon,
        'tipo': [tipo_novo_pokemon]
        }

    colecao.insert_one(novo_pokemon)
    listaPokemons()


while True:
    print("Entre com a opção desejada:")
    print("1. Listar pokemon.")
    print("2. Cadastrar pokemon.")
    print("0. Sair.")
    opt = int(input())

    match opt:
        case 1:
            listaPokemons()
        case 2:
            adicionaPokemons()
        case 0:
            print("Saindo...")
            break
        case _:
            print("Opção inválida! Escolha novamente")

