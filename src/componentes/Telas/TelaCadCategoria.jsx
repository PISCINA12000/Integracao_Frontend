import { Alert } from "react-bootstrap";
import Pagina from "../layouts/Pagina"
import FormCadCategoria from "./Formulario/FormCadCategoria";
export default function TelaCadCategoria(props){
    return(
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>
                        Cadastro de Categoria
                    </h2>
                </Alert>
                <FormCadCategoria/>
            </Pagina>
        </div>
    )
}