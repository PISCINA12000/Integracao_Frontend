import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina"
import FormCadCliente from "./Formulario/FormCadCliente";
export default function TelaCadCliente(props){
    return(
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>
                        Cadastro de Cliente
                    </h2>
                </Alert>
                <FormCadCliente/>
            </Pagina>
        </div>
    )
}