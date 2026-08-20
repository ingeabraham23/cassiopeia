/* eslint-disable no-unused-vars */
import React from "react";
import "./Grafos.css";

const grafos = [
  {
    titulo: "Diodo Schottky",
    imagen: "diodoSchottky.png",
  },
  {
    titulo: "Foto Real Diodo Schottky",
    imagen: "diodoFoto.png",
  },
];

function Grafos() {

  const descargarImagen = (imagen, titulo) => {
    const ruta = `${import.meta.env.BASE_URL}grafos/${imagen}`;

    const enlace = document.createElement("a");
    enlace.href = ruta;
    enlace.download = imagen;
    document.body.appendChild(enlace);
    enlace.click();
    document.body.removeChild(enlace);
  };

  return (
    <div className="grafos-container">

      {grafos.map((grafo, index) => (
        <section className="grafo-item" key={index}>

          <h2 className="grafo-titulo">
            {grafo.titulo}
          </h2>

          <div className="grafo-imagen-container">
            <img
              src={`${import.meta.env.BASE_URL}grafos/${grafo.imagen}`}
              alt={grafo.titulo}
              className="grafo-imagen"
            />
          </div>

          <button
            className="grafo-descargar"
            onClick={() =>
              descargarImagen(grafo.imagen, grafo.titulo)
            }
          >
            ↓ Descargar imagen
          </button>

        </section>
      ))}

    </div>
  );
}

export default Grafos;