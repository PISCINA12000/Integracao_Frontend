import Pagina from "./componentes/layouts/Pagina.jsx";

function App() {
  return (
    <div className="App">
      <Pagina>
        <h1>Esta é a Página de Cadastro de Cliente</h1>
      </Pagina>
      <Pagina>
        <h1>Esta é a Página de Cadastro de Produtos</h1>
      </Pagina>
      <Pagina>
        <h1>Esta é a Página de Cadastro de Fornecedores</h1>
      </Pagina>
    </div>
  );
}

export default App;
