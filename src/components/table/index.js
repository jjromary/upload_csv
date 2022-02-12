import React from "react";

export function DataTable(props) {
  return (
    <table>
      <tbody>
      <tr>
        <th>ID</th>
        <th>NOME</th>
        <th>Telefone</th>
      </tr>
      {props.contato.map((contact) => (
          <tr key={contact.id}>
            <td>{contact.id}</td>
            <td>{contact.nome}</td>
            <td>{contact.telefone}</td>
          </tr>
      ))}
        </tbody>
    </table>
  );
}
