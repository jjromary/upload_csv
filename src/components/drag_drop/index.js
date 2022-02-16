import React, { useEffect, useState } from "react";
import axios from "axios";
import styles from "./styles.module.scss";
import { parse } from "papaparse";
import { DataTable } from "../table";

export function DragDrop() {
  const [active, setActive] = useState(false); // verifica se a area de upload está ativa
  const [contacts, setContacts] = useState([]); // salva a lista de contato existente no .csv

  useEffect(() => {
    if (contacts.length > 0) {
      axios.post("http://localhost:5000/contacts", contacts);
      console.log("contacts", contacts)
    } else {
    }
  }, [contacts]);

  return (
    <>
      <div
        className={styles.ContainerDropCsv}
        style={{ borderColor: active ? "#90EE90" : "black" }}
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
              result.data.id = Number();

              setContacts((existing) => [...existing, ...result.data]);
            });
        }}
      >
        <span>Solte o seu arquivo CSV aqui 😁</span>
      </div>

      <DataTable />
    </>
  );
}
