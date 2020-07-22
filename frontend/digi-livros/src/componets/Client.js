
import React, { useState, useEffect } from "react";
import "../global.css"

import api from "../services/api";

export default function Client() {

  const [client, setClient] = useState([]);
 

  useEffect(
    () => {
      api.get("client").then((response) => {
        setClient(response.data);
      });
    },[client]);




  return (

    <div>


      <div class="brand-logo center ">
        <div>
        <h4 ><span className="  amber lighten-5 yellow accent-1 z-depth-3">Cadastro de Clientes</span></h4>
      </div>
      </div>
    <div class="container">

    
<form>

    <label>Nome</label>
    <input type="text" placeholder="Nome"/> 
    <label>CPF</label>
    <input  placeholder="000.111.222-33"/>
    <label>Telefone</label>
    <input type="text" placeholder="(83) 99911-2233"/>

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





