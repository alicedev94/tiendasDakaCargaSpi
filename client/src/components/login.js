import { useState } from "react";

export default function Login() {
  const [dataPerson, setDataPerson] = useState({
    email: "",
    password: "",
  });

  const handlerChange = (event) => {
    setDataPerson({ ...dataPerson, [event.target.name]: event.target.value });
  };

  const sendData = async () => {
    await fetch(`http://localhost:5000/api/v1/user/singin`, {
      method: "POST",
      body: JSON.stringify(dataPerson),
      headers: { "Content-Type": "application/json" },
    });
  };

  return (
    <>
      <div
        style={{
          height: 400,
          width: 400,
          marginTop: "5%",
          background: "#E6E6FA",
          padding: 50,
          borderRadius: "5%",
        }}
      >
        <form>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">
              Correo Electronico
            </label>
            <input
              type="email"
              name="email"
              id="form2Example1"
              class="form-control"
              onChange={handlerChange}
            />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">
              Contraseña
            </label>
            <input
              type="password"
              name="password"
              id="form2Example2"
              class="form-control"
              onChange={handlerChange}
            />
          </div>

          <button
            type="button"
            onClick={sendData}
            class="btn btn-primary btn-block mb-4"
          >
            Iniciar Sesión
          </button>

          <div class="text-center">
            <p>
              No es un miembro? <a href="singup">Registrarse</a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
}
