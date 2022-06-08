import styled from "styled-components";

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 500px;
  height: 80%;
  padding: 50px;
  background: #FFFFFF;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
  border-radius: 70px;
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-around;
  gap: 10px;
`;
export const Titulo = styled.h2`
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  color: #767474;
  text-align: left;
`;
export const BoxDados = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  width: 100%;
  gap: 20px;

`;
export const LabelForm = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
`;
export const Label = styled.label`
    font-size: 24px;
    font-weight: 500;
    font-style: normal;
    color: #767474;
  `;
  export const Button = styled.button`
    width: 160px;
    height: 35px;
    background: linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%), #D9D9D9;
    border-radius: 14px;
    border: none;
    cursor: pointer;
    align-items: center;
    color: #ffffff;
  `;