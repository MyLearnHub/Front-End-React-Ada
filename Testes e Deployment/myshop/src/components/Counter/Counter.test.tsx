import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Counter } from "./Counter";
import userEvent from "@testing-library/user-event";

describe("Counter > Unit tests", () => {
  it("should render Counter component correctly", () => {
    render(<Counter />);

    // const counterValueElement = screen.getByText("0");
    const counterValueElement = screen.getByRole("heading", { level: 1 });
    // const increaseButtonElement = screen.getAllByRole("button");
    const increaseButtonElement = screen.getAllByRole("button", {
      name: "Aumentar",
    });
    const decreaseButtonElement = screen.getAllByRole("button", {
      name: "Diminuir",
    });

    // expect(counterValueElement).toBeInTheDocument();
    expect(counterValueElement).toHaveTextContent("0");
    expect(increaseButtonElement).toBeInTheDocument();
    expect(decreaseButtonElement).toBeInTheDocument();
  });

  it("should decrease counter value when increase button is clicked", () => {
    // renderizamos o componente counter
    render(<Counter />);

    // Clicar no botão "Aumentar" para aumentar o valor do contador
    const counterValueElement = screen.getByRole("heading", { level: 1 });
    const decreaseButton = screen.getByRole("button", { name: "Diminuir" });

    userEvent.click(decreaseButton);

    // Espero que o valor do contador seja 1
    expect(counterValueElement).toHaveTextContent("-1");
  });

  it("should increase counter value when increase button is clicked", () => {
    // renderizamos o componente counter
    render(<Counter />);

    // Clicar no botão "Aumentar" para aumentar o valor do contador
    const increaseButton = screen.getByRole("button", { name: "Aumentar" });
    userEvent.click(increaseButton);

    const counterValueElement = screen.getByText("1", { exact: true });

    // Espero que o valor do contador seja 1
    expect(counterValueElement).toBeInTheDocument();
  });
});
