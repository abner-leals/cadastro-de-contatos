import styled from "styled-components";

export const PaineldeFundo = styled.div`
  background-color: #d1dce32e;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: space-around;
  align-items: center;
  flex-direction: column;
  @media (min-width: 615px) {
    flex-direction: row;
    justify-content: center;
  }
`;
export const QuadroReq = styled.form`
  h1 {
    font-size: 24px;
    line-height: 28px;
    color: #656565;
  }
  button {
    font-size: 24px;
    line-height: 28px;
    width: 257px;
    background-color: #fd377e;
    color: white;
    border: none;
    cursor: pointer;
    box-shadow: 0 0px 10px #cc90c3;
  }
  @media (min-width: 260px) {
    gap: 15px;
    width: 377px;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    background: #ffffff;
    height: 389px;
    justify-content: space-around;
    align-items: center;
    padding: 1.5% 5% 5% 5%;
  }
`;
export const QuadroRes = styled.div`
  display: flex;
  background-color: #d1dce32e;
  flex-direction: column;
  width: 231px;
  justify-content: top;
  padding-left: 35px;
  h3 {
    margin-top: 15px;
    font-style: italic;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;

    text-transform: uppercase;
    color: #3d75bb;
  }
  p {
    mix-blend-mode: normal;
    opacity: 0.3;
    border: 1px solid #5d9cec;
    margin-top: 4px;
    margin-bottom: 0px;
  }
  ul {
    padding-left: 0px;
  }

  @media (min-width: 260px) {
    gap: 15px;
    display: flex;
    flex-direction: column;
    max-width: 400px;
    width: 231px;
    background: #ffffff;
    min-height: 389px;

    background-color: #d1dce32e;
  }
  @media (max-width: 615px) {
    width: 100%;
    text-align: center;
    padding: 0 23.5px;
  }
`;
export const QuadroValores = styled.ul`
  font-style: italic;
  font-weight: 400;
  font-size: 16px;
  line-height: 46px;
  color: #5d9cec;
  list-style: none;
  li {
    line-height: 30px;
  }
`;

export const Content = styled.div`
  padding: 0px;
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  min-height: 390px;
  max-width: 610px;
  background: #ffffff;
  border: 1px solid #d1dce3;
  border-radius: 4px;
  justify-content: center;
  /* padding-top: 15rem; */
  @media (min-width: 615px) {
    padding-top: 0;
    justify-content: space-around;
    flex-direction: row;
  }
  @media (max-width: 615px) {
    padding-top: 0;
    justify-content: space-between;
    flex-direction: column;
    height: 778px;
  }
`;

export const PeriodoContainer = styled.div`
  background: #fff;
  border-radius: 4px;
  border: 1px solid #dde6e9;
  color: #666360;
  padding: 0;
  width: 251px;
  display: flex;
  height: 37px;
  justify-content: space-between;
  padding: 0 0 0 10px;

  ul {
    display: flex;
    font-size: 10px;
    justify-content: space-evenly;
    li {
      margin: 2px;
      font-size: 12px;
      list-style: none;
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
