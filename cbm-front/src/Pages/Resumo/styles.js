import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.form`
  width: 600px;
  padding: 50px;
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

export const Label = styled.label`
  align-items: flex-start;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
  color: #979595;
`;
export const BoxResumo = styled.textarea`
    width: 500px;
    margin: 0 20px 20px 20px;
    height: 200px;
    padding: 10px;
    border: none;
    border-radius: 11px;
    background-color: #F3F3F3;
  `;
    export const BoxButton = styled.div`
    width: 600px;
    height: auto;
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;