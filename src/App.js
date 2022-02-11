import React, { useState } from "react";
import "./styles/style.css";
import { parse } from "papaparse";

export default function App() {
  const [active, setActive] = useState(false);
  const [contacts, setContacts] = useState([]);

  return (
    <div>
      <div className="container">
        <h1 className="title">UPLOAD CSV</h1>
        <div
          className="dropCsv"
          style={{ borderColor: active ? "green" : "black" }}
          onDragEnter={() => {
            setActive(true);
          }}
          onDragLeave={() => {
            setActive(false);
          }}
          onDragOver={(e) => {
            e.preventDefault();
          }}
          onDrop={(e) => {
            e.preventDefault();
            setActive(false);

            Array.from(e.dataTransfer.files)
              .filter((file) => file.type === "text/csv")
              .forEach(async (file) => {
                const text = await file.text();
                const result = parse(text, { header: true });
                setContacts((existing) =>  [...existing, ...result.data ]);
              });
          }}
        >
          Upload CSV
        </div>
      </div>

      <table>
            <tr>
              <td>ID</td>
              <td>NOME</td>
              <td>Telefone</td>
            </tr>
        {contacts.map((contact) => (
            <tr key={contact.id} >
              <td>{contact.id}</td>
              <td>{contact.nome}</td>
              <td>{contact.telefone}</td>
            </tr>
        ))}
      </table>
    </div>
  );
}
