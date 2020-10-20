export function login(nombreUsuario, password) {
  let listadoUsuarios = localStorage.getItem("usuarios");
  if (usuario === "Alejo" && password === "1234") return true;
  return false;

export function registro(usuario) {
  let listadoUsuarios = localStorage.getItem("usuarios");
  localStorage.setItem(
    "usuarios",
    JSON.stringify([listadoUsuarios, ...usuario])
  );
}

export function logout() {
  return true;
}
