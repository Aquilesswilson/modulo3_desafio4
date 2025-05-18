import { propiedadesEnVenta, propiedadesEnarriendo } from "./Arrayspropiedades.js";

export const mostrarpropiedades = (Arrayspropiedades, contenedorHTML) => {

    const container = document.querySelector(contenedorHTML)

    let count = 0

    let contenidoHTML = ""

    for (const propiedad of Arrayspropiedades) {
        if (count < 3) {

            contenidoHTML += ` 
            <div class="card-propiedad">   
               <h3> ${propiedad.nombre}</h3>   
               <img src="${propiedad.src}" alt="Imagen propiedad">
               <p>  ${propiedad.descripcion}</p>
               <p> $ ${propiedad.costo}</p>
               <p style="color: ${propiedad.fumar ? 'blue' : 'red'}"> ${propiedad.fumar ? 'Permitido fumar' : 'No se permite fumar'}</p>
               <p style="color: ${propiedad.mascotas ? 'blue' : 'red'}"> ${propiedad.mascotas ? 'Mascotas permitidas' : 'No se permiten mascotas'}</p>

            </div>
            `
            count++
        }
    }

    container.innerHTML = contenidoHTML
}


mostrarpropiedades(propiedadesEnVenta, ".propiedadesvtacontainer")
mostrarpropiedades(propiedadesEnarriendo, ".propiedadesarrcontainer")

