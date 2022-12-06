import styled from "styled-components";

export const ContainerBotoes = styled.div`
  display: flex;
  gap: 5px;
`;
export const Container = styled.div`
  border: 1px solid #699999;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  h3 {
    font-size: 20px;
    margin-left: 30px;
    color: #699999;
  }
  button {
    display: flex;
    height: 40px;
    min-width: 64px;
    max-width: 200px;
    border-radius: 8px;
    border: none;
    padding: 15px;
    align-items: center;
    cursor: pointer;
  }
`;
export const Nome = styled.li`
  color: #5d9cec;
  margin: 15px 0 0 0;
  font-weight: bolder;
`;
export const Clientes = styled.ul`
  flex-wrap: wrap;
  display: flex;
  flex-direction: column;
  justify-content: center;
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 20px;
  color: #000;
  list-style: none;
  padding: 0;
  span {
    cursor: pointer;
  }
  li {
    line-height: 25px;
    h6 {
      color: #5d9cec;
      margin: 0;
      margin-top: 10px;
      margin-left: 15px;
      padding: 0;
      font-size: 16px;
    }
  }
`;
export const Contatos = styled.ul`
  list-style: none;
`;
