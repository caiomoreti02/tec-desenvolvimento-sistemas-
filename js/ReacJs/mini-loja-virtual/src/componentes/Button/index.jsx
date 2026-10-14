export function AdicionarAoCarrinho({ setValor }) {
const addCar = () => {
    setValor((prev) => prev + 1);
  };

  return (
    <div>
      <button
        onClick={addCar}
        style={{
          padding: "10px 20px",
          fontSize: "10px",
          cursor: "pointer",
        }}
      >
        Adicionar ao Carrinho
      </button>
    </div>
  );
}