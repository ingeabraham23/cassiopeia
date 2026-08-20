import { useState } from "react";
import "./Gifs.css";

const BASE_URL = "https://ingeabraham23.github.io/cassiopeia/gifs/";

const categorias = [

    {
        nombre: "CALCOMANIAS",
        gifs: [
            "calc_wey.gif",
            "calc_wey_6432.gif",
            "calc_todas.gif",
        ],
    },

    {
        nombre: "CHARACTERS",
        gifs: [
            "ch_chicapala.gif",
            "ch_diablin.gif",
            "ch_diablo.gif",
            "ch_djsheriff.gif",
            "ch_garfield.gif",
            "ch_garfield99.gif",
            "ch_jhonny.gif",
            "ch_mapache_t.gif",
            "ch_marvin.gif",
            "ch_marvinpistol.gif",
            "ch_marvinpistol99.gif",
            "ch_pio.gif",
            "ch_pio_largo.gif",
            "ch_predator.gif",
            "ch_takechi.gif",
            "ch_taz.gif",
            "ch_taz69.gif",
        ],
    },

    {
        nombre: "FESTIVIDADES",
        gifs: [
            "f_altar_64.gif",
            "f_antorcha.gif",
            "f_caballitos_8s.gif",
            "f_carrusel.gif",
            "f_cristo.gif",
            "f_cristo_64.gif",
            "f_expresso.gif",
            "f_feria.gif",
            "f_feria_7s.gif",
            "f_feria_chico.gif",
            "f_feria_g_corto.gif",
            "f_feria_prueba.gif",
            "f_feria3.gif",
            "f_feria4.gif",
            "f_gol.gif",
            "f_gol120.gif",
            "f_hallowen_64.gif",
            "f_juditas_64.gif",
            "f_korea.gif",
            "f_luciernagas.gif",
            "f_mexico_64.gif",
            "f_navidad.gif",
            "f_navidad_641.gif",
            "f_navidad_642.gif",
            "f_navidad_643.gif",
            "f_navidad12020.gif",
            "f_roller.gif",
            "f_sanvalentin.gif",
            "f_todosantos_64.gif",
            "f_vivamex_full.gif",           
        ],
    },

        {
        nombre: "ICONOS Y LOGOS",
        gifs: [
            "ico_imss.gif",
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
        nombre: "OTROS",
        gifs: [
            "otro_paleta.gif",
        ],
    },

    {
        nombre: "RUTA 01",
        gifs: [
            "r1_abastos_64.gif",
            "r1_atoluca.gif",
            "r1_aurora.gif",
            "r1_ayotzingo.gif",
            "r1_ayotzingo_b.gif",
            "r1_ayotzingo_c.gif",
            "r1_cipreses.gif",
            "r1_conalep.gif",
            "r1_espiritu.gif",
            "r1_huehueymico.gif",
            "r1_infonavit.gif",
            "r1_ixticpan.gif",
            "r1_ixticpan_mexico.gif",
            "r1_ixtlahuaca.gif",
            "r1_loma.gif",
            "r1_sanmiguel.gif",
            "r1_sansalvador.gif",
            "r1_secc23.gif",
            "r1_secc23_zon.gif",
            "r1_tianguis4.gif",
            "r1_zontecomaco.gif",
        ],
    },

    {
        nombre: "RUTA 02",
        gifs: [
            "r2_3cruces.gif",
            "r2_acateno.gif",
            "r2_amila.gif",
            "r2_brisas.gif",
            "r2_esfaa.gif",
            "r2_invernadero.gif",
            "r2_tec.gif",
            "r2_tecnica.gif",
            "r2_tepetitan.gif",
        ],
    },

    {
        nombre: "RUTA 03",
        gifs: [
            "r3_coyot_mex.gif",
            "r3_coyotzingo.gif",
            "r3_descanso.gif",
            "r3_francia.gif",
            "r3_francia_mexico.gif",
            "r3_sani.gif",
            "r3_sanisidro_mexico.gif",
            "r3_teco_fres.gif",
            "r3_tecolote_16.gif",
            "r3_tecolote_18.gif",
            "r3_tenex_mex.gif",
            "r3_tenextepec.gif",
            "r3_tezo_mex.gif",
            "r3_tezotepec.gif",
            "r3_xaxala.gif",

        ],
    },

    {
        nombre: "URBANOS ROJOS",
        gifs: [
            "ur_cali.gif",
            "ur_cali_gr.gif",
            "ur_centro.gif",
            "ur_centro_lib.gif",
            "ur_sani.gif",
            "ur_sani_gr.gif",
            "ur_sosa.gif",
            "ur_sosa_gr.gif",
            "ur_taco.gif",
            "ur_taco_gr.gif",
            "ur_talzin.gif",
            "ur_talzin_gr.gif",
            "ur_tezo.gif",
            "ur_tezo_gr.gif",
        ],
    },

    
    {
        nombre: "URBANOS VERDES",
        gifs: [
            "uv_acateno_mx.gif",
            "uv_acatenobuap.gif",
            "uv_acatenobuap2.gif",
            "uv_balto.gif",
            "uv_besos.gif",
            "uv_centro.gif",
            "uv_mexcal_1a_mex.gif",
            "uv_mexcal_mex1.gif",
            "uv_mexcal_mex2.gif",
            "uv_secc23lagarita.gif",
            "uv_seccion1.gif",
            "uv_tepetitan.gif",
            "uv_tezongo_mex.gif",
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