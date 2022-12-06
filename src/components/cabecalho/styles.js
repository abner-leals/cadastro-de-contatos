import styled from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  padding: 30px;
  height: 80px;
  width: 100vw;
  align-items: center;
  box-shadow: 0 0 10px gray;
  margin-bottom: 15px;
`;
export const Titulo = styled.h1`
  color: #212529;
  font-weight: bolder;
`;

export const TituloSpan = styled.span`
  color: #fd377e;
  font-weight: bolder;
`;

export const Botao = styled.button`
  display: flex;
  height: 40px;
  min-width: 64px;
  border-radius: 8px;
  padding: 15px;
  align-items: center;
  cursor: pointer;
`;
