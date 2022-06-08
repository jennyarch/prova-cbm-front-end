import {
  Titulo,
  ContainerForm,
  LabelNome,
  InputNome,
  Input,
  Label,
  BoxForm,
  BoxButton,
  Select,
} from "./styles";
import StepIcons from "../../Components/StepIcons/StepIcons";
import BtnVoltar from "../../Components/ButtonsFormulario/BtnVoltar";
import BtnProximo from "../../Components/ButtonsFormulario/BtnProximo";
import { useNavigate } from "react-router-dom";
import ContainerComponent from "../../Components/ContainerMain/ContainerComponent";
import { useEffect, useState } from "react";
import axios from "axios";
import "./estiloInputMask.css";
import MascaraCpf from "../../Components/Mascara/MascaraCpf";
import MascaraTelefone from "../../Components/Mascara/MascaraTelefone";
import { validaCPF } from "../../Utils/utils";

export default function FormularioCadastro() {
  const navigate = useNavigate();

  const [signos, setSignos] = useState([]);
  const [tiposSanguineos, setTiposSanguineos] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/signos").then((resposta) => {
      setSignos(resposta.data);
    });
  }, []);

  useEffect(() => {
    axios.get("http://localhost:5000/tipos-sanguineos").then((resposta) => {
      setTiposSanguineos(resposta.data);
    });
  }, []);

  const initialValue = {
    name: "",
    cpf: "",
    dt_nascimento: "",
    signo: "",
    tipo_sanguineo: "",
    email: "",
    telefone: "",
  };
  const [values, setValues] = useState(initialValue);

  function onChange(e) {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  }
  function aoSubmeterFormulario(e) {
    e.preventDefault();
    let cpf = values.cpf;
    if (validaCPF(cpf.replace(".", "").replace(".", "").replace("-", ""))) {
      axios.post("http://localhost:5000/perfil", values).then((resposta) => {
        navigate("/experiencia/");
      });
    } else {
      alert("Digite o cpf corretamente");
    }
  }

  return (
    <ContainerComponent>
      <StepIcons />
      <Titulo>Dados Pessoais</Titulo>
      <ContainerForm onSubmit={aoSubmeterFormulario}>
        <BoxForm>
          <LabelNome>Nome</LabelNome>
          <InputNome 
            type="text" 
            name="name"
            onChange={onChange} 
            required 
          />
        </BoxForm>
        <BoxForm>
          <Label>CPF</Label>
          <MascaraCpf
            nome={"cpf"}
            onChange={onChange}
          />
        </BoxForm>
        <BoxForm>
          <Label>Data de Nascimento</Label>
          <Input
            type="date"
            name="dt_nascimento"
            onChange={onChange}
            required
          />
        </BoxForm>
        <BoxForm>
          <Label>Signo</Label>
          <Select onChange={onChange} required name="signo">
            {signos.map((signo) => {
              return <option>{signo}</option>;
            })}
          </Select>
        </BoxForm>
        <BoxForm>
          <Label>Tipo Sanguíneo</Label>
          <Select onChange={onChange} required name="tipo_sanguineo">
            {tiposSanguineos.map((tipoSanguineo) => {
              return <option>{tipoSanguineo}</option>;
            })}
          </Select>
        </BoxForm>
        <BoxForm>
          <Label>E-mail</Label>
          <Input type="email" name="email" onChange={onChange} required />
        </BoxForm>
        <BoxForm>
          <Label>Telefone</Label>
          <MascaraTelefone onChange={onChange} />
        </BoxForm>
        <BoxButton>
          <BtnVoltar evento={() => navigate(-1)}>Voltar</BtnVoltar>
          <BtnProximo type="submit">Próximo</BtnProximo>
        </BoxButton>
      </ContainerForm>
    </ContainerComponent>
  );
}
