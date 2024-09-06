
import TelaCadUsuario from "./componentes/Telas/Formulario/FormCadUsuario.jsx";
import TelaCadCategoria from "./componentes/Telas/TelaCadCategoria.jsx";
import TelaCadCliente from "./componentes/Telas/TelaCadCliente.jsx";
import TelaCadFornecedor from "./componentes/Telas/TelaCadFornecedor.jsx";
import TelaCadProduto from "./componentes/Telas/TelaCadProduto.jsx";
import TelaMenu from "./componentes/Telas/TelaMenu.jsx";
import Tela404 from "./componentes/Telas/Tela404.jsx";
import { BrowserRouter,Route, Routes} from "react-router-dom";

function App() {
  return (
    <div className="App">
    <BrowserRouter>
      {
        //A ordem das rotas é importante
      }
      <Routes>

        <Route path="/categoria" element={<TelaCadCategoria/>}/>
        <Route path="/cliente" element={<TelaCadCliente/>}/>
        <Route path="/Fornecedor" element={<TelaCadFornecedor/>}/>
        <Route path="/produto" element={<TelaCadProduto/>}/>
        <Route path="/usuario" element={<TelaCadUsuario/>}/>
  
        <Route path="/" element={<TelaMenu/>}/>

        <Route path="*" element={<Tela404/>}/>
      </Routes>
      


    </BrowserRouter>
      
      
    </div>
  );
}

export default App;
