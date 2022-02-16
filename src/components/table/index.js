/* eslint-disable react-hooks/exhaustive-deps */
import axios from "axios";
import React, { useEffect, useState } from "react";
import styles from "./styles.module.scss";


export function DataTable() {
  const [values, setValues] = useState([])

  useEffect(() => {
    axios.get("http://localhost:5000/contacts/")
      .then((response) => {
        console.log("values",values)
        setValues(response.data)
      })
  }, [])


  // function deleteContact(id){
  //   axios.delete(`http://localhost:5000/contacts/${id}`)
  // }

  // function updateContact(id){
  //   axios.put(`http://localhost:5000/contacts/${id}`)
  // }


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
          {values?.map((contact) => (
            <tr key={contact.id}>
              <td>{contact.id}</td>
              <td>{contact.nome}</td>
              <td>{contact.telefone}</td>
              <td>
                <div className={styles.buttonContainer}>
                  <button className={styles.button}>Editar</button>
                  <button className={styles.button} 
                  >
                    Deletar
                  </button>
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
