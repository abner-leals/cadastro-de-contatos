// import api from "../../services/api";
import { env } from "../../react.config";
import { Clientes, Container, ContainerBotoes, Contatos, Nome } from "./styles";
export const Klientes = () => {
  const clients = [];
  console.log();
  // api.get("/client").then((response) => {
  //   console.log(response);
  // });

  return (
    <Container>
      {`${env.TYPEORM_HOST}:${env.API_PORT}`}
      <h3>Clientes</h3>
      <button>Adicionar novo Cliente</button>
      <Clientes>
        {clients.map((client) => (
          <>
            <Nome> {client.full_name}</Nome> <li> email: {client.email}</li>
            <li> telefone : {client.telephone}</li>
            <ContainerBotoes>
              <button>Editar {client.full_name.split(" ")[0]}</button>
              <button>Novo Contato de {client.full_name.split(" ")[0]}</button>
            </ContainerBotoes>
            <li>
              {" "}
              {client.contacts.map((contact) => (
                <>
                  <h6>Nome: {contact.full_name}</h6>
                  <Contatos>
                    <li>email: {contact.email}</li>
                    <li>Telefone: {contact.telephone}</li>
                  </Contatos>
                  <button>Editar {contact.full_name}</button>
                </>
              ))}
            </li>
          </>
        ))}
      </Clientes>
    </Container>
  );
};
