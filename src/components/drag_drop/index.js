import React, { useState } from "react";
import { parse } from "papaparse";
import { DataTable } from "../table";


export function DragDrop(){
    const [active, setActive] = useState(false);
    const [contacts, setContacts] = useState([]);

    return(
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
                setContacts((existing) =>  [...existing, ...result.data ]);
              });
          }}
        >
          Upload CSV
        </div>

        <DataTable contato={contacts}/>

        </>
    )
}
