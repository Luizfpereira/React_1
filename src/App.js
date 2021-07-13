import ListaDeNotas from "./components/ListaDeNotas";
import FormularioCadastro from "./components/FormularioCadastro/";
import "./assets/App.css";
import './assets/index.css';

function App() {
  return (
    <section className="conteudo">
      <FormularioCadastro />
      <ListaDeNotas />
    </section>
  );
}

export default App;
