import React from "react";
import "./Escalas.css";

const Escalas = () => {
  return (
    <div className="galeria-container-escalas">

      {/* LETRERO NORMAL */}
      <table>
        <thead>
          <tr>
            <th colSpan={3}>LETRERO NORMAL</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fila-edicion">
            <td>512</td>
            <td>128</td>
            <td className="tag-edicion">Edición</td>
          </tr>

          <tr className="fila-intermedia">
            <td>256</td>
            <td>64</td>
            <td className="tag-edicion">x4</td>
          </tr>

          <tr className="fila-intermedia">
            <td>128</td>
            <td>32</td>
            <td className="tag-edicion">x2</td>
          </tr>

          <tr className="fila-letrero">
            <td>64</td>
            <td>16</td>
            <td className="tag-letrero">LETRERO</td>
          </tr>
        </tbody>
      </table>


      {/* LETRERO HD */}
      <table>
        <thead>
          <tr>
            <th colSpan={3}>LETRERO HD</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fila-edicion">
            <td>640</td>
            <td>160</td>
            <td className="tag-edicion">Edición</td>
          </tr>

          <tr className="fila-intermedia">
            <td>320</td>
            <td>80</td>
            <td className="tag-edicion">x4</td>
          </tr>

          <tr className="fila-intermedia">
            <td>160</td>
            <td>40</td>
            <td className="tag-edicion">x2</td>
          </tr>

          <tr className="fila-letrero">
            <td>80</td>
            <td>20</td>
            <td className="tag-letrero">LETRERO</td>
          </tr>
        </tbody>
      </table>


      {/* LETRERO ULTRAHD */}
      <table>
        <thead>
          <tr>
            <th colSpan={3}>LETRERO ULTRAHD</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fila-edicion">
            <td>1024</td>
            <td>256</td>
            <td className="tag-edicion">Edición</td>
          </tr>

          <tr className="fila-intermedia">
            <td>512</td>
            <td>128</td>
            <td className="tag-edicion">x4</td>
          </tr>

          <tr className="fila-intermedia">
            <td>256</td>
            <td>64</td>
            <td className="tag-edicion">x2</td>
          </tr>

          <tr className="fila-letrero">
            <td>128</td>
            <td>32</td>
            <td className="tag-letrero">LETRERO</td>
          </tr>
        </tbody>
      </table>


      {/* LETRERO CUADRADO */}
      <table>
        <thead>
          <tr>
            <th colSpan={3}>LETRERO CUADRADO</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fila-edicion">
            <td>512</td>
            <td>256</td>
            <td className="tag-edicion">Edición</td>
          </tr>

          <tr className="fila-intermedia">
            <td>256</td>
            <td>128</td>
            <td className="tag-edicion">x4</td>
          </tr>

          <tr className="fila-intermedia">
            <td>128</td>
            <td>64</td>
            <td className="tag-edicion">x2</td>
          </tr>

          <tr className="fila-letrero">
            <td>64</td>
            <td>32</td>
            <td className="tag-letrero">LETRERO</td>
          </tr>
        </tbody>
      </table>

      {/* LETRERO LARGO 192 x 32 */}
      <table>
        <thead>
          <tr>
            <th colSpan={3}>LETRERO LARGO 192 x 32</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fila-edicion">
            <td>1536</td>
            <td>256</td>
            <td className="tag-edicion">Edición</td>
          </tr>

          <tr className="fila-intermedia">
            <td>768</td>
            <td>128</td>
            <td className="tag-edicion">x4</td>
          </tr>

          <tr className="fila-intermedia">
            <td>384</td>
            <td>64</td>
            <td className="tag-edicion">x2</td>
          </tr>

          <tr className="fila-letrero">
            <td>192</td>
            <td>32</td>
            <td className="tag-letrero">LETRERO</td>
          </tr>
        </tbody>
      </table>


      {/* CONFIGURAR POTHOSHOP*/}
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Configurar photoshop</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fila-edicion">
            <td>1. Edicion </td>
          </tr>
          <tr className="fila-edicion">
            <td>2. Preferencias </td>
          </tr>
          <tr className="fila-edicion">
            <td>3. Guias, cuadriculas y sectores </td>
          </tr>
          <tr className="fila-edicion">
            <td>4. Linea de cuadricula cada 8 pixeles, subdivisiones 1 </td>
          </tr>
          <tr className="fila-edicion">
            <td>5. Vista, Mostrar cuadricula </td>
          </tr>
          <tr className="fila-edicion">
            <td>5. Vista, Ecajar, Cuadricula </td>
          </tr>
          <tr className="fila-edicion">
            <td>Tip. teclas de direccion + shift mueve 10 px </td>
          </tr>
          <tr className="fila-edicion">
            <td>Vista, Nueva guía, vertical 512 px, es para la línea de arriba hacia abajo</td>
          </tr>

          <tr className="fila-edicion">
            <td>Vista, Nueva guía, horizontal 128 px, es para la línea de izquierda a derecha</td>
          </tr>


        </tbody>
      </table>

      {/* RENOMBRAR ARCHIVOS*/}
      <table>
        <thead>
          <tr>
            <th colSpan={3}>Renombrar archivos</th>
          </tr>
        </thead>
        <tbody>
          <tr className="fila-edicion">
            <td>1. Renamer den4b </td>
          </tr>
          <tr className="fila-edicion">
            <td>2. Agregar regla </td>
          </tr>
          <tr className="fila-edicion">
            <td>3. Numerar </td>
          </tr>
          <tr className="fila-edicion">
            <td>4. Donde insertar: Sustituir nombre actual </td>
          </tr>
          <tr className="fila-edicion">
            <td>5. Rellenar con ceros hasta longitud: 2 </td>
          </tr>
          <tr className="fila-edicion">
            <td>5. Sistema de numerado: Digitos decimales (0...9) </td>
          </tr>
        </tbody>
      </table>

    </div>
  );
};

export default Escalas;