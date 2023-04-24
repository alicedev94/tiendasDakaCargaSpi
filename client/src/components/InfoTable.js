import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { Button, Card, CardContent, Typography } from "@mui/material";

export default function Infotable() {
  const [rows, setRows] = useState([]);
  const navigate = useNavigate();

  const name = { nombreUno :  "edit03042023"};

  async function fetchData() {
    const res = await fetch(`http://localhost:5000/api/v1/nameGetLog`);
    const data = await res.json();
    setRows(data);
  }

  async function editRows(id) {
    await fetch(`http://localhost:5000/api/v1/namePutLog/${id}`, {
      method: "PUT",
      body: JSON.stringify(name),
      headers: { "Content-Type": "application/json" },
    });
  }

  async function deleteRows(id) {
    await fetch(`http://localhost:5000/api/v1/nameDestroyLog/${id}`, {
      method: "DELETE",
      body: JSON.stringify({ id: id }),
      headers: { "Content-Type": "application/json" },
    });
  }

  function addRows() {
    navigate("/create");
  }

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <>
      <h2>log history</h2>
      {rows.map((row) => (
        <Card
          style={{
            marginBottom: ".7rem",
            backgroundColor: "#ECF0F1",
          }}
        >
          <CardContent
            style={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <div
              style={{
                color: "black",
              }}
            >
              <Typography>{row.direccion}</Typography>
              <Typography>{row.feccre}</Typography>
            </div>
            <div>
              <Button
                variant="contained"
                color="inherit"
                onClick={() => editRows(row.id)}
              >
                Edit
              </Button>
              <Button
                variant="contained"
                color="warning"
                onClick={() => deleteRows(row.id)}
                style={{ marginLeft: ".5rem" }}
              >
                Delete
              </Button>
            </div>
          </CardContent>
        </Card>
      ))}
      <Button
        variant="contained"
        color="success"
        onClick={addRows}
        style={{ marginLeft: ".5rem" }}
      >
        add row
      </Button>
    </>
  );
}
