import { Header } from "./components/Header/Header";
import "./styles/global.css";
import { Tasks } from "./components/Tasks/Tasks";
import { TasksProvider } from "./context/TasksContext";
// import { Refs } from "./components/Concepts/Refs";
// import { Memoization } from "./components/Concepts/Memoization";

function App() {
  // const [toggle, setToggle] = useState(false);

  // useEffect(() => {
  //   console.log("Executando a função useEffect...");

  //   // componentWillUnmount => Cleanup Function
  //   return () => {
  //     console.log(
  //       "Isso aqui vai ser executado quando o componente App for desmontado da tela."
  //     );
  //   };
  // }, [toggle]);

  //  O useEffect será disparado sempre que alguma variável do array de
  //  dependências for alterada
  //  Por padrão, sempre o useEffect será disparado após a montagem do componente
  //  (componentDidMount)
  return (
    <TasksProvider>
      <Header />
      <Tasks />
      {/* <Refs /> */}
      {/* <Memoization
        financialData={{ incomes: [50, 30, 20], outcomes: [5, 8, 4] }}
      /> */}
      {/* <button onClick={() => setToggle(!toggle)}>Toggle</button> */}
    </TasksProvider>
  );
}

export default App;
