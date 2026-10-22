/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useRef, useState } from "react";
import "./MarcaAgua.css";

function MarcaAgua() {
  const canvasRef = useRef(null);

  const [imagen, setImagen] = useState(null);
  const [logo, setLogo] = useState(null);
  const [nombreArchivo, setNombreArchivo] = useState("imagen");

  const [texto, setTexto] = useState("@el.joyboy.de.chignautla");
  const [color, setColor] = useState("#ffffff");
  const [tamano, setTamano] = useState(30);
  const [opacidad, setOpacidad] = useState(100);
  const [rotacion, setRotacion] = useState(-25);
  const [posicion, setPosicion] = useState("abajo-derecha");
  const [repetir, setRepetir] = useState(true);

  const [usarTexto, setUsarTexto] = useState(true);
  const [usarLogo, setUsarLogo] = useState(true);
  const [tamanoLogo, setTamanoLogo] = useState(100);
  const [logoPosicion, setLogoPosicion] = useState("abajo-derecha");
  const [logoOpacidad, setLogoOpacidad] = useState(50);
  const [logoRepetir, setLogoRepetir] = useState(true);
  const [descargando, setDescargando] = useState(false);

  function cargarArchivo(evento, tipo) {
    const archivo = evento.target.files?.[0];
    if (!archivo) return;

    if (!archivo.type.startsWith("image/")) {
      alert("Selecciona un archivo de imagen válido.");
      evento.target.value = "";
      return;
    }

    const lector = new FileReader();

    lector.onload = () => {
      if (tipo === "imagen") {
        setImagen(lector.result);
        setNombreArchivo(
          archivo.name.replace(/\.[^.]+$/, "") || "imagen"
        );
      } else {
        setLogo(lector.result);
        setUsarLogo(true);
      }
    };

    lector.readAsDataURL(archivo);
  }

  function dibujarMarca(ctx, ancho, alto) {
    if (!usarTexto || !texto.trim()) return;

    ctx.save();
    ctx.globalAlpha = opacidad / 100;
    ctx.fillStyle = color;
    ctx.font = `bold ${tamano}px Arial, sans-serif`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.shadowColor = "rgba(0,0,0,0.65)";
    ctx.shadowBlur = Math.max(2, tamano * 0.12);
    ctx.shadowOffsetX = 1;
    ctx.shadowOffsetY = 1;

    if (repetir) {
      ctx.translate(ancho / 2, alto / 2);
      ctx.rotate((rotacion * Math.PI) / 180);

      const pasoX = Math.max(
        ctx.measureText(texto).width + tamano * 2,
        ancho / 6
      );
      const pasoY = Math.max(tamano * 3, alto / 8);

      for (let y = -alto; y <= alto; y += pasoY) {
        for (let x = -ancho; x <= ancho; x += pasoX) {
          ctx.fillText(texto, x, y);
        }
      }
    } else {
      const margen = Math.max(16, tamano);
      let x = ancho / 2;
      let y = alto / 2;

      switch (posicion) {
        case "arriba-izquierda":
          x = margen + ctx.measureText(texto).width / 2;
          y = margen + tamano / 2;
          break;
        case "arriba-derecha":
          x = ancho - margen - ctx.measureText(texto).width / 2;
          y = margen + tamano / 2;
          break;
        case "abajo-izquierda":
          x = margen + ctx.measureText(texto).width / 2;
          y = alto - margen - tamano / 2;
          break;
        case "abajo-derecha":
          x = ancho - margen - ctx.measureText(texto).width / 2;
          y = alto - margen - tamano / 2;
          break;
        default:
          break;
      }

      ctx.translate(x, y);
      ctx.rotate((rotacion * Math.PI) / 180);
      ctx.fillText(texto, 0, 0);
    }

    ctx.restore();
  }

  function dibujarLogo(ctx, logoImagen, ancho, alto) {
    if (!usarLogo || !logoImagen) return;

    const margen = Math.max(12, Math.min(ancho, alto) * 0.025);
    const limiteAncho = ancho * 0.35;
    const limiteAlto = Math.min(alto * 0.25, tamanoLogo * 2.5);

    const escala = Math.min(
      limiteAncho / logoImagen.naturalWidth,
      limiteAlto / logoImagen.naturalHeight,
      1
    );

    const logoAncho = logoImagen.naturalWidth * escala;
    const logoAlto = logoImagen.naturalHeight * escala;

    let x = (ancho - logoAncho) / 2;
    let y = (alto - logoAlto) / 2;

    switch (logoPosicion) {
      case "arriba-izquierda":
        x = margen;
        y = margen;
        break;
      case "arriba-derecha":
        x = ancho - margen - logoAncho;
        y = margen;
        break;
      case "abajo-izquierda":
        x = margen;
        y = alto - margen - logoAlto;
        break;
      case "abajo-derecha":
        x = ancho - margen - logoAncho;
        y = alto - margen - logoAlto;
        break;
      default:
        break;
    }

    ctx.save();
    ctx.globalAlpha = logoOpacidad / 100;

    if (logoRepetir) {
      const pasoX = Math.max(logoAncho * 1.8, ancho / 5);
      const pasoY = Math.max(logoAlto * 2, alto / 5);

      for (let py = margen; py < alto; py += pasoY) {
        for (let px = margen; px < ancho; px += pasoX) {
          ctx.drawImage(
            logoImagen,
            px,
            py,
            logoAncho,
            logoAlto
          );
        }
      }
    } else {
      ctx.drawImage(logoImagen, x, y, logoAncho, logoAlto);
    }

    ctx.restore();
  }

  useEffect(() => {
    if (!imagen) return;

    let cancelado = false;
    let logoImagen = null;

    const foto = new Image();

    foto.onload = () => {
      if (cancelado) return;

      const canvas = canvasRef.current;
      if (!canvas) return;

      canvas.width = foto.naturalWidth;
      canvas.height = foto.naturalHeight;

      const ctx = canvas.getContext("2d");
      if (!ctx) return;

      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ctx.drawImage(foto, 0, 0);

      const terminar = () => {
        if (cancelado) return;

        dibujarLogo(
          ctx,
          logoImagen,
          canvas.width,
          canvas.height
        );

        dibujarMarca(ctx, canvas.width, canvas.height);
      };

      if (usarLogo && logo) {
        logoImagen = new Image();

        logoImagen.onload = terminar;
        logoImagen.onerror = terminar;
        logoImagen.src = logo;
      } else {
        terminar();
      }
    };

    foto.onerror = () => {
      if (!cancelado) alert("No se pudo abrir la imagen.");
    };

    foto.src = imagen;

    return () => {
      cancelado = true;
    };
  }, [
    imagen,
    logo,
    texto,
    color,
    tamano,
    opacidad,
    rotacion,
    posicion,
    repetir,
    usarTexto,
    usarLogo,
    tamanoLogo,
    logoPosicion,
    logoOpacidad,
    logoRepetir,
  ]);

  function descargarImagen() {
    const canvas = canvasRef.current;
    if (!canvas || !imagen) return;

    setDescargando(true);

    canvas.toBlob((blob) => {
      setDescargando(false);

      if (!blob) {
        alert("No se pudo generar la imagen.");
        return;
      }

      const url = URL.createObjectURL(blob);
      const enlace = document.createElement("a");

      enlace.href = url;
      enlace.download = `${nombreArchivo}-marca-agua.png`;
      document.body.appendChild(enlace);
      enlace.click();
      enlace.remove();

      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }, "image/png");
  }

  return (
    <main className="marca-agua">
      <header className="marca-agua-header">
        <h2>Marca de agua</h2>
        <p>Personaliza y protege tus fotografías</p>
      </header>

      <section className="marca-agua-panel">
        <label className="marca-agua-boton-subir">
          <span>📷 Elegir fotografía</span>
          <input
            type="file"
            accept="image/*"
            onChange={(e) => cargarArchivo(e, "imagen")}
          />
        </label>

        {imagen && (
          <>
            <section className="marca-agua-seccion">
              <h3>Texto</h3>

              <label className="marca-agua-switch">
                <input
                  type="checkbox"
                  checked={usarTexto}
                  onChange={(e) => setUsarTexto(e.target.checked)}
                />
                Mostrar texto
              </label>

              {usarTexto && (
                <>
                  <label className="marca-agua-label">
                    Texto de la marca
                    <input
                      type="text"
                      maxLength={150}
                      value={texto}
                      onChange={(e) => setTexto(e.target.value)}
                      placeholder="Ej. © Urbanos Rojos"
                    />
                  </label>

                  <div className="marca-agua-campo">
                    <label htmlFor="texto-color">Color del texto</label>
                    <input
                      id="texto-color"
                      type="color"
                      value={color}
                      onChange={(e) => setColor(e.target.value)}
                    />
                  </div>

                  <label className="marca-agua-label">
                    Tamaño: {tamano} px
                    <input
                      type="range"
                      min="12"
                      max="120"
                      value={tamano}
                      onChange={(e) => setTamano(Number(e.target.value))}
                    />
                  </label>

                  <label className="marca-agua-label">
                    Transparencia: {opacidad}%
                    <input
                      type="range"
                      min="5"
                      max="100"
                      value={opacidad}
                      onChange={(e) => setOpacidad(Number(e.target.value))}
                    />
                  </label>

                  <label className="marca-agua-label">
                    Inclinación: {rotacion}°
                    <input
                      type="range"
                      min="-90"
                      max="90"
                      value={rotacion}
                      onChange={(e) => setRotacion(Number(e.target.value))}
                    />
                  </label>

                  <label className="marca-agua-label">
                    Posición del texto
                    <select
                      value={posicion}
                      onChange={(e) => setPosicion(e.target.value)}
                      disabled={repetir}
                    >
                      <option value="centro">Centro</option>
                      <option value="arriba-izquierda">Arriba izquierda</option>
                      <option value="arriba-derecha">Arriba derecha</option>
                      <option value="abajo-izquierda">Abajo izquierda</option>
                      <option value="abajo-derecha">Abajo derecha</option>
                    </select>
                  </label>

                  <label className="marca-agua-switch">
                    <input
                      type="checkbox"
                      checked={repetir}
                      onChange={(e) => setRepetir(e.target.checked)}
                    />
                    Repetir texto por toda la imagen
                  </label>
                </>
              )}
            </section>

            <section className="marca-agua-seccion">
              <h3>Logo transparente</h3>

              <label className="marca-agua-boton-subir marca-agua-boton-logo">
                <span>{logo ? "🔄 Cambiar logo" : "🖼️ Elegir logo PNG"}</span>
                <input
                  type="file"
                  accept="image/*"
                  onChange={(e) => cargarArchivo(e, "logo")}
                />
              </label>

              {logo && (
                <>
                  <div className="marca-agua-logo-preview">
                    <img src={logo} alt="Vista previa del logo" />
                    <button
                      type="button"
                      onClick={() => setLogo(null)}
                    >
                      Quitar logo
                    </button>
                  </div>

                  <label className="marca-agua-switch">
                    <input
                      type="checkbox"
                      checked={usarLogo}
                      onChange={(e) => setUsarLogo(e.target.checked)}
                    />
                    Mostrar logo
                  </label>

                  {usarLogo && (
                    <>
                      <label className="marca-agua-label">
                        Tamaño del logo: {tamanoLogo}%
                        <input
                          type="range"
                          min="10"
                          max="100"
                          value={tamanoLogo}
                          onChange={(e) =>
                            setTamanoLogo(Number(e.target.value))
                          }
                        />
                      </label>

                      <label className="marca-agua-label">
                        Transparencia del logo: {logoOpacidad}%
                        <input
                          type="range"
                          min="5"
                          max="100"
                          value={logoOpacidad}
                          onChange={(e) =>
                            setLogoOpacidad(Number(e.target.value))
                          }
                        />
                      </label>

                      <label className="marca-agua-label">
                        Posición del logo
                        <select
                          value={logoPosicion}
                          onChange={(e) => setLogoPosicion(e.target.value)}
                          disabled={logoRepetir}
                        >
                          <option value="centro">Centro</option>
                          <option value="arriba-izquierda">Arriba izquierda</option>
                          <option value="arriba-derecha">Arriba derecha</option>
                          <option value="abajo-izquierda">Abajo izquierda</option>
                          <option value="abajo-derecha">Abajo derecha</option>
                        </select>
                      </label>

                      <label className="marca-agua-switch">
                        <input
                          type="checkbox"
                          checked={logoRepetir}
                          onChange={(e) => setLogoRepetir(e.target.checked)}
                        />
                        Repetir logo por toda la imagen
                      </label>
                    </>
                  )}
                </>
              )}

              {!logo && (
                <p className="marca-agua-ayuda">
                  Opcional. Si no eliges un logo, podrás usar solamente
                  el texto. Se recomienda PNG con fondo transparente.
                </p>
              )}
            </section>

            <section className="marca-agua-seccion">
              <h3>Resultado</h3>
              <div className="marca-agua-vista">
                <canvas ref={canvasRef} />
              </div>
              <button
                type="button"
                className="marca-agua-descargar"
                onClick={descargarImagen}
                disabled={descargando}
              >
                {descargando
                  ? "Preparando imagen..."
                  : "⬇ Descargar imagen"}
              </button>
            </section>
          </>
        )}

        {!imagen && (
          <p className="marca-agua-ayuda">
            Primero selecciona la fotografía que deseas editar.
          </p>
        )}
      </section>
    </main>
  );
}

export default MarcaAgua;
