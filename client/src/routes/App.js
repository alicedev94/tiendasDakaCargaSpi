import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Persons from "../components/Persons";
import Infotable from "../components/InfoTable";
import ExportDefaultToolbar from "../components/dataGridPersons";
import Login from "../components/login";
import { Container } from "@mui/material";

export default function App() {
  let nav;
  const isLoggedIn = false;

  if (isLoggedIn) {
    nav = <Nav />;
  }

  return (
    <BrowserRouter>
      {nav}
      <Container>
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/crear un nuevo usuario" element={<Persons />} />
          <Route path="/usuarios/edi/:id" element={<Persons />} />
          <Route path="/Infotable" element={<Infotable />} />
          <Route path="/ExportDefaultToolbar" element={<ExportDefaultToolbar />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
