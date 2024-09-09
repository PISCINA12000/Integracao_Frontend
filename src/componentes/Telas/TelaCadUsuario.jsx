import Pagina from "../layouts/Pagina"
import FormCadUsuario from "./Formulario/FormCadUsuario"
export default function TelaCadastroUsuario(props){
    return(
        <div>
            <Pagina>
                <Alert className="mt-02 mb-02 success text-center">
                    <h2>
                        Cadastro de Usuario
                    </h2>
                </Alert>
                <FormCadUsuario/>
            </Pagina>
        </div>
    )
}