import { useState } from 'react';
import './App.css'
import { Header } from './componentes/Header';
import {  MainProdutos } from './componentes/MainP';


export function App() {

const [valor, setValor] = useState(0);

  const produtos = [
    {id: 1,nome: "Camiseta Básica",categoria: "Roupas",preco: 59.90,imagem: "blusa.jpg"},
    {id: 2,nome: "Calça Jeans",categoria: "Roupas",preco: 129.90,imagem: "calça.jpg"},
    {id: 3,nome: "Moletom",categoria: "Roupas",preco: 149.90,imagem: "moletom.jpg"},
    {id: 4,nome: "Jaqueta Jeans",categoria: "Roupas",preco: 189.90,imagem: "jaqueta.jpg"},
    {id: 5,nome: "Vestido Casual",categoria: "Roupas",preco: 119.90,imagem: "vestido.jpg"},
    {id: 6,nome: "Tênis Esportivo",categoria: "Calçados",preco: 249.90,imagem: "tênis.jpg"},
    {id: 7,nome: "Sandália",categoria: "Calçados",preco: 79.90,imagem: "sandália.jpg"},
    {id: 8,nome: "Bota de Couro",categoria: "Calçados",preco: 299.90,imagem: "bota.jpg"},
    {id: 9,nome: "Chinelo",categoria: "Calçados",preco: 39.90,imagem: "chinelo.jpg"},
    {id: 10,nome: "Tênis Casual",categoria: "Calçados",preco: 179.90,imagem: "tênis-casual.jpg"},
    {id: 11,nome: "Fone Bluetooth",categoria: "Eletrônicos",preco: 159.90,imagem: "fone-bluetooth.jpg"},
    {id: 12,nome: "Mouse sem Fio",categoria: "Eletrônicos",preco: 89.90,imagem: "mouse.jpg"},
    {id: 13,nome: "Teclado Mecânico",categoria: "Eletrônicos",preco: 229.90,imagem: "teclado.jpg"},
    {id: 14,nome: "Caixa de Som", categoria: "Eletrônicos",preco: 199.90,imagem: "caixa-som.jpg"},
    {id: 15,nome: "Carregador USB-C",categoria: "Eletrônicos",preco: 69.90,imagem: "carregador.jpg"},
    {id: 16,nome: "Mochila",categoria: "Acessórios",preco: 89.90,imagem: "mochila.jpg"},
    {id: 17,nome: "Relógio",categoria: "Acessórios",preco: 199.90,imagem: "relógio.jpg"},
    {id: 18,nome: "Óculos de Sol",categoria: "Acessórios",preco: 99.90,imagem: "óculos-sol.jpg"},
    {id: 19,nome: "Boné",categoria: "Acessórios",preco: 49.90,imagem: "boné.jpg"},
    {id: 20,nome: "Carteira",categoria: "Acessórios",preco: 59.90,imagem: "carteira.jpg"},
];

  return (
    <>
    <Header valor={valor} />

    <MainProdutos produtos={produtos} />
    

    </>
  )
}

