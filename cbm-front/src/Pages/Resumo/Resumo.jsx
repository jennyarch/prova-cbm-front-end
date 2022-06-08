
import { Container, Titulo, ContainerMain, Label, BoxResumo, BoxButton} from "./styles";
import { useNavigate } from "react-router-dom";
import BtnVoltar from "../../Components/ButtonsFormulario/BtnVoltar";
import BtnProximo from "../../Components/ButtonsFormulario/BtnProximo";
import StepIcons from '../../Components/StepIcons/StepIcons';
import { useState } from "react";
import axios from "axios";

export default function Resumo() {

  const navigate = useNavigate();

  const initialValue = {
    resumo: ""
  }
  const [values, setValues] = useState(initialValue);

  function onChangeValue(e){
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  function direcionarCadastrado(e){
    e.preventDefault();

    axios.post("http://localhost:5000/perfil", values)
    .then((resposta) => {
      navigate("/cadastrado/");
    });
  }
  
  return (
    <ContainerMain>
      <Container onSubmit={direcionarCadastrado}>
        <StepIcons />
        <Titulo>Resumo</Titulo>
        <Label>Sobre</Label>
        <BoxResumo 
          name="resumo"
          required
          onChange={onChangeValue}
        />
        <BoxButton>
          <BtnVoltar evento={() => navigate(-1)}>Voltar</BtnVoltar>
          <BtnProximo type="submit">Enviar</BtnProximo>
        </BoxButton>
      </Container>
    </ContainerMain>
  );
}