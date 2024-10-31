import { FiShoppingCart } from "react-icons/fi";
import * as S from "./styles";

export const ProductCard: React.FC = () => {
  return (
    <S.Card>
      <S.ProductImage
        src="https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg"
        alt=""
      />

      <S.ProdutctTitle>Mens Casual Premium Slim Fit T-Shirts</S.ProdutctTitle>

      <S.ReviewPriceContainer>
        <S.Review>4.1</S.Review>
        <S.Price>$22.3</S.Price>
      </S.ReviewPriceContainer>

      <S.AddToCartButtonWrapper>
        <S.AddToCartButton>
          Adicionar ao carrinho
          <FiShoppingCart />
        </S.AddToCartButton>
      </S.AddToCartButtonWrapper>
    </S.Card>
  );
};
