
import React, { useState, useEffect } from "react";
import "../global.css"

import api from "../services/api";

export default function Client() {

  const [client, setClient] = useState([]);
  const [name, setName] = useState("");
  const [cpf, setCpf] = useState("");
  const [tel, setTel] = useState("");



 

  useEffect(
    () => {
      api.get("client").then((response) => {
        setClient(response.data);
      });
    },[client]);

    async function handleClient(e){
      e.preventDefault();
      const data = {name, cpf, tel}
      try {
        await api.post('client', data)
        alert(`Cliente ${name} cadastrado com sucesso`)
        
          } catch(err) {
        alert('Erro ao cadastrar caso, tente novamente.')
      }
    }


  return (

    <div>


      <div class="brand-logo center ">
        <div>
        <h4 ><span className="  amber lighten-5 yellow accent-1 z-depth-3">Cadastro de Clientes</span></h4>
      </div>
      </div>
    <div class="container">

    
<form onSubmit={handleClient}>

    <label>Nome</label>
    <input 
    type="text"
     placeholder="Nome"
     value={name}
     onChange={e => setName(e.target.value)}
     /> 
    <label>CPF</label>
    <input 
     placeholder="000.111.222-33"
     value={cpf}
     onChange={e => setCpf(e.target.value)}
     />
    <label>Telefone</label>
    <input 
    type="text" 
    placeholder="(83) 99911-2233"
    value={tel}
    onChange={e => setTel(e.target.value)}
    />

    <button class="waves-effect waves-light btn-small">Salvar<i class="material-icons left">save</i></button>

</form>
<table>

  <thead>
  {client.map((cliente) => (
    <tr>
      <th>Nome: {cliente.name}</th>
     <th>CPF: {cliente.cpf}</th>
      <th>Telefone: {cliente.tel}</th>
      <td>
        <button class="waves-effect btn-small blue darken-1"><i class="material-icons">create</i></button>
        <button  class="waves-effect btn-small red darken-1"><i class="material-icons">delete_sweep</i></button>
      </td>
    </tr>

   ))}
  </thead>

  
</table>

</div>

</div>




 
  );
}





