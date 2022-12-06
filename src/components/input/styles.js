import styled, { css } from "styled-components";

export const ContTitulo = styled.div`
  text-align: left;
  display: flex;
  flex-direction: column;
  max-width: 251px;
  font-family: "SourceSansPro";
  font-size: 14px;
  line-height: 16px;
  color: #656565;
  span {
    color: #c53030;
    font-size: 10px;
  }
`;
export const Container = styled.div`
  display: flex;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dde6e9;
  color: #666360;
  padding: 0;
  width: 251px;
  display: flex;
  height: 37px;
  justify-content: center;
  align-items: center;
  transition: 0.4s;
  ${(props) =>
    props.isErrored &&
    css`
      border-color: #c53030;
      svg {
        color: #c53030;
      }
    `}
  input {
    background: transparent;
    align-items: center;
    padding: 0 1rem;
    height: 100%;
    width: 100%;
    flex: 1;
    border: 0;
    color: #312e38;
    &::placeholder {
      color: #666360;
    }
  }
  button {
    height: 100%;
    width: 50px;
    font-size: 12px;
    border: 1px solid #dde6e9;
    border-radius: 4px;
  }
`;
