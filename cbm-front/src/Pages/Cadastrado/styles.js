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
  height: 70%;
  padding: 20px;
  background: #FFFFFF;
  box-shadow: 0px 24px 32px rgba(0, 0, 0, 0.25);
  border-radius: 70px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
`;
export const Overlay = styled.div`
    background: rgba(149, 149, 149, 0.5);
    border-radius: 10px;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;

    display: flex;
    justify-content:center;
    align-items: center;

`;
export const Modal = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    position: absolute;

    width: 500px;
    height: 350px;
    padding: 20px;
    margin-top: 80px;
    background: #ffffff;
    border-radius: 10px;
    gap: 10px;
`;
export const DialogoCheck = styled.h2`
  width: 250px;
  color: #429542;
  font-size: 32px;
  font-weight: 600;
  text-align: center;
`;
export const BoxButton = styled.div`
    width: 500px;
    height: auto;
  
    display: flex;
    flex-direction: row;
    justify-content: space-between;
  `;
