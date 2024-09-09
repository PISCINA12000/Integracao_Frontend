import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina"
import FormCadFornecedor from "./Formulario/FormCadFornecedor";
export default function TelaCadFornecedor(props){
    return(
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>
                        Cadastro de Fornecedor
                    </h2>
                </Alert>
                <FormCadFornecedor/>
            </Pagina>
        </div>
    )
}