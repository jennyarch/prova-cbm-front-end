import {
  ContainerMain,
  Container,
  Titulo,
  Label,
  BoxDados,
  LabelForm,
  Button
} from "./styles";
import SearchIcon from '@mui/icons-material/Search';
import BtnProximo from "../../Components/ButtonsFormulario/BtnProximo";
import { useNavigate, useParams } from "react-router-dom";

export default function ListaCandidatos() {

  const navigate = useNavigate();
  
  let { id } = useParams()
  if (id === undefined) {
      id = 1;
  }

  return (
    <ContainerMain>
      <Container>
        <BoxDados>
          <Titulo>Candidatos</Titulo>
          <LabelForm>
            <Label>Aurora Jesus</Label>
              <Button onClick={() => navigate('/perfil/1')}>
              <SearchIcon sx={{ mb: -1}}/>
                Ver</Button>
          </LabelForm>
        </BoxDados>
        <BtnProximo evento={() => navigate(-1)}>Voltar</BtnProximo>
      </Container>
    </ContainerMain>
  );
}
