import { propiedadesEnVenta } from "./Arrayspropiedades.js";

const container = document.querySelector("#containerpropiedades")


export const enVenta = (propiedadesEnVenta) => {
    let contenidoHTML = ""

    for (const propiedad  of propiedadesEnVenta) {
        contenidoHTML += `
    <div>
           <h3> ${propiedad.nombre}</h3>
           <img src="${propiedad.src}" alt="Imagen propiedad">
           <p> ${propiedad.descripcion}</p>
           <p> ${propiedad.ubicacion}</p>
           <p> ${propiedad.habitaciones}</p>
           <p> ${propiedad.costo}</p>
           <p  style="color: ${propiedad.fumar ? 'blue' : 'red'}"> ${propiedad.fumar ? 'Permitido fumar' : 'No se permite fumar'}</p>
           <p style="color: ${propiedad.mascotas ? 'blue' : 'red'}"> ${propiedad.mascotas ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>
      </div>
        `
    }
    container.innerHTML = contenidoHTML
}

enVenta(propiedadesEnVenta)