import { useState } from 'react';
import './App.css'
import { Header } from './componentes/Header';
import {  MainProdutos } from './componentes/MainP';


export function App() {

const [valor, setValor] = useState(0);

  const produtos = [
    {id: 1,nome: "Camiseta Básica",categoria: "Roupas",preco: 59.90},
    {id: 2,nome: "Calça Jeans",categoria: "Roupas",preco: 129.90},
    {id: 3,nome: "Moletom",categoria: "Roupas",preco: 149.90},
    {id: 4,nome: "Jaqueta Jeans",categoria: "Roupas",preco: 189.90},
    {id: 5,nome: "Vestido Casual",categoria: "Roupas",preco: 119.90},
    {id: 6,nome: "Tênis Esportivo",categoria: "Calçados",preco: 249.90},
    {id: 7,nome: "Sandália",categoria: "Calçados",preco: 79.90},
    {id: 8,nome: "Bota de Couro",categoria: "Calçados",preco: 299.90},
    {id: 9,nome: "Chinelo",categoria: "Calçados",preco: 39.90},
    {id: 10,nome: "Tênis Casual",categoria: "Calçados",preco: 179.90},
    {id: 11,nome: "Fone Bluetooth",categoria: "Eletrônicos",preco: 159.90},
    {id: 12,nome: "Mouse sem Fio",categoria: "Eletrônicos",preco: 89.90},
    {id: 13,nome: "Teclado Mecânico",categoria: "Eletrônicos",preco: 229.90},
    {id: 14,nome: "Caixa de Som", categoria: "Eletrônicos",preco: 199.90},
    {id: 15,nome: "Carregador USB-C",categoria: "Eletrônicos",preco: 69.90},
    {id: 16,nome: "Mochila",categoria: "Acessórios",preco: 89.90},
    {id: 17,nome: "Relógio",categoria: "Acessórios",preco: 199.90},
    {id: 18,nome: "Óculos de Sol",categoria: "Acessórios",preco: 99.90},
    {id: 19,nome: "Boné",categoria: "Acessórios",preco: 49.90},
    {id: 20,nome: "Carteira",categoria: "Acessórios",preco: 59.90},
];

  return (
    <>
    <Header valor={valor} />

    <MainProdutos produtos={produtos} />
    

    </>
  )
}

