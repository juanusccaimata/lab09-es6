import { curso, estudiantes, nuevoEstudiante } from "./datos.js";
import { promedio, estado } from "./calculos.js";
import reporte from "./calculos.js";

const todos = [...estudiantes, nuevoEstudiante];

console.log(`Curso: ${curso}`);

const listaHTML = document.querySelector("#reportes");

todos.forEach(estudiante => {
    console.log(reporte(estudiante));

    const { nombre, notas } = estudiante;
    const prom = promedio(...notas);
    const est = estado(prom);

    if (listaHTML) {
        listaHTML.innerHTML += `<li><strong>${nombre}</strong>: ${prom.toFixed(1)} - <em>${est}</em></li>`;
    }
});