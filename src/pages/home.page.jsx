import { Link } from "react-router-dom";
import { CabecalhoListaVazia, ListaFantasma, ListaVazia } from "./styles";

export default function Inicio() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="info">
          <span className="titulo">
            <span className="nome-logo titulo">Contatos</span> Klientes
          </span>
          <h1>Centralize o controle dos Contatos Separando-os por Clientes</h1>
          <p>de forma rápida e segura</p>
          <Link to={"/Cliente"}>
            <button className="App-botao">Iniciar</button>
          </Link>
        </div>
        <div className="container">
          <ListaVazia />
          <ul className="ul">
            <CabecalhoListaVazia />
            <ListaFantasma />
            <ListaFantasma />
            <ListaFantasma />
            <ListaFantasma />
            <ListaFantasma />
          </ul>
        </div>
      </header>
    </div>
  );
}
