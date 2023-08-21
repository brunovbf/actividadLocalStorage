const dato = document.getElementById('data');
const infoGuardada = localStorage.getItem('data');

if (infoGuardada) {
  dato.textContent = infoGuardada;
}