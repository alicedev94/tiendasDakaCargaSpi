import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "../components/Nav";
import Persons from "../components/Persons";
import Infotable from "../components/InfoTable";
import ExportDefaultToolbar from "../components/dataGridPersons";
import Login from "../components/login";
import { Container } from "@mui/material";
import { useState } from "react";

export default function App() {
  let nav;
  const isLoggedIn = true;

  if (isLoggedIn) {
    nav = <Nav />;
  }

  return (
    <BrowserRouter>
      {nav}
      <Container>
        <Routes>
          <Route path="/" element={<ExportDefaultToolbar />} />
          <Route path="/crear un nuevo usuario" element={<Persons />} />
          <Route path="/usuarios/edi/:id" element={<Persons />} />
          <Route path="/Infotable" element={<Infotable />} />
          <Route
            path="/ExportDefaultToolbar"
            element={<ExportDefaultToolbar />}
          />
          <Route path="/login" element={<Login />} />
        </Routes>
      </Container>
    </BrowserRouter>
  );
}
