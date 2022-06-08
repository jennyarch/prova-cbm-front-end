import { Container, ContainerMain, Overlay, Modal, DialogoCheck, BoxButton } from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import StepIcons from "../../Components/StepIcons/StepIcons";
import ImageCheck from '../../assets/img/check.svg';
import BtnVoltar from "../../Components/ButtonsFormulario/BtnVoltar";
import BtnProximo from "../../Components/ButtonsFormulario/BtnProximo";

export default function Main() {

  const navigate = useNavigate();

  let { id } = useParams()
  if (id === undefined) {
      id = 1;
  }

  return (
    <ContainerMain>
      <Container>
          <StepIcons />
          <Overlay>
            <Modal>
              <img src={ImageCheck} alt="Icone que mostra um conferido ou checado" />
              <DialogoCheck>Cadastrado com Sucesso!</DialogoCheck>
              <BoxButton>
                <BtnVoltar evento={() => navigate(-1)}>Voltar</BtnVoltar>
                <BtnProximo type="button" evento={() => navigate(`/perfil/${id}`)}>Ver Perfil</BtnProximo>
              </BoxButton>
            </Modal>
          </Overlay>
      </Container>
    </ContainerMain>
  );
}