import * as React from "react";
import Box from "@mui/material/Box";
import { DataGrid } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { Button } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import Alert from "@mui/material/Alert";

const ipGet = `http://localhost:5000/api/v1/nameGetLog`; // http://192.168.25.92:5000/api/v1/nameGetLog
const columns = [
  { field: "id", headerName: "ID", width: 90 },
  {
    field: "nombreUno",
    headerName: "Nombre",
    width: 150,
    editable: false,
  },
  {
    field: "apellidoUno",
    headerName: "Apellido",
    width: 150,
    editable: false,
  },
  {
    field: "numeroIdentificacion",
    headerName: "Número De Indeficación",
    type: "number",
    width: 110,
    editable: false,
  },
  {
    field: "feccre",
    headerName: "Fecha De Creación",
    width: 250,
    editable: false,
  },
  {
    field: "U_VERIFY",
    headerName: "EN SPI",
    width: 70,
    editable: false,
  },
];

export default function DataGridDemo() {
  const [bandera, setBandera] = useState(false);
  const [logs, setLogs] = useState([]);
  const [idRow, setIdRow] = useState("");
  const navigate = useNavigate();
  const params = useParams();

  async function fetchData() {
    const res = await fetch(ipGet);
    const data = await res.json();
    setLogs(data);
  }
  /*async function fetchData2() {
    const res = await fetch(`http://localhost:5000/api/v1/query`);
    const data = await res.json();
    setLogs(data);
  }
  */
  async function deleteLog(id) {
    await fetch(`http://localhost:5000/api/v1/nameDestroyLog/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: { "Content-Type": "application/json" },
    });
  }

  const handleCaptureRow = async (event) => {
    return setIdRow(event[0]);
  };

  const handleDelete = async () => {
    deleteLog(idRow);
    window.location.reload();
  };

  //const bandera = false;
  const clientOn = async () => {
    if (bandera) {
      setBandera(false);
    } else {
      setBandera(true);
    }
  };

  const bol = false;
  let content;

  /*if (bol) {
    content = (
      <Button
        variant="outlined"
        color="error"
        disabled={false}
        onClick={handleDelete}
      >
        ELIMINAR REGISTRO
      </Button>
      
    );
  } else {
    content = (
      <Button
        variant="outlined"
        color="error"
        disabled={false}
        onClick={handleDelete}
      >
        ELIMINAR REGISTRO 2
      </Button>
    );
  }*/

  if (bandera) {
    content = (
      <Alert severity="success">This is a success alert — check it out!</Alert>
    );
  }

  useEffect(() => {
    fetchData();
    //fetchData2();
  }, []);

  return (
    <>
      <Box sx={{ height: 500, width: "100%", paddingTop: "4%" }}>
        {content}
        <DataGrid
          rows={logs}
          columns={columns}
          onRowSelectionModelChange={handleCaptureRow}
          initialState={{
            pagination: {
              paginationModel: {
                pageSize: 6,
              },
            },
          }}
          pageSizeOptions={[6]}
          checkboxSelection
          disableRowSelectionOnClick
        />
      </Box>
      <Button
        style={{ marginTop: "4%" }}
        variant="outlined"
        color="success"
        disabled={false}
        onClick={() => navigate(`/usuarios/edi/${idRow}`)}
      >
        EDITAR REGISTRO
      </Button>
      <Button
        style={{ marginTop: "4%" }}
        variant="outlined"
        color="error"
        disabled={false}
        onClick={handleDelete}
      >
        ELIMINAR REGISTRO
      </Button>
      <div>
        <Button
          variant="outlined"
          color="success"
          onClick={clientOn}
          style={{ marginTop: "5%", marginLeft: "5%" }}
        >
          clientOn
        </Button>
      </div>
    </>
  );
}
