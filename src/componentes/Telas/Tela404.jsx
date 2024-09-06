import { Container } from 'react-bootstrap';
import imagem404 from '../../assets/imagens/imagem404.png';
import Pagina from '../layouts/Pagina';

export default function Tela404(props){
    
    return(
        <Pagina>
            <Container>
                <img src={imagem404}/>
                <h1 className='text-center'>O recurso solicitado não existe</h1>
            </Container>
        </Pagina>
    );
}