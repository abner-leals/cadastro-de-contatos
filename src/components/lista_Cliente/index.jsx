// import api from "../../services/api";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import api from "../../services/api";
import {
  Card,
  Clientes,
  Container,
  ContainerBotoes,
  Contatos,
  Nome,
} from "./styles";
const del = (parametros) => {
  api.delete(parametros).then((response) => {
    console.log(response);
    window.location.reload(false);
  });
  console.log(parametros);
};
export const Klientes = (t) => {
  const [clients, setClients] = useState([]);
  useEffect(() => {
    api.get("/client").then((response) => {
      setClients(response.data);
    });
  }, []);

  return (
    <Container>
      <h3>Clientes</h3>
      <Link to={"/Cadastro/Cliente"}>
        <button>Adicionar novo Cliente</button>
      </Link>
      <Clientes>
        {clients.map((client) => (
          <Card key={client.id}>
            <Nome> {client.full_name}</Nome> <li> email: {client.email}</li>
            <li> telefone : {client.telephone}</li>
            <ContainerBotoes>
              <Link>
                <button onClick={() => del(`client/${client.id}`)}>
                  Excluir {client.full_name.split(" ")[0]}
                </button>
              </Link>
              <Link to={`/Atualizar/Cliente/${client.id}`}>
                <button>Editar {client.full_name.split(" ")[0]}</button>
              </Link>
              <Link to={`/Cadastro/Contato/${client.id}`}>
                <button>
                  Novo Contato de {client.full_name.split(" ")[0]}
                </button>
              </Link>
            </ContainerBotoes>
            <li>
              {" "}
              {client.contacts.map((contact) => (
                <section key={contact.id}>
                  <h6>Contato: {contact.full_name}</h6>
                  <Contatos>
                    <li>email: {contact.email}</li>
                    <li>Telefone: {contact.telephone}</li>
                  </Contatos>
                  <ContainerBotoes>
                    <Link>
                      <button onClick={() => del(`contact/${contact.id}`)}>
                        Excluir {contact.full_name.split(" ")[0]}
                      </button>
                    </Link>
                    <Link to={`/Atualizar/Contato/${contact.id}`}>
                      <button>Editar {contact.full_name.split(" ")[0]}</button>
                    </Link>
                  </ContainerBotoes>
                </section>
              ))}
            </li>
          </Card>
        ))}
      </Clientes>
    </Container>
  );
};
