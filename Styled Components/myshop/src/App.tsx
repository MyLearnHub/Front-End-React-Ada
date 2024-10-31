import { Header } from "./components/Header/Header";
import { ProductCard } from "./components/ProductCard/ProductCard";
import { GlobalStyles } from "./styles/GlobalStyles";

// Componente Funcional do React
function App() {
  return (
    <>
      <Header />

      <ProductCard />
      
      <GlobalStyles />
    </>
  );
}

export default App;