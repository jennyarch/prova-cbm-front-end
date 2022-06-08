import styled from 'styled-components';

export const ContainerMain = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Container = styled.div`
  width: 600px;
  padding: 40px;
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
export const ContainerForm = styled.form`
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 20px;
`;
export const BoxForm = styled.div`
  display: flex;
  flex-direction: column;
  gap:5px;
`;
export const LabelNome = styled.label`
  color: #979595;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
`;
export const InputNome = styled.input`
  width: 523px;
  height: 30px;
  border: none;
  background-color: #F3F3F3;
`;
export const Label = styled.label`
  color: #979595;
  font-size: 20px;
  font-weight: 500;
  font-style: normal;
`;
export const Input = styled.input`
  width: 250px;
  height: 30px;
  border: none;
  background-color: #F3F3F3;
`;
export const BoxButton = styled.div`
  width: 600px;
  height: auto;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
export const Select = styled.select`
  width: 250px;
  height: 30px;
  border: none;
  background-color: #F3F3F3;
`;