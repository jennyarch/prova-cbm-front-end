import { Brasao, Titulo,  BtnCadastro, BtnConcorrentes } from "./styles";
import ImagemBrasao from "../../assets/img/brasao.svg";
import { useNavigate } from "react-router-dom";
import ContainerComponent from "../../Components/ContainerMain/ContainerComponent";

export default function Main() {

  const navigate = useNavigate();
  return (
    <ContainerComponent>
      <Brasao
        src={ImagemBrasao}
        alt="Brasão do corpo de bombeiros do estado de Sergipe"
      />
      <Titulo>Trabalhe Conosco</Titulo>
      <BtnCadastro type="button" onClick={() => navigate('/formulario/')}>Cadastro</BtnCadastro>
      <BtnConcorrentes type="button" onClick={() => navigate('/candidatos/')}>Ver Concorrentes</BtnConcorrentes>
    </ContainerComponent>
    
  );
}
