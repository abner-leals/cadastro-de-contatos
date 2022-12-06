import { Kabecalho } from "../components/cabecalho/index";
import { Klientes } from "../components/lista_Cliente";
export function ListaClient() {
  return (
    <div>
      <Kabecalho></Kabecalho>
      <Klientes />
    </div>
  );
}
