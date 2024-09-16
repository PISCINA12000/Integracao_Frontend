import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina"
import FormCadProduto from "./Formulario/FormCadProduto";
import { useState } from "react";
import TabelaProdutos from "./Tabelas/TabelaProdutos";
import { produtos } from "../../dados/mockProdutos.js"

export default function TelaCadProduto(props){
    const [exibirTabela, setExibirTabela] = useState(true);
    const [listaDeProdutos, setListaDeProdutos] = useState(produtos);

    return(
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>
                        Cadastro de Produto
                    </h2>
                </Alert>
                {
                    exibirTabela ?
                    <TabelaProdutos listaDeProdutos={listaDeProdutos} 
                                    setListaDeProdutos={setListaDeProdutos}
                                    setExibirTabela={setExibirTabela}/> :
                    <FormCadProduto listaDeProdutos={listaDeProdutos} 
                                    setListaDeProdutos={setListaDeProdutos}
                                    setExibirTabela={setExibirTabela}/>
                }
            </Pagina>
        </div>
    )
}