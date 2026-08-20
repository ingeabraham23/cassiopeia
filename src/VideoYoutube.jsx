/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import "./VideoYoutube.css";

function VideoYoutube({ url }) {
  const [copiado, setCopiado] = useState(false);

  // Obtener ID del video de YouTube
  function obtenerVideoId(url) {
    try {
      const urlObj = new URL(url);

      if (urlObj.hostname.includes("youtu.be")) {
        return urlObj.pathname.substring(1);
      }

      if (urlObj.hostname.includes("youtube.com")) {
        return urlObj.searchParams.get("v");
      }

      return null;
    } catch {
      return null;
    }
  }

  const videoId = obtenerVideoId(url);

  if (!videoId) {
    return (
      <div className="youtube-error">
        No se pudo cargar el video.
      </div>
    );
  }

  const youtubeUrl = `https://www.youtube.com/watch?v=${videoId}`;

  // COPIAR
  async function copiarLink() {
    try {
      await navigator.clipboard.writeText(youtubeUrl);

      setCopiado(true);

      setTimeout(() => {
        setCopiado(false);
      }, 2000);
    } catch (error) {
      console.error("No fue posible copiar el enlace", error);
    }
  }

  // COMPARTIR
  async function compartirLink() {
    try {
      if (navigator.share) {
        await navigator.share({
          title: "Mira este video",
          url: youtubeUrl,
        });
      } else {
        await copiarLink();
      }
    } catch (error) {
      // El usuario canceló el menú de compartir
      console.log("Compartir cancelado");
    }
  }

  return (
    <div className="youtube-container">

      {/* VIDEO */}
      <div className="youtube-video">
        <iframe
          src={`https://www.youtube.com/embed/${videoId}`}
          title="Video de YouTube"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      </div>

      {/* BOTONES */}
      <div className="youtube-botones">

        <a
          href={youtubeUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="youtube-boton youtube-abrir"
        >
          ▶ YouTube
        </a>

        <button
          type="button"
          onClick={compartirLink}
          className="youtube-boton"
        >
          ↗ Compartir
        </button>

        <button
          type="button"
          onClick={copiarLink}
          className="youtube-boton"
        >
          {copiado ? "✓ Copiado" : "▣ Copiar"}
        </button>

      </div>

    </div>
  );
}

export default VideoYoutube;