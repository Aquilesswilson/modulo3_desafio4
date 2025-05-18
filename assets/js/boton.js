export const rutapropiedades = (ruta) => {
    location.href = ruta
}


document.querySelector(".verpropiedadesvtabtn").addEventListener("click", () => {
   
    rutapropiedades("./assets/views/ventas.html")
})


document.querySelector(".verpropiedadesarrbtn").addEventListener("click", () => {
    rutapropiedades("./assets/views/Arriendo.html")
})