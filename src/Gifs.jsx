import { useState } from "react";
import "./Gifs.css";

const BASE_URL = "https://ingeabraham23.github.io/cassiopeia/gifs/";

const categorias = [

    {
        nombre: "URBANOS ROJOS",
        gifs: [
            "ur_sani_gr.gif",
            "ur_cali_gr.gif",
            "ur_sosa_gr.gif",
            "ur_tezo_gr.gif",
            "ur_talzin_gr.gif",
            "ur_taco_gr.gif",


            "ur_centro.gif",
            "ur_centro_lib.gif",


            "ur_sani.gif",
            "ur_cali.gif",
            "ur_sosa.gif",
            "ur_tezo.gif",
            "ur_talzin.gif",
            "ur_taco.gif",
        ],
    },

    {
        nombre: "RUTA 03",
        gifs: [
            "r3_descanso.gif",
            "r3_teco_fres.gif",
            "r3_tenextepec.gif",
            "r3_tezotepec.gif",
            "r3_xaxala.gif",

            "r3_sani.gif",
            "r3_francia.gif",
            "r3_coyotzingo.gif",
            "r3_tecolote_16.gif",
            "r3_tecolote_18.gif",

        ],
    },

    {
        nombre: "RUTA 01",
        gifs: [
            "r1_atoluca.gif",
            "r1_loma.gif",
            "r1_cipreses.gif",
            "r1_ayotzingo.gif",
            "r1_ayotzingo_c.gif",
            "r1_ayotzingo_b.gif",
            "r1_ixticpan.gif",
            "r1_tianguis4.gif",
            "r1_conalep.gif",
            "r1_ixtlahuaca.gif",
            "r1_sansalvador.gif",
            "r1_sanmiguel.gif",
            "r1_huehueymico.gif",
            "r1_abastos_64.gif",
            "r1_espiritu.gif",
            "r1_secc23.gif",
            "r1_infonavit.gif",
            "r1_aurora.gif",
        ],
    },
    {
        nombre: "FESTIVIDADES",
        gifs: [
            "f_sanvalentin.gif",
            "f_hallowen_64.gif",
            "f_todosantos_64.gif",
            "f_altar_64.gif",
            "f_mexico_64.gif",
            "f_navidad_641.gif",
            "f_navidad_642.gif",
            "f_navidad_643.gif",
            "f_navidad.gif",
            "f_cristo_64.gif",
            "f_cristo.gif",
            "f_antorcha.gif",
            "f_juditas_64.gif",
            "f_carrusel.gif",
            "f_roller.gif",
            "f_expresso.gif",
            "f_gol.gif",
            "f_gol_120.gif",
            "f_gol120.gif",
            "f_korea.gif",
            "f_luciernagas.gif",
            "f_lu2.gif",
            "f_lu3.gif",
            "f_lu4.gif",
            "f_lu5.gif",
            
        ],
    },

    {
        nombre: "NEGROS",
        gifs: [
            "n_64.gif",
            "n_80.gif",
            "n_128.gif",
        ],
    },

    {
        nombre: "CHARACTERS",
        gifs: [
            "ch_mapache_t.gif",
            "ch_pio.gif",
            "ch_pio_largo.gif",
            "ch_predator.gif",
            "ch_diablin.gif",
            "ch_taz.gif",
            "ch_marvin.gif",
            "ch_djsheriff.gif",
            "ch_chuky.gif",
            "ch_chicapala.gif",
            "ch_jhonny.gif",
            "ch_johnny.gif",
            "ch_mapache.gif",
            "ch_mapacherun.gif",
            "ch_garfield99.gif",
            "ch_garfield.gif",
            "ch_marvinpistol.gif",
            "ch_marvinpistol99.gif",
            "ch_diablo.gif",
            "mexico_fifa.gif",
            "taz69.gif",
            "mexico_45.gif",
            "mexico_99.gif",

        ],
    },

    {
        nombre: "CALCOMANIAS",
        gifs: [
            "calc_wey.gif",
            "calc_wey_6432.gif",
            "calc_todas.gif",
        ],
    },

    {
        nombre: "ICONOS Y LOGOS",
        gifs: [
            "ico_imss.gif",
        ],
    },

    {
        nombre: "OTROS",
        gifs: [
            "otro_paleta.gif",
        ],
    },

    {
        nombre: "URBANOS VERDES",
        gifs: [
            "uv_acatenobuap.gif",
            "uv_tepetitan.gif",
            "uv_secc23lagarita.gif",
            "uv_seccion1.gif",
            "uv_balto.gif",
            "uv_centro.gif",
            "uv_besos.gif",
            "uv_acatenobuap2.gif",
        ],
    },

    {
        nombre: "RUTA 02",
        gifs: [
            "r2_acateno.gif",
            "r2_invernadero.gif",
            "r2_tepetitan.gif",
            "r2_amila.gif",
            "r2_brisas.gif",
            "r2_tec.gif",
            "r2_3cruces.gif",
            "r2_tecnica.gif",
            "r2_esfaa.gif",
        ],
    },
];

const formatearNombre = (nombre) => {
    return nombre
        .replace(/\.gif$/i, "")
        .replace(/_/g, " ")
        .replace(/\b\w/g, (l) => l.toUpperCase());
};

function Gifs() {
    const [copiadoIndex, setCopiadoIndex] = useState(null);
    const [sizes, setSizes] = useState({});

    const copiarLink = async (gifUrl, index) => {
        try {
            await navigator.clipboard.writeText(gifUrl);

            setCopiadoIndex(index);

            setTimeout(() => {
                setCopiadoIndex(null);
            }, 1500);
        } catch (error) {
            console.error("Error al copiar:", error);
            alert("No se pudo copiar el enlace 😞");
        }
    };

    const handleImageLoad = (e, key) => {
        const { naturalWidth, naturalHeight } = e.target;

        setSizes((prev) => ({
            ...prev,
            [key]: `${naturalWidth}x${naturalHeight}`,
        }));
    };

    return (
        <div className="galeria-container">

            {categorias.map((categoria, catIndex) => (
                <div key={catIndex} className="categoria">

                    <h2 className="categoria-titulo">
                        {categoria.nombre}
                    </h2>

                    <div className="categoria-scroll">

                        {categoria.gifs.map((gif, index) => {

                            const gifUrl = `${BASE_URL}${gif}`;
                            const key = `${catIndex}-${index}`;

                            return (
                                <div key={key} className="gif-card">

                                    <img
                                        src={gifUrl}
                                        alt={gif}
                                        className="gif-img"
                                        onLoad={(e) => handleImageLoad(e, key)}
                                    />

                                    <p className="gif-nombre">
                                        {formatearNombre(gif)}
                                    </p>

                                    <p className="gif-size">
                                        {sizes[key]}
                                    </p>

                                    <div className="botones">

                                        <a
                                            href={gifUrl}
                                            download
                                            className="btn-descargar"
                                        >
                                            Descargar
                                        </a>

                                        <button
                                            className="btn-copiar"
                                            onClick={() => copiarLink(gifUrl, key)}
                                        >
                                            {copiadoIndex === key
                                                ? "¡Copiado!"
                                                : "Link"}
                                        </button>

                                    </div>

                                </div>
                            );
                        })}

                    </div>
                </div>
            ))}

        </div>
    );
}

export default Gifs;