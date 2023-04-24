export default function login() {
  return (
    <>
      <div style={{ height: 400, width: 400, marginTop: "5%" }}>
        <form>
          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example1">
              Correo Electronico
            </label>
            <input type="email" id="form2Example1" class="form-control" />
          </div>

          <div class="form-outline mb-4">
            <label class="form-label" for="form2Example2">
              Contraseña
            </label>
            <input type="password" id="form2Example2" class="form-control" />
          </div>

          <div class="row mb-4">
            <div class="col d-flex justify-content-center">
              <div class="form-check">
                <input
                  class="form-check-input"
                  type="checkbox"
                  value=""
                  id="form2Example31"
                  checked
                />
                <label class="form-check-label" for="form2Example31">
                  {" "}
                  Remember me{" "}
                </label>
              </div>
            </div>

            <div class="col">
              <a href="#!">Forgot password?</a>
            </div>
          </div>

          <button type="button" class="btn btn-primary btn-block mb-4">
            Iniciar Sesión
          </button>

          <div class="text-center">
            <p>
              Not a member? <a href="#!">Register</a>
            </p>
            <p>or sign up with:</p>
            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-facebook-f"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-google"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-twitter"></i>
            </button>

            <button type="button" class="btn btn-link btn-floating mx-1">
              <i class="fab fa-github"></i>
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
