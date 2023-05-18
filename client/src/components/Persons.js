import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import InputAdornment from "@mui/material/InputAdornment";
import AccountCircle from "@mui/icons-material/AccountCircle";
import MenuItem from "@mui/material/MenuItem";
import SendIcon from "@mui/icons-material/Send";
import Alert from "@mui/material/Alert";
import "../styles/Persons.css";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

// validate-field
import useFields from "./hooks/useFields";

export default function Persons() {
  // validate-field
  const [fields, handleFieldChange, getErrors, errors] = useFields({
    name: "",
  });
  const submit = () => {
    getErrors();
  };

  // persisistir los datos
  const typeIdintification = [
    {
      value: "CI",
      label: "Cédula",
    },
    {
      value: "J",
      label: "Jurídico",
    },
    {
      value: "RF",
      label: "Rif",
    },
  ];

  const sexo = [
    {
      value: "M",
      label: "Masculino",
    },
    {
      value: "F",
      label: "Femenino",
    },
  ];

  const country = [
    {
      value: "BRA",
      label: "Brasil",
    },
    {
      value: "CO",
      label: "Colombia",
    },
    {
      value: "VE",
      label: "Venezuela",
    },
  ];

  const typeBlood = [
    {
      value: "O+",
      label: "Tipo O+",
    },
    {
      value: "A",
      label: "Tipo A",
    },
  ];

  const nationality = [
    {
      value: "co",
      label: "Colombiano",
    },
    {
      value: "ve",
      label: "Venezolano",
    },
  ];

  const manoDominante = [
    {
      value: 0,
      label: "Derecha",
    },
    {
      value: 1,
      label: "Izquierda",
    },
  ];

  const [dataPerson, setDataPerson] = useState({
    id: "", // id para la tabla relacion puesto
    nombreUno: "",
    segundoNombre: "",
    apellidoUno: "",
    apellidoDos: "",
    idTipoIdentificacion: "",
    nacionalidad: "",
    numeroIdentificacion: "",
    pasaporte: "",
    fechaNacimiento: "",
    ciudadNacimiento: "",
    idEntidadFederal: "",
    idPaisNacimiento: "",
    sexo: "",
    edoCivil: "",
    manoDominante: "",
    tipoSangre: "",
    factorRh: "",
    direccion: "",
    ciudad: "",
    idEntidadFederalResidencial: "",
    idPais: "",
    parroquia: "",
    municipio: "",
    codPostal: "",
    telefono1: "",
    telefono2: "",
    fax: "",
    celular: "",
    emailUno: "",
    emailDos: "",
    inRelTrab: "0", // asignar valor dinamico para la relacion de tablas
    usrcree: "NAME_DEFAULT_SYSTEM", // usuario que realiza la operacion
    usract: "NAME_DEFAULT_SYSTEM", // usuario que actuliza la operacion
  });
  const [countryDb, setCountryDb] = useState({});
  const [flask, setFlask] = useState({});

  const [editing, setEditing] = useState(false);
  const [tipoCampo, setTipoCampo] = useState("");

  const navigate = useNavigate();
  const params = useParams();

  async function loadLog(id) {
    const res = await fetch(`http://localhost:5000/api/v1/nameGetLog/${id}`);
    const data = await res.json();
    setDataPerson({
      //id: data.id,
      nombreUno: data.nombreUno,
      segundoNombre: data.segundoNombre,
      apellidoUno: data.apellidoUno,
      apellidoDos: data.apellidoDos,
      idTipoIdentificacion: data.idTipoIdentificacion,
      nacionalidad: data.nacionalidad,
      numeroIdentificacion: data.numeroIdentificacion,
      pasaporte: data.pasaporte,
      fechaNacimiento: data.fechaNacimiento, // fecha de nacimiento
      ciudadNacimiento: data.ciudadNacimiento,
      idEntidadFederal: data.idEntidadFederal,
      idPaisNacimiento: data.idPaisNacimiento,
      sexo: data.sexo,
      edoCivil: data.edoCivil,
      manoDominante: data.manoDominante,
      tipoSangre: data.tipoSangre,
      factorRh: data.factorRh,
      direccion: data.direccion,
      //ciudad: "PorDefinir",
      //idEntidadFederalResidencial: "PorDefinir",
      idPais: data.idPais,
      parroquia: data.parroquia,
      municipio: data.municipio,
      codPostal: data.codPostal,
      telefono1: data.telefono1,
      telefono2: data.telefono2,
      fax: data.fax,
      celular: data.celular,
      emailUno: data.emailUno,
      emailDos: data.emailDos, //31 todos los campos que envia el cliente (Agregar campos faltantes)
      U_VERIFY: 0,
    });

    setEditing(true);
  }

  async function preData() {
    const country = await fetch(`http://localhost:5000/api/v1/data/country`);
    setCountryDb(country);
  }

  useEffect(() => {
    if (params.id) {
      loadLog(params.id);
      //preData();
    }
  }, [params.id]);

  /*let txtNameUno;
 txtNameUno = (
      <TextField
        id="input-with-icon-textfield"
        label="Primer Nombre"
        name="nombreUno"
        value={dataPerson.nombreUno}
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <AccountCircle />
            </InputAdornment>
          ),
        }}
        variant="filled"
        color="primary"
        focused
        onChange={handlerChange}
      />
    );*/

  const validateField = async () => {
    // Obtner el valor del campo a nivel de backet

    setTipoCampo("error");

    //setTipoCampo("primary");
  };

  var content;
  var contentAlert = "ss";
  const [alertError, setAlertError] = useState(false); // contolamos el alertError
  const [alertValue, setAlertValue] = useState("");
  const alertErrorField = async () => {
    setAlertError(true);
  };

  const clientOn = async () => {
    setFlask({ value: "" });
  };

  /* if (alertValue) {
    contentAlert = "useSatate";
  } else {
    contentAlert = "ss";
  }*/

  if (alertError) {
    // Mostrar mensaje de error de campos
    content = (
      <Alert
        severity="error"
        style={{ marginTop: "1%", marginBottom: "-3%", marginLeft: "-2%" }}
      >
        {alertValue}
      </Alert>
    );
  }

  const sendData = async () => {
    if (editing) {
      await fetch(`http://localhost:5000/api/v1/namePutLog/${params.id}`, {
        method: "PUT",
        body: JSON.stringify(dataPerson),
        headers: { "Content-Type": "application/json" },
      });
    } else {
      // Buscar el ultimo ID de la tabla EO_PERSONA
      /*const generateIdSpi = await fetch(
        `http://localhost:5000/api/v1/data/generateIdSpi`
      );
      console.log(generateIdSpi);
      setDataPerson(dataPerson.id = '100');*/
      const rta = await fetch(`http://localhost:5000/api/v1/nameNewLog`, {
        method: "POST",
        body: JSON.stringify(dataPerson),
        headers: { "Content-Type": "application/json" },
      });

      // FLASK
      setFlask({ value: "error" });
    }
    navigate("/");
  };

  const sendTest = async () => {
    const rta = await fetch(`http://localhost:5000/api/v1/taRelacionPuesto`, {
      method: "POST",
      body: JSON.stringify(dataPerson),
      headers: { "Content-Type": "application/json" },
    });
    //setAlertValue(rta);
    navigate("http://localhost:3000/");
  };

  const validateField3 = async () => {
    setAlertError(true);
  };

  const sum = async () => {
    return 2 + 2;
  };

  const enviarTest = async () => {
    sendTest();
    //var value = await sum();
    //validateField2(value);
    validateField3();
  };

  const verifyData = async () => {
    await fetch(`http://localhost:5000/api/v1/namePutStatusSpi/${params.id}`, {
      method: "PUT",
      body: JSON.stringify(dataPerson),
      headers: { "Content-Type": "application/json" },
    });
    navigate("/");
  };

  const handlerChange = (event) => {
    setDataPerson({ ...dataPerson, [event.target.name]: event.target.value });
  };

  return (
    <>
      {content}
      <Box
        className="box-container"
        component="form"
        sx={{
          "& .MuiTextField-root": { marginRight: 4, width: "30ch" },
        }}
        noValidate
        autoComplete="off"
      >
        <div className="colum-1">
          <div className="textField">
            <TextField
              id="input-with-icon-textfield"
              label="Primer Nombre"
              name="nombreUno"
              value={dataPerson.nombreUno}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start">
                    <AccountCircle />
                  </InputAdornment>
                ),
              }}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              //id="standard-error"
              label="Segundo Nombre"
              name="segundoNombre"
              value={dataPerson.segundoNombre}
              variant="filled"
              color={tipoCampo}
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Primer Apellido"
              name="apellidoUno"
              value={dataPerson.apellidoUno}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Segundo Apellido"
              name="apellidoDos"
              value={dataPerson.apellidoDos}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Tipo de Identificación"
              name="idTipoIdentificacion"
              value={dataPerson.idTipoIdentificacion}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {typeIdintification.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Número de Identifición"
              name="numeroIdentificacion"
              value={dataPerson.numeroIdentificacion}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Pasaporte"
              name="pasaporte"
              value={dataPerson.pasaporte}
              InputProps={{
                startAdornment: (
                  <InputAdornment position="start"></InputAdornment>
                ),
              }}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Fecha de Nacimiento"
              name="fechaNacimiento"
              type="date"
              value={dataPerson.fehaNacimiento}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Sexo"
              name="sexo"
              value={dataPerson.sexo}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {sexo.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
        </div>
        <div style={{ marginLeft: -23 }} className="colum-2">
          <div className="textField">
            <TextField
              id="input-with-icon-textfield"
              label="Estado Civil"
              name="edoCivil"
              value={dataPerson.edoCivil}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Mano Dominante"
              name="manoDominante"
              value={dataPerson.manoDominante}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {manoDominante.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="País de Nacimiento"
              name="idPaisNacimiento"
              value={dataPerson.idPaisNacimiento}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {country.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Entidad Federal"
              name="idEntidadFederal"
              value={dataPerson.idEntidadFederal}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {country.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Ciudad de nacimiento"
              name="ciudadNacimiento"
              value={dataPerson.ciudadNacimiento}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Nacionalidad"
              name="nacionalidad"
              value={dataPerson.nacionalidad}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {nationality.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Tipo de Sangre"
              name="tipoSangre"
              value={dataPerson.tipoSangre}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {typeBlood.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Factor RH"
              name="factorRh"
              value={dataPerson.factorRh}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {typeBlood.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <diV>
            <TextField
              id="input-with-icon-textfield"
              label="Direción"
              name="direccion"
              value={dataPerson.direccion}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </diV>
        </div>
        <div className="colum-3">
          <div className="textField">
            <TextField
              id="standard-select-currency"
              select
              label="Ciudad"
              name="ciudad"
              value={dataPerson.ciudad}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {sexo.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Entidad Referencial"
              name="idEntidadFederalResidencial"
              value={dataPerson.idEntidadFederalResidencial}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {sexo.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="País de Residencia"
              name="idPais"
              value={dataPerson.idPais}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {nationality.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Municipio"
              name="municipio"
              value={dataPerson.municipio}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {country.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="standard-select-currency"
              select
              label="Parroquia"
              name="parroquia"
              value={dataPerson.parroquia}
              defaultValue=" "
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            >
              {country.map((option) => (
                <MenuItem key={option.value} value={option.value}>
                  {option.label}
                </MenuItem>
              ))}
            </TextField>
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Código Postal"
              name="codPostal"
              value={dataPerson.codPostal}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Número de Teléfono"
              name="telefono1"
              value={dataPerson.telefono1}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Número Auxiliar"
              name="telefono2"
              value={dataPerson.telefono2}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Fax"
              name="fax"
              value={dataPerson.fax}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
        </div>
        <div className="colum-4">
          <div className="textField">
            <TextField
              id="input-with-icon-textfield"
              label="Celular"
              name="celular"
              value={dataPerson.celular}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Correo Electrónico"
              name="emailUno"
              value={dataPerson.emailUno}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <div>
            <TextField
              id="input-with-icon-textfield"
              label="Correo Auxiliar"
              name="emailDos"
              value={dataPerson.emailDos}
              variant="filled"
              color="primary"
              focused
              onChange={handlerChange}
            />
          </div>
          <Button
            variant="outlined"
            color="primary"
            onClick={validateField} // validateField sendData
            endIcon={<SendIcon />}
            style={{ marginTop: "5%" }}
          >
            GUARDAR
          </Button>
          <Button
            variant="outlined"
            color="primary"
            onClick={sendTest}
            endIcon={<SendIcon />}
            style={{ marginTop: "5%", marginLeft: "5%" }}
          >
            TEST
          </Button>
          <div style={{ marginTop: "80%" }}>
            <Button
              variant="outlined"
              color="success"
              onClick={verifyData}
              style={{ marginTop: "5%", marginLeft: "5%" }}
            >
              VERIFICAR DATOS
            </Button>
          </div>
        </div>
      </Box>
    </>
  );
}
