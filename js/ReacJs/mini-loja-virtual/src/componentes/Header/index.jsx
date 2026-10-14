import { CarrinhoNumbers, HeaderContainer } from "./styled";
import carrinhoDeCompras from '../../assets/carrinho-de-compras.png'


export function Header({ valor}) {
    
    return (
        <HeaderContainer>
            <CarrinhoNumbers><img src={carrinhoDeCompras} alt="" />
            <span>{valor}</span>
            </CarrinhoNumbers>
        </HeaderContainer>
    )
}