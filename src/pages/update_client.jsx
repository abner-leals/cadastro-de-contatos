import { useParams } from "react-router-dom";
import { Kabecalho } from "../components/cabecalho";
import { Content, PaineldeFundo } from "../components/containers/style";
import { Formulario } from "../components/form";
import { GlobalStyle } from "../style";

export function UpdateClient() {
  return (
    <div>
      <GlobalStyle />
      <PaineldeFundo>
        <Kabecalho voltar />
        <Content>
          <Formulario metodo={"patch"} rota={`client`} />
        </Content>
      </PaineldeFundo>
    </div>
  );
}
