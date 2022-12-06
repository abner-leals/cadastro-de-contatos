import { Content, PaineldeFundo } from "../components/containers/style";
import { Formulario } from "../components/form";
import { GlobalStyle } from "../style";

export function Home() {
  return (
    <div>
      <GlobalStyle />
      <PaineldeFundo>
        <Content>
          <Formulario />
        </Content>
      </PaineldeFundo>
    </div>
  );
}
