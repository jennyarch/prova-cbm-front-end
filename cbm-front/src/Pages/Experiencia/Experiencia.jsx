import {
  Container,
  ContainerMain,
  Titulo,
  BoxFormulario,
  BoxConteudo,
  Label,
  Competencias,
  BoxContentCompetencias,
  BoxButton,
  ContainerForm,
  BoxForm,
  Input,
  BoxDivisor,
  ButtonForm,
} from "./styles";
import StepIcons from "../../Components/StepIcons/StepIcons";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import BtnVoltar from "../../Components/ButtonsFormulario/BtnVoltar";
import BtnProximo from "../../Components/ButtonsFormulario/BtnProximo";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import MySelect from "../../Components/Select/SelectMultiple";
import FormularioFormacao from "../../Components/ContainerFormulario/FormularioFormação";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { addFormacao } from "../../Utils/utils";

export default function Experiencia() {
  const navigate = useNavigate();

  const label = { inputProps: { "aria-label": "Checkbox demo" } };

  const [competencias, setCompetencias] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:5000/competencias").then((resposta) => {
      setCompetencias(resposta.data);
    });
  }, []);


  const initialValue = {
    
    formacao: [{
      instituicao: "",
      curso: ""
    }],
    experiencia: [{
      empresa: "",
      cargo: "",
      tempo: "",
      suaEmpresaAtual: true,
    }],
    competencias: "",
  };

  const [values, setValues] = useState(initialValue);

  function onChangeValue(e) {
    const { name, value } = e.target;

    setValues({ ...values, [name]: value });
  }
  function onCheckedChange(isCompany) {
    setValues({ ...values, suaEmpresaAtual: isCompany });
  }
  function onSelectedOption(isSelected) {
    setValues({ ...values, competencias: isSelected })
  }

  function aoSubmeterFormulario(e) {
    e.preventDefault();

    axios.post("http://localhost:5000/perfil", values).then((resposta) => {
      navigate("/resumo/");
    });
  }

  return (
    <ContainerMain>
      <Container>
        <StepIcons activeStep={1}/>
        <Titulo>Experiência</Titulo>
        <BoxFormulario onSubmit={aoSubmeterFormulario}>
          <BoxConteudo>
            <Label>Formação</Label>
            <ButtonForm onClick={addFormacao}>
              <AddCircleOutlineIcon sx={{ color: "#979595" }} />
            </ButtonForm>
          </BoxConteudo>
          <FormularioFormacao 
            onChange={() => onChangeValue()}
          />
          <BoxConteudo>
            <Label>Experiência</Label>
            <ButtonForm>
              <AddCircleOutlineIcon sx={{ color: "#979595" }} />
            </ButtonForm>
          </BoxConteudo>
          <ContainerForm>
            <BoxForm>
            <Label>Empresa</Label>
              <Input
                type="text"
                name="empresa"
                required
                onChange={() => onChangeValue()}
              />
            </BoxForm>
            <BoxForm>
            <Label>Cargo</Label>
              <Input
                type="text"
                name="cargo"
                required
                onChange={() => onChangeValue()}
              />
            </BoxForm>
            <BoxDivisor>
              <BoxForm>
                <Label>Tempo de Serviço</Label>
                <Input
                  type="text"
                  name="tempo"
                  required
                  onChange={() => onChangeValue()}
                />
              </BoxForm>
              <BoxForm>
                <Label>É seu emprego atual</Label>
                <FormGroup aria-label="position" row>
                  <FormControlLabel
                    name="sim"
                    onChange={() => onCheckedChange(true)}
                    checked={values.suaEmpresaAtual}
                    control={
                      <Checkbox
                        {...label}
                        sx={{
                          color: "#F3F3F3",
                          "&.Mui-checked": {
                            color: "#D42F43",
                          },
                        }}
                      />
                    }
                    label="Sim"
                    labelPlacement="start"
                  />
                  <FormControlLabel
                    name="nao"
                    checked={!values.suaEmpresaAtual}
                    onChange={() => onCheckedChange(false)}
                    control={
                      <Checkbox
                        {...label}
                        sx={{
                          color: "#F3F3F3",
                          "&.Mui-checked": {
                            color: "#D42F43",
                          },
                        }}
                      />
                    }
                    label="Não"
                    labelPlacement="start"
                  />
                </FormGroup>
              </BoxForm>
            </BoxDivisor>
          </ContainerForm>
          <BoxContentCompetencias>
            <Label>Competências</Label>
            <Competencias>
            <MySelect
              onChange={(e) => onSelectedOption(e)}
              list={competencias}
            />
            </Competencias>
          </BoxContentCompetencias>
          <BoxButton>
            <BtnVoltar evento={() => navigate(-1)}>Voltar</BtnVoltar>
            <BtnProximo tipo="submit">Próximo</BtnProximo>
          </BoxButton>
        </BoxFormulario>
      </Container>
    </ContainerMain>
  );
}
