/* =========================================================================
   CONFIGURACIÓN DE UNAULA

   Son los dos valores que hay que cambiar para poner la landing en marcha.
   Reemplaza el texto entre comillas por la dirección real de cada uno.

   ===== CAMBIO 30-SEP =====
   URL_INSCRIPCION  ahora la usan los botones CONFIRMAR ASISTENCIA (antes
                    INSCRIBIRME). Se conserva el nombre para no romper la
                    configuración que ya exista.
   URL_LIBERAR_CUPO es nueva: la usan los botones LIBERAR CUPO y el enlace
                    de la pregunta frecuente "¿Cómo libero mi cupo...?".
   ========================================================================= */
const URL_INSCRIPCION  = "PEGAR_AQUI_LA_URL_DEL_FORMULARIO_DE_UNAULA";
const URL_LIBERAR_CUPO = "PEGAR_AQUI_LA_URL_PARA_LIBERAR_CUPO";

/**
 * ========================================================================
 * INTERRUPTORES DE SECCIÓN
 *
 * Poner una bandera en false oculta esa sección de la página. Útil mientras
 * su contenido definitivo no esté listo.
 * ========================================================================
 */
const CONFIG = {
  secciones: {
    mostrarAgenda: true,
    mostrarHistorias: true
  }
};

/**
 * ========================================================================
 * DATOS DE HISTORIAS DE ÉXITO (Edición centralizada de historias)
 * ========================================================================
 */
const HISTORIAS = [
  /* ===== CAMBIO 30-SEP-B: la primera historia antes era
     "Cuando servir se convierte en legado" / "UNAULA forma líderes
     comprometidos con el…". `enlace` es opcional: si no está, la
     tarjeta dice "ver mas". `miniatura` también es opcional: es la foto
     recortada que se ve en la tarjeta; la ventana usa `imagen`. ===== */
  {
    titulo: "Jeison Correa",
    resumen: "Egresado de la Licenciatura en Ciencias Sociales – UNAULA <br>Docente del magisterio que…",
    cuerpo: "[HISTORIA COMPLETA PENDIENTE]",
    imagen: "assets/img/historia-jeison-correa.jpg",
    miniatura: "assets/img/historia-jeison-correa-tarjeta.jpg",
    enlace: "CONOCE SU HISTORIA"
  },
  {
    titulo: "Construir empresa, construir país",
    resumen: "Los egresados UNAULA crean oportunidades y generan…",
    cuerpo: "[HISTORIA COMPLETA PENDIENTE]",
    imagen: "assets/img/foto-celebrar-1-historia.jpg"
  },
  {
    titulo: "Cambiar vidas también es éxito",
    resumen: "Transformar vidas es una forma de construir legado…",
    cuerpo: "[HISTORIA COMPLETA PENDIENTE]",
    imagen: "assets/img/foto-celebrar-1-historia.jpg"
  },
  {
    titulo: "El conocimiento que transforma el futuro",
    resumen: "El conocimiento genera transformación y progreso…",
    cuerpo: "[HISTORIA COMPLETA PENDIENTE]",
    imagen: "assets/img/foto-celebrar-1-historia.jpg"
  }
];

/* ===== INICIO CAMBIO 30-SEP-B: VIDEOS ====================================
   Los cuatro videos de la sección "60 años. Miles de historias.".
   En `youtube` se pega el enlace del video tal como lo da YouTube
   (sirve youtube.com/watch?v=..., youtu.be/..., youtube.com/shorts/...)
   o solo su código. Mientras esté vacío, la tarjeta muestra la foto de
   `portada` (la misma del diseño de Canva) y el botón no hace nada.
   YouTube solo se carga cuando la persona hace clic en el video: antes
   se muestra la miniatura, así la página no se vuelve pesada.
   ========================================================================= */
const VIDEOS = [
  { youtube: "", titulo: "Video 1", portada: "assets/img/video-portada.jpg" },
  { youtube: "", titulo: "Video 2", portada: "assets/img/video-portada.jpg" },
  { youtube: "", titulo: "Video 3", portada: "assets/img/video-portada.jpg" },
  { youtube: "", titulo: "Video 4", portada: "assets/img/video-portada.jpg" }
];
/* ===== FIN CAMBIO 30-SEP-B: VIDEOS ===== */

/**
 * ========================================================================
 * DATOS DE AGENDA (Edición centralizada de momentos)
 * ========================================================================
 */
const AGENDA = [
  { hora: "7:00 p. m. - 8:30 p. m.", momento: "Llegada y registro" },
  { hora: "8:30 p. m. - 9:00 p. m.", momento: "Bienvenida" },
  { hora: "Por confirmar", momento: "Historias que nos inspiran" },
  { hora: "Por confirmar", momento: "Actividad / experiencia" },
  { hora: "Por confirmar", momento: "Celebración" },
  { hora: "Por confirmar", momento: "Seguimos haciendo historia" }
];

/**
 * ========================================================================
 * ÚNICO PUNTO DE INTEGRACIÓN CON LOS DATOS
 * ========================================================================
 */
/**
 * ========================================================================
 * CONSTRUCTOR DE URL PARA MICROSOFT FORMS
 * ========================================================================
 */
/**
 * ========================================================================
 * GESTIÓN DE FLUJO Y TARJETA DE REGISTRO
 * ========================================================================
 */
function irAInscripcion(e) {
  if (e) e.preventDefault();
  if (!URL_INSCRIPCION || URL_INSCRIPCION.startsWith("PEGAR_")) {
    console.warn("Falta configurar URL_INSCRIPCION al inicio de este archivo.");
    return;
  }
  window.open(URL_INSCRIPCION, "_blank", "noopener");
}
/* ===== INICIO CAMBIO 30-SEP: botón LIBERAR CUPO ===== */
function irALiberarCupo(e) {
  if (e) e.preventDefault();
  if (!URL_LIBERAR_CUPO || URL_LIBERAR_CUPO.startsWith("PEGAR_")) {
    console.warn("Falta configurar URL_LIBERAR_CUPO al inicio de este archivo.");
    return;
  }
  window.open(URL_LIBERAR_CUPO, "_blank", "noopener");
}
/* ===== FIN CAMBIO 30-SEP ===== */
function gestionarBarraFija() {
  const hero = document.getElementById("seccion-hero");
  const barra = document.getElementById("barra-fija");
  if (!hero || !barra) return;

  window.addEventListener("scroll", () => {
    const rect = hero.getBoundingClientRect();
    if (rect.bottom < 60) {
      barra.classList.add("visible");
    } else {
      barra.classList.remove("visible");
    }
  }, { passive: true });
}


function scrollHistorias(direccion) {
  const track = document.getElementById("carrusel-historias");
  if (track) {
    track.scrollBy({ left: direccion * 330, behavior: "smooth" });
  }
}

/**
 * ========================================================================
 * GESTIÓN DEL MODAL NATIVO DE HISTORIAS DE ÉXITO (<dialog>)
 * ========================================================================
 */
let tarjetaDisparadora = null;

function abrirModalHistoria(indice) {
  const historia = HISTORIAS[indice];
  if (!historia) return;

  tarjetaDisparadora = document.activeElement;

  const modal = document.getElementById("modal-historia");
  const img = document.getElementById("modal-historia-img");
  const tit = document.getElementById("modal-historia-titulo");
  const meta = document.getElementById("modal-historia-meta");
  const txt = document.getElementById("modal-historia-texto");

  if (img) {
    img.src = historia.imagen || "assets/img/foto-celebrar-1-historia.jpg";
    img.alt = historia.titulo;
  }
  if (tit) {
    const palabras = (historia.titulo || "").trim().split(/\s+/);
    if (palabras.length > 1) {
      const ultima = palabras.pop();
      tit.innerHTML = `${palabras.join(" ")} <span class="trazo-fin trazo-fin-dorado">${ultima}</span>`;
    } else {
      tit.innerHTML = `<span class="trazo-fin trazo-fin-dorado">${historia.titulo}</span>`;
    }
  }
  if (meta) meta.style.display = "none";
  if (txt) txt.textContent = historia.cuerpo || "[HISTORIA COMPLETA PENDIENTE]";

  if (modal && typeof modal.showModal === "function") {
    modal.showModal();
    document.body.style.overflow = "hidden";
  }
}

function cerrarModalHistoria() {
  const modal = document.getElementById("modal-historia");
  if (modal && modal.open) {
    modal.close();
  }
}

function renderizarHistorias() {
  const track = document.getElementById("carrusel-historias");
  if (!track || !Array.isArray(HISTORIAS)) return;
  const fotoGenerica = "assets/img/foto-celebrar-1-historia.jpg";
  /* CAMBIO 30-SEP-B: texto del enlace configurable (h.enlace) y foto de
     respaldo si la imagen de la historia todavía no está en el servidor. */
  track.innerHTML = HISTORIAS.map((h, i) => `
    <button type="button" class="card-historia-carrusel" onclick="abrirModalHistoria(${i})" aria-haspopup="dialog" aria-label="Abrir historia: ${h.titulo}">
      <img src="${h.miniatura || h.imagen || fotoGenerica}" alt="${h.titulo}" class="foto-historia-item" loading="lazy" onerror="this.onerror=null;this.src='${fotoGenerica}'">
      <div class="historia-titulo-item">${h.titulo}</div>
      <div class="historia-desc-item">${h.resumen}</div>
      <span class="historia-ver-mas">${h.enlace || "ver mas"}</span>
    </button>
  `).join("");
}

/* ===== INICIO CAMBIO 30-SEP-B: VIDEOS ===== */
function idYoutube(valor) {
  const v = (valor || "").trim();
  if (!v) return "";
  if (/^[\w-]{11}$/.test(v)) return v;
  const m = v.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/|\/live\/)([\w-]{11})/);
  return m ? m[1] : "";
}

function renderizarVideos() {
  const grid = document.getElementById("grid-videos");
  if (!grid || !Array.isArray(VIDEOS)) return;
  grid.innerHTML = VIDEOS.map((v, i) => {
    const id = idYoutube(v.youtube);
    const portada = id ? `https://i.ytimg.com/vi/${id}/hqdefault.jpg` : (v.portada || "");
    return `
    <div class="card-video">
      <button type="button" class="card-video__media" data-video="${id}" aria-label="Ver video: ${v.titulo}" ${id ? "" : "disabled"}>
        ${portada ? `<img src="${portada}" alt="" loading="lazy">` : ""}
        <span class="card-video__play" aria-hidden="true"></span>
      </button>
      <button type="button" class="card-video__ver" data-indice="${i}" ${id ? "" : "disabled"}>Ver Video</button>
    </div>`;
  }).join("");

  grid.addEventListener("click", (e) => {
    const boton = e.target.closest(".card-video__media, .card-video__ver");
    if (!boton || boton.disabled) return;
    const tarjeta = boton.closest(".card-video");
    const media = tarjeta.querySelector(".card-video__media");
    if (!media) return;               /* el video ya se está reproduciendo */
    const id = media.dataset.video;
    if (!id) return;
    const marco = document.createElement("iframe");
    marco.className = "card-video__iframe";
    marco.src = `https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&playsinline=1`;
    marco.title = media.getAttribute("aria-label");
    marco.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    marco.allowFullscreen = true;
    media.replaceWith(marco);
  });
}
/* ===== FIN CAMBIO 30-SEP-B: VIDEOS ===== */

function renderizarAgenda() {
  const grid = document.getElementById("grid-agenda");
  if (!grid || !Array.isArray(AGENDA)) return;
  grid.innerHTML = AGENDA.map(a => `
    <div class="card-agenda-vidrio">
      <div class="agenda-hora">${a.hora}</div>
      <div class="agenda-momento">${a.momento}</div>
    </div>
  `).join("");
}

function inicializarModalHistorias() {
  const modal = document.getElementById("modal-historia");
  if (!modal) return;

  modal.addEventListener("close", () => {
    document.body.style.overflow = "";
    if (tarjetaDisparadora && typeof tarjetaDisparadora.focus === "function") {
      tarjetaDisparadora.focus();
    }
  });

  modal.addEventListener("click", (e) => {
    // Cierre al hacer clic sobre el fondo del diálogo (backdrop)
    if (e.target === modal) {
      cerrarModalHistoria();
    }
  });
}

/**
 * Respaldo de los iconos del pie.
 *
 * Si falta el SVG se intenta la misma ruta en PNG —el logo oficial de LinkedIn
 * no siempre se publica en SVG— y sólo si tampoco está, el botón se convierte
 * en una pastilla con el nombre de la red. Así la página nunca muestra una
 * imagen rota.
 */
function prepararIconosRedes() {
  document.querySelectorAll(".pie-red img").forEach((img) => {
    let intentadoPng = false;
    const alFallar = () => {
      if (!intentadoPng && img.getAttribute("src").endsWith(".svg")) {
        intentadoPng = true;
        img.src = img.getAttribute("src").slice(0, -4) + ".png";
        return;
      }
      const enlace = img.closest(".pie-red");
      if (!enlace || enlace.classList.contains("pie-red--sin-icono")) return;
      enlace.classList.add("pie-red--sin-icono");
      enlace.textContent = img.alt;
    };
    img.addEventListener("error", alFallar);
    if (img.complete && img.naturalWidth === 0) alFallar();
  });
}

document.addEventListener("DOMContentLoaded", () => {
  if (!CONFIG.secciones.mostrarAgenda) {
    const s = document.getElementById("sec-agenda");
    if (s) s.style.display = "none";
  }
  if (!CONFIG.secciones.mostrarHistorias) {
    const s = document.getElementById("sec-historias");
    if (s) s.style.display = "none";
  }
  gestionarBarraFija();
  prepararIconosRedes();
  inicializarModalHistorias();
  renderizarHistorias();
  renderizarAgenda();
  renderizarVideos();   /* CAMBIO 30-SEP-B */
});
