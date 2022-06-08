import {
  Container,
  Titulo,
  ContainerMain,
  BoxDados,
  LabelForm,
  BoxDadosOrganizados,
  Line,
  Label,
  TextResumo,
  LabelText,
  Competencias,
  ItensCompetencias,
} from "./styles";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import BtnProximo from "../../Components/ButtonsFormulario/BtnProximo";

export default function Perfil() {
  const navigate = useNavigate();

  const [perfil, setPerfil] = useState({});

  let { id } = useParams()
  if (id === undefined) {
      id = 1;
  }

  useEffect(() => {
    axios.get(`http://localhost:5000/perfil/${id}`)
      .then((resposta) => {
      setPerfil(resposta.data);
    });
  }, [id]);

  return (
    <ContainerMain>
      
          <Container>
            <Titulo>{perfil.name}</Titulo>
            <BoxDados>
              <LabelForm>
                Nome: <LabelText>{perfil.name}</LabelText>
              </LabelForm>
              <BoxDadosOrganizados>
                <LabelForm>
                  CPF: <LabelText>{perfil.cpf}</LabelText>
                </LabelForm>
                <LabelForm>
                  Data de Nascimento:
                  <LabelText>{perfil.dt_nascimento}</LabelText>
                </LabelForm>
                <LabelForm>
                  Signo: <LabelText>{perfil.signo}</LabelText>
                </LabelForm>
              </BoxDadosOrganizados>
              <LabelForm>
                Tipo Sanguíneo: <LabelText>{perfil.tipo_sanguineo}</LabelText>
              </LabelForm>
              <BoxDadosOrganizados>
                <LabelForm>
                  E-mail: <LabelText>{perfil.email}</LabelText>
                </LabelForm>
                <LabelForm>
                  Telefone: <LabelText>{perfil.telefone}</LabelText>
                </LabelForm>
              </BoxDadosOrganizados>
            </BoxDados>
            <Line />
            <Label>Resumo</Label>
            <TextResumo>
              {perfil.resumo}
            </TextResumo>
            <Line />
            <Label>Formação</Label>
            {
              perfil.formacao && perfil.formacao.map((formatar) => {
                return (
                  <>
                    <LabelForm>
                      Instituição: <LabelText>{formatar.instituicao}</LabelText>
                    </LabelForm>
                    <LabelForm>
                      Curso: <LabelText>{formatar.curso}</LabelText>
                    </LabelForm>
                  </>
                );
              })
            }
            <Line />
            <Label>Experiência</Label>
            {
              perfil.experiencia && perfil.experiencia.map((exp) => {
                return (
                  <>
                    <LabelForm>
                      Empresa:<LabelText>{exp.empresa}</LabelText>{" "}
                    </LabelForm>
                    <LabelForm>
                      Cargo: <LabelText>{exp.cargo}</LabelText>
                    </LabelForm>
                    <LabelForm>
                      Tempo: <LabelText>{exp.tempo}</LabelText>
                    </LabelForm>
                  </>
                );
              })
            }
            <Line />
            <Label>Competências</Label>
            <Competencias>
              {
                perfil.competencia && perfil.competencias.map((competencia) => {
                  return <ItensCompetencias>{competencia}</ItensCompetencias>;
                })
              }
            </Competencias>
            <BtnProximo evento={() => navigate(-1)}>Voltar</BtnProximo>
          </Container>
        
      
    </ContainerMain>
  );
}
