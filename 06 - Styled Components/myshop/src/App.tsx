import { Header } from "./components/Header/Header";
import { ProductsList } from "./components/ProductsList/ProductsList";
import { GlobalStyles } from "./styles/GlobalStyles";

// Componente Funcional do React
function App() {
  return (
    <>
      <Header />
      <ProductsList />
      <GlobalStyles />
    </>
  );
}

export default App;
