import styled from 'styled-components';


export const ContainerMain = styled.div`
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 600px;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
  border-radius: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
`;
export const Titulo = styled.h2`
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  color: #979595;
`;
export const BoxFormulario = styled.form`
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
export const ContainerForm = styled.div`
display: flex;
padding: 10px;
justify-content: center;
flex-direction: column;
gap: 20px;
border: 2px solid #D9D9D9;
border-radius: 5px;
`;
export const BoxConteudo = styled.div`
  width: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  `;
  export const BoxContentCompetencias = styled.div`
    display: flex;
    flex-direction: column;
    gap: 5px;
  `;
  export const Competencias = styled.div`
    width: 100%;
    height: 100px;
    padding: 10px;
    border: none;
    border-radius: 11px;
    background-color: #F3F3F3;
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
  export const BoxButton = styled.div`
  width: 100%;
  height: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Button = styled.button`
  width: 20px;
  height: auto;
  border: none;
  border-radius: 50px;
  cursor: pointer;
`;
export const ButtonForm = styled.button`
  width: 20px;
  height: auto;
  border: none;
  border-radius: 50px;
  cursor: pointer;
  background-color: #FFFFFF;
`;
export const BoxDivisor = styled.div`
display: flex;
flex-direction: row;
justify-content: space-between;
`;
export const Label = styled.label`
    font-size: 20px;
    font-weight: 500;
    font-style: normal;
    color: #979595;
  `;
export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  gap:5px;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  border: none;
  background-color: #F3F3F3;
`;

