import { Content, PaineldeFundo } from "../components/containers/style";
import { Formulario } from "../components/form";
import { GlobalStyle } from "../style";
import { Kabecalho } from "../components/cabecalho/index";
export function CadastroClient() {
  return (
    <div>
      <GlobalStyle />
      <PaineldeFundo>
        <Kabecalho voltar />
        <Content>
          <Formulario metodo={"post"} rota={"client"} />
        </Content>
      </PaineldeFundo>
    </div>
  );
}
