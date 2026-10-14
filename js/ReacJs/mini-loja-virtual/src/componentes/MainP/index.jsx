import { MainContainer, MealCard } from "./styled";

  export function MainProdutos({ produtos }) {
    return (
        <MainContainer>
            {produtos.map((produto) => (
  <MealCard key={produto.id}>
    <img src={produto.imagem} alt={produto.nome} />

    <span>{produto.categoria}</span>
    <h2>{produto.nome}</h2>
    <p>Preço: R$ {produto.preco.toFixed(2)}</p>
  </MealCard>
))}
        </MainContainer>
    )
}