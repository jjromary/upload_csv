import React from "react";
import styles from "./styles.module.scss";
export function DataTable(props) {
  return (
    <div className={styles.Container}>
      <table className={styles.TableContent}>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>Telefone</th>
            <th>Ações</th>
          </tr>
        </thead>

        <tbody>
          {props.contato.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.nome}</td>
              <td>{contact.telefone}</td>
              <td>
                <div className={styles.buttonContainer}>
                  <button className={styles.button}>Editar</button>
                  <button className={styles.button}>Deletar</button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
