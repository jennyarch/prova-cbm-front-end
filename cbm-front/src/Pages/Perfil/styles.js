import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 700px;
  padding: 50px;
  margin: auto;
  background: #FFFFFF;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
  border-radius: 70px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
`;

export const Titulo = styled.h2`
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  color: #767474;
`;
export const BoxDados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 8px;

`;
export const LabelForm = styled.label`
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  color: #868686;
`;
export const BoxDadosOrganizados = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Line = styled.hr`
  width: 100%;
  border: 1px solid #DEDDDD;
  margin-top: 20px;
`;
export const Label = styled.label`
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    color: #767474;
  `;
  export const TextResumo = styled.p`
    font-size: 20px;
    font-weight: 400;
    color: #979595;
  `;
  export const LabelText = styled.label`
    font-size: 20px;
    font-weight: 400;
    font-style: normal;
    color: #979595;
    /* margin-right: 19px; */
  `;

export const Competencias = styled.div`
width: 100%;
height: 100px;
padding: 20px;
`;
export const ItensCompetencias = styled.span`
padding: 10px;
background: #9BD26F;
border: 1px solid #EFEFEF;
border-radius: 11px;

color: #ffffff;
font-size: 14px;
font-weight: 500;
font-style: normal;
`;