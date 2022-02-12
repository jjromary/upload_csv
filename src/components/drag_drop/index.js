import React, { useEffect, useState } from "react";
import axios from "axios";
import { parse } from "papaparse";
import { DataTable } from "../table";

export function DragDrop() {
  const [active, setActive] = useState(false);
  const [contacts, setContacts] = useState([]);

  useEffect(()=> {
    if(contacts.length > 0)  {
        axios.post("http://localhost:5000/contacts", contacts);
    }else{

    }
  });
  

  console.log(contacts.length);

  return (
    <>
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
              setContacts((existing) => [...existing, ...result.data]);
            });
          // updateBD()
        }}
      >
        Upload CSV
      </div>

      <DataTable contato={contacts} />
    </>
  );
}
