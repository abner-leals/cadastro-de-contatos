import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ListaClient } from "./pages/lista_cliente.page";
import { CadastroClient } from "./pages/cadastro_cliente.page";
import { CadastroContato } from "./pages/cadastro_contato.page";
import Inicio from "./pages/home.page";
import { UpdateClient } from "./pages/update_client";
import { UpdateContato } from "./pages/update_contato";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="" element={<Inicio />} />
        <Route path="/Cadastro/Cliente" element={<CadastroClient />} />
        <Route path="/Cadastro/Contato/:userId" element={<CadastroContato />} />
        <Route path="/Atualizar/Cliente/:userId" element={<UpdateClient />} />
        <Route path="/Atualizar/Contato/:userId" element={<UpdateContato />} />
        <Route path="/Cliente" element={<ListaClient />} />
        <Route path="/*" element={<ListaClient />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
