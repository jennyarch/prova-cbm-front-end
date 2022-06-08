import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 500px;
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

export const Brasao = styled.img`
  width: 214px;
  height: 215px;
`;

export const Titulo = styled.h2`
  font-size: 40px;
  font-weight: 500;
  font-style: normal;
  color: #979595;
`;
export const BtnCadastro = styled.button`
  width: 408px;
  height: 90px;
  background: linear-gradient(91.76deg, #D42F43 0%, #D3823E 100%), #D9D9D9;
  border-radius: 63px;
  border: none;
  font-size: 32px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  cursor: pointer;
`;
export const BtnConcorrentes = styled.button`
  width: 408px;
  height: 90px;
  border: none;
  background: linear-gradient(91.76deg, #A8A8A8 0%, #C4C4C4 100%), #D9D9D9;
  border-radius: 63px;
  font-size: 32px;
  font-weight: 500;
  font-style: normal;
  color: #ffffff;
  cursor: pointer;

`;