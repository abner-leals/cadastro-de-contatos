import { Link } from "react-router-dom";
import { Botao, Container, Titulo, TituloSpan } from "./styles";

export const Kabecalho = ({ voltar }) => {
  return (
    <Container>
      <Titulo>
        <TituloSpan>Contatos </TituloSpan> de Klientes
      </Titulo>
      {voltar && (
        <Link to={"/Cliente"}>
          <Botao>Voltar</Botao>
        </Link>
      )}
    </Container>
  );
};
