import Pagina from "./componentes/layouts/Pagina.jsx";
import CadastroCliente from "./componentes/cadastros/CadastroCliente.jsx";
import CadastroFornecedor from "./componentes/cadastros/CadastroFornecedor.jsx";
import CadastroProduto from "./componentes/cadastros/CadastroProduto.jsx";
import CadastroUsuario from "./componentes/cadastros/CadastroUsuario.jsx";
import CadastroCategoria from "./componentes/cadastros/CadastroCategoria.jsx";

function App() {
  return (
    <div className="App">
      <Pagina>
        <CadastroCliente/>
      </Pagina>
      <Pagina>
        <CadastroFornecedor/>
      </Pagina>
      <Pagina>
        <CadastroProduto/>
      </Pagina>
      <Pagina>
        <CadastroUsuario/>
      </Pagina>
      <Pagina>
        <CadastroCategoria/>
      </Pagina>
    </div>
  );
}

export default App;
