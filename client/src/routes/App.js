import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Persons from "../components/Persons";
import Infotable from "../components/InfoTable";
import ExportDefaultToolbar from "../components/dataGridPersons";
import Login from "../components/login";
import { Container } from "@mui/material";

export default function App() {
  return (
    <BrowserRouter>
      <Nav />
      <Container>
        <Routes>
          <Route path="/" element={<ExportDefaultToolbar />} />
          <Route path="/crear un nuevo usuario" element={<Persons />} />
          <Route path="/usuarios/edi/:id" element={<Persons />} />
          <Route path="/Infotable" element={<Infotable />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
