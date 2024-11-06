import { render, screen } from "@testing-library/react";
import { Cart } from "./Cart";
import { products } from "../../data/products";
import userEvent from "@testing-library/user-event";
import { removeProduct } from "../../redux/Cart/cart-slice";

const cart = products.slice(0, 2); // obtendo os dois primeiros produtos do array

const mockDispatch = jest.fn();

// Mock: tornar a biblioteca react-redux fake
jest.mock("react-redux", () => {
  return {
    useDispatch: () => {
      return mockDispatch;
    },
    useSelector: () => {
      return {
        cart: products
      }
    }
  };
});

describe("Cart > Unit tests", () => {
  it("should render an empty cart correctly", () => {
    render(<Cart showCart={true} cart={[]} />);

    const titleElement = screen.getByRole("heading", { level: 1 });
    const totalElement = screen.getByTestId("total");
    const cartListElement = screen.getByRole("list"); // ul

    expect(titleElement).toHaveTextContent("Carrinho");
    expect(totalElement).toHaveTextContent("$0");
    expect(cartListElement).toBeEmptyDOMElement();
  });

  it("should render a cart with two products", () => {
    render(<Cart showCart={true} cart={cart}></Cart>);

    const productsItemElements = screen.getAllByRole("listitem");
    const firstProductTitle = screen.getByText(products[0].title);
    const secondProductTitle = screen.getByText(products[1].title);

    expect(productsItemElements.length).toBe(2);
    expect(firstProductTitle).toBeInTheDocument();
    expect(secondProductTitle).toBeInTheDocument();
  });

  it("should remove product when remove button is clicked", () => {
    render(<Cart showCart={true} cart={[products[0]]}></Cart>);

    const removeProductButton = screen.getByRole("button", { name: "Remover" });

    userEvent.click(removeProductButton);

    expect(mockDispatch).toHaveBeenCalled();
    expect(mockDispatch).toHaveBeenCalledWith(removeProduct(products[0]));
  });
});
