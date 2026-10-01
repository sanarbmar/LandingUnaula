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

/* ===== INICIO CAMBIO 01-OCT: VIDEOS =======================================
   Reemplaza el bloque VIDEOS del 30-SEP-B, que tenía cuatro espacios vacíos
   para YouTube. Ahora son los cuatro videos de Instagram de @unaula_medellin.

   Los cuatro videos de la sección "60 años. Miles de historias.".
   - enlace:   dirección del video. Sirve Instagram (instagram.com/p/...,
               /reel/... o /tv/...) o YouTube (watch?v=, youtu.be/, shorts/).
   - portada:  foto que se ve en la tarjeta (en assets/img/).
   - formato:  "vertical" u "horizontal", según cómo se grabó el video.
               Define el tamaño de la ventana en la que se abre.
   - encuadre: qué parte de la portada se ve en la tarjeta (CSS
               object-position). "50% 50%" es el centro.
   El video solo se carga cuando la persona hace clic: así la página no se
   vuelve pesada. Instagram se abre en una ventana encima de la página;
   YouTube se reproduce dentro de la tarjeta.
   ========================================================================= */
const VIDEOS = [
  { enlace: "https://www.instagram.com/p/DcwrTBpgPnv/", titulo: "En estos 60 años, ¿qué le dirías a UNAULA?",
    portada: "assets/img/video-1-portada.jpg", formato: "vertical",   encuadre: "50% 50%" },
  { enlace: "https://www.instagram.com/p/DceqOTWD4O5/", titulo: "En estos 60 años, ¿qué le dirías a UNAULA?",
    portada: "assets/img/video-2-portada.jpg", formato: "horizontal", encuadre: "36% 50%" },
  { enlace: "https://www.instagram.com/p/Ddrk6kWCTul/", titulo: "60 años UNAULA: Unaulistas distinguidos",
    portada: "assets/img/video-3-portada.jpg", formato: "vertical",   encuadre: "50% 50%" },
  { enlace: "https://www.instagram.com/p/DdXXOa8OXMs/", titulo: "Una convicción y una esperanza",
    portada: "assets/img/video-4-portada.jpg", formato: "horizontal", encuadre: "50% 50%" }
];
/* ===== FIN CAMBIO 01-OCT: VIDEOS ===== */

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

/* ===== INICIO CAMBIO 01-OCT: VIDEOS =====
   Reemplaza las funciones del 30-SEP-B (solo YouTube). Ahora reconoce
   Instagram y YouTube; Instagram se abre en la ventana #modal-video. */
function datosVideo(enlace) {
  const v = (enlace || "").trim();
  if (!v) return null;
  const ig = v.match(/instagram\.com\/(?:p|reel|reels|tv)\/([\w-]+)/);
  if (ig) return { tipo: "instagram", id: ig[1] };
  if (/^[\w-]{11}$/.test(v)) return { tipo: "youtube", id: v };
  const yt = v.match(/(?:youtu\.be\/|[?&]v=|\/shorts\/|\/embed\/|\/live\/)([\w-]{11})/);
  return yt ? { tipo: "youtube", id: yt[1] } : null;
}

function renderizarVideos() {
  const grid = document.getElementById("grid-videos");
  if (!grid || !Array.isArray(VIDEOS)) return;
  grid.innerHTML = VIDEOS.map((v, i) => {
    const d = datosVideo(v.enlace || v.youtube);
    const portada = v.portada || (d && d.tipo === "youtube" ? `https://i.ytimg.com/vi/${d.id}/hqdefault.jpg` : "");
    const activo = d ? "" : "disabled";
    return `
    <div class="card-video">
      <button type="button" class="card-video__media" data-indice="${i}" aria-label="Ver video: ${v.titulo}" ${activo}>
        ${portada ? `<img src="${portada}" alt="" loading="lazy" style="object-position: ${v.encuadre || "50% 50%"}">` : ""}
        <span class="card-video__play" aria-hidden="true"></span>
      </button>
      <button type="button" class="card-video__ver" data-indice="${i}" ${activo}>Ver Video</button>
    </div>`;
  }).join("");

  grid.addEventListener("click", (e) => {
    const boton = e.target.closest(".card-video__media, .card-video__ver");
    if (!boton || boton.disabled) return;
    const v = VIDEOS[Number(boton.dataset.indice)];
    const d = v && datosVideo(v.enlace || v.youtube);
    if (!d) return;
    if (d.tipo === "instagram") { abrirModalVideo(v, d); return; }
    // YouTube: se reproduce dentro de la misma tarjeta
    const media = boton.closest(".card-video").querySelector(".card-video__media");
    if (!media) return;               /* el video ya se está reproduciendo */
    const marco = document.createElement("iframe");
    marco.className = "card-video__iframe";
    marco.src = `https://www.youtube-nocookie.com/embed/${d.id}?autoplay=1&rel=0&playsinline=1`;
    marco.title = v.titulo;
    marco.allow = "autoplay; encrypted-media; picture-in-picture; fullscreen";
    marco.allowFullscreen = true;
    media.replaceWith(marco);
  });
}

/* Ventana con el video de Instagram. El tamaño se calcula para que el video
   completo quepa en la pantalla. Medido sobre los embeds de Instagram:
   - vertical:   franja de la cuenta (54 px) + video en proporción 4:5
   - horizontal: franja de la cuenta (54 px) + video 16:9 + franja de
                 me gusta y comentarios (156 px) */
let botonVideoDisparador = null;
function abrirModalVideo(v, d) {
  const modal = document.getElementById("modal-video");
  const caja = document.getElementById("modal-video-marco");
  if (!modal || !caja || typeof modal.showModal !== "function") {
    window.open(`https://www.instagram.com/p/${d.id}/`, "_blank", "noopener");
    return;
  }
  botonVideoDisparador = document.activeElement;
  const proporcion = v.formato === "horizontal" ? 9 / 16 : 5 / 4;
  const franjas = v.formato === "horizontal" ? 54 + 156 : 56;
  const altoMax = window.innerHeight * 0.9 - 24;
  const anchoMax = Math.min(window.innerWidth - 32, v.formato === "horizontal" ? 640 : 420);
  const ancho = Math.max(300, Math.min(anchoMax, (altoMax - franjas) / proporcion));
  const alto = Math.round(ancho * proporcion + franjas);
  caja.innerHTML = `<iframe src="https://www.instagram.com/p/${d.id}/embed/" title="${v.titulo}"
    width="${Math.round(ancho)}" height="${alto}" frameborder="0" scrolling="no"
    allowtransparency="true" allow="autoplay; encrypted-media; fullscreen"></iframe>`;
  modal.showModal();
  document.body.style.overflow = "hidden";
}
function cerrarModalVideo() {
  const modal = document.getElementById("modal-video");
  if (modal && modal.open) modal.close();
}
function inicializarModalVideo() {
  const modal = document.getElementById("modal-video");
  if (!modal) return;
  modal.addEventListener("close", () => {
    const caja = document.getElementById("modal-video-marco");
    if (caja) caja.innerHTML = "";              /* detiene el video al cerrar */
    document.body.style.overflow = "";
    if (botonVideoDisparador && typeof botonVideoDisparador.focus === "function") botonVideoDisparador.focus();
  });
  modal.addEventListener("click", (e) => { if (e.target === modal) cerrarModalVideo(); });
}
/* ===== FIN CAMBIO 01-OCT: VIDEOS ===== */

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
  inicializarModalVideo();   /* CAMBIO 01-OCT */
});
