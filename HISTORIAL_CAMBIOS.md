# Historial de cambios — Landing UNAULA 60 años

Registro de todos los cambios hechos a la landing después de entregarla al equipo de
TI de UNAULA. El objetivo es que nadie pierda la cuenta de qué tiene cada versión y
qué le falta al servidor de UNAULA, para que los cambios se repliquen completos y en
orden.

- Repositorio: <https://github.com/sanarbmar/LandingUnaula>
- Demo: <https://sanarbmar.github.io/LandingUnaula/>
- Responsable en Magna: Santiago Arboleda (Arbo)
- Contacto en UNAULA para publicar: prof. César (TI)

## Reglas para no descuadrarse

1. **Cada tanda de cambios lleva una fecha y un marcador** en el código:
   `CAMBIO DD-MES #n` (por ejemplo `CAMBIO 30-SEP #3`), delimitado con comentarios
   `INICIO` / `FIN`. Si hay dos tandas el mismo día, la segunda es `DD-MES-B`.
2. **Cada tanda se anota aquí antes de enviarla**: qué cambió, en qué archivos, el
   commit y el paquete que se mandó.
3. **La columna "En el servidor de UNAULA" solo se marca ✅ cuando César confirma**
   que lo publicó. Mientras diga ⏳, esa tanda sigue pendiente de replicar.
4. **Si César tiene tandas pendientes y llega una nueva**, hay que avisarle que las
   aplique en orden, o mandarle los archivos completos, que ya incluyen todo lo
   anterior.
5. Commit y push los hace Arbo. Este archivo va en el mismo commit que los cambios.

## Resumen de tandas

| Tanda | Fecha | Commit | Qué cambió | Archivos | Enviado a UNAULA | En el servidor de UNAULA |
|---|---|---|---|---|---|---|
| Entrega inicial | 9 sep 2026 | `4fe5725` | Sitio completo, sin consulta por cédula | todos | ✅ 9 sep | ⏳ por confirmar |
| Ajustes sin marcador | 9 sep 2026 (tarde) | `2a596e8`, `2ef5dc5` | Favicon; pregunta frecuente sobre fumar y vapear | `index.html`, 2 imágenes nuevas | ⏳ por confirmar | ⏳ por confirmar |
| `16-SEP` | 16 sep 2026 | `5fab0be` | Horario del evento; pregunta sobre vestuario | `index.html` | ✅ 16 sep | ⏳ por confirmar |
| `30-SEP` | 30 sep 2026 | `498d617` | Aforo completo: confirmar asistencia, liberar cupo, preguntas nuevas, cierre FIESTA LLENA | `index.html`, `estilos.css`, `main.js` | ⏳ paquete listo | ⏳ por confirmar |
| `30-SEP-B` | 30 sep 2026 | ⏳ sin commit | Página ajustada al diseño nuevo de Canva: bienvenida con aforo, videos de YouTube, historia de Jeison Correa, textos, proporciones e imágenes | `index.html`, `estilos.css`, `main.js`, 4 imágenes nuevas | ⏳ | ⏳ |

## Configuración pendiente en el servidor

Estos valores no son cambios de diseño. Hay que configurarlos en el servidor de UNAULA,
y siguen pendientes hasta que alguien los marque como hechos.

| Qué | Dónde | Estado |
|---|---|---|
| `URL_INSCRIPCION`: la usan los botones CONFIRMAR ASISTENCIA | `assets/js/main.js`, línea 1 del código | ⏳ sin URL |
| `URL_LIBERAR_CUPO`: la usan los botones y el enlace LIBERAR CUPO | `assets/js/main.js`, segunda constante | ⏳ sin URL |
| Quitar `<meta name="robots" content="noindex, nofollow">` | `index.html`, `<head>` | ⏳ solo al publicar en el dominio oficial |
| `og:description` todavía dice "Reserva tu lugar" | `index.html`, `<head>` | ⏳ sin decidir |
| Cuatro horas de la agenda "Por confirmar" | arreglo `AGENDA` en `main.js` | ⏳ |
| Cuerpo de las historias de éxito "[HISTORIA COMPLETA PENDIENTE]" | arreglo `HISTORIAS` en `main.js` | ⏳ |
| Enlaces de los 4 videos de YouTube | arreglo `VIDEOS` en `main.js` (campo `youtube`) | ⏳ sin enlaces: mientras tanto se ve la foto de portada del diseño |
| Historia completa de Jeison Correa | `HISTORIAS[0].cuerpo` en `main.js` | ⏳ |

---

## Detalle por tanda (la más reciente primero)

### `30-SEP-B` — Diseño nuevo de Canva · 30 sep 2026 · sin commit todavía

**Motivo:** Magna compartió un diseño nuevo en Canva ("LANDING PAGE"). La página se
ajustó a ese diseño. Por pedido de Arbo se conservaron los botones actuales, las
preguntas frecuentes y el pie de página, que no aparecen en el diseño.

| # | Sección | Cambio |
|---|---|---|
| 1 | Barra superior | El enlace "Qué celebraremos" pasa a "Videos" |
| 2 | Sección 1, Hero | Titular y texto del aforo en dos líneas cada uno, con los tamaños del diseño; punto final en "contigo." |
| 3 | Sección 2, Bienvenida | El párrafo "UNAULA cumple 60 años…" y CONOCE EL ENCUENTRO se reemplazan por el mensaje de aforo y los botones CONFIRMAR ASISTENCIA / LIBERAR CUPO. Escalones alineados a la izquierda y más juntos |
| 4 | Sección 3, Datos | Sin etiquetas Fecha/Lugar/Horario; "6 de noviembre de 2026" (sin "Viernes"); "Plaza Mayor Medellín / PABELLÓN VERDE"; iconos grandes. **La hora real se conservó**: el diseño todavía dice "Hora de inicio / Hora de finalización" |
| 5 | Sección 4, ¿Por qué nos encontramos? | Texto centrado línea por línea con frases en negrita; se quitó el recuadro con borde dorado |
| 6 | Sección 5, "60 años. Miles de historias." | Se quitaron "Un mismo orgullo", "En este encuentro celebraremos:" y las 4 tarjetas. Ahora son 4 videos de YouTube que se cargan solo al hacer clic |
| 7 | Sección 6, El Encuentro | Párrafos separados con frases en negrita |
| 8 | Sección 8, Invitados | Titular en minúscula, lista centrada sin viñetas y foto recortada sin fondo contra el borde derecho |
| 9 | Sección 9, Historias | Titular en minúscula, párrafo por líneas, subtítulo CONOCE LAS HISTORIAS, 4 tarjetas visibles con flechas grandes. Primera historia: Jeison Correa ("CONOCE SU HISTORIA") |
| 10 | Sección 10, Agenda | Seis tarjetas en una fila; titular en minúscula; se quitó el aviso "Agenda preliminar…". **Las horas reales se conservaron**: el diseño dice "8:00 a. m." en todas |
| 11 | Sección 13, Cierre | "Fiesta" pequeño y "LLENA" grande; textos en columna angosta; "Plaza Mayor Medellín" en minúsculas |

**CSS:** bloque nuevo al final de `estilos.css`, entre `INICIO CAMBIO 30-SEP-B` y
`FIN`. Tamaños y espacios medidos sobre el diseño a 1280 px y pasados a `vw`.

**JS:** arreglo nuevo `VIDEOS` con las funciones `idYoutube` y `renderizarVideos`.
Acepta el enlace de YouTube en cualquier formato y usa `youtube-nocookie.com`. En
`HISTORIAS`, la primera historia ahora es Jeison Correa y hay un campo opcional
`enlace` para el texto del botón. Si falta la foto de una historia, se muestra la
genérica.

**Imagen nueva:** `assets/img/foto-invitados-recorte.webp` (98 KB): recorte sin fondo
y en espejo de `foto-invitados.jpg`, como aparece en el diseño. La primera versión
dejaba parches negros y puntos rojos en los bordes (cabezas, orejas, hombros): se
rehízo con recorte por IA y limpieza de bordes.

**Imágenes tomadas del diseño de Canva** (todas las demás del diseño ya eran las del
sitio: edificio, egresados, agenda, logos, ondas y tarjetas de historias):

- `assets/img/historia-jeison-correa.jpg` (800 × 707): foto completa de Jeison
  Correa. La usa la ventana de la historia.
- `assets/img/historia-jeison-correa-tarjeta.jpg`: recorte con el mismo encuadre de
  la tarjeta del diseño. Campo nuevo `miniatura` en `HISTORIAS`.
- `assets/img/video-portada.jpg` (360 × 610): la foto de las 4 tarjetas de video del
  diseño. Es una captura de celular: se le quitaron la barra de estado y la de
  comentarios. Se ve mientras no estén los enlaces de YouTube.

**Qué quedó igual a propósito:** los botones (estilo actual, no los blancos del
diseño), las preguntas frecuentes, el pie de página, la barra superior, la barra fija
y las horas reales del evento y de la agenda.


### `30-SEP` — Aforo completo · 30 sep 2026 · commit `498d617`

**Motivo:** el aforo se llenó. La página deja de invitar a inscribirse y pide confirmar
la asistencia o liberar el cupo.

| # | Sección | Cambio |
|---|---|---|
| 1 | Barra superior | Botón INSCRIBIRME → CONFIRMAR ASISTENCIA |
| 2 | Barra fija inferior | INSCRÍBETE → dos botones: CONFIRMAR ASISTENCIA y LIBERAR CUPO |
| 3 | Sección 1, Hero | Debajo del logo: "Gracias por hacer de este reencuentro algo tan especial" (rojo, resaltado), "El aforo ya está completo y ahora queremos saber si contamos contigo" y los dos botones |
| 4 | Sección 2, Bienvenida | Se quitó QUIERO INSCRIBIRME; queda CONOCE EL ENCUENTRO |
| 5 | Preguntas frecuentes | Nuevas al final: "¿Cómo libero mi cupo si no puedo asistir?" (con enlace "liberar cupo") y "¿Qué significa estar en lista de espera?" |
| 6 | Sección 13, Cierre | "Reserva tu LUGAR" → "FIESTA LLENA"; versos → "Gracias por tanto cariño. / Nos emociona ver cómo esta comunidad se movió para encontrarse de nuevo. / Los queremos mucho."; llamado → "Nos vemos el 6 de noviembre"; dorado → "PLAZA MAYOR MEDELLÍN"; se quitó QUIERO INSCRIBIRME |

**CSS:** bloque nuevo al final de `estilos.css`, entre `INICIO CAMBIO 30-SEP` y `FIN`.
No modifica reglas anteriores. Clases nuevas: `hero__gracias`, `hero__aforo`,
`hero__botones`, `barra-btn-secundario` (estilo base), `faq-enlace`.

**JS:** en `main.js`, constante nueva `URL_LIBERAR_CUPO` y función `irALiberarCupo`,
justo después de `irAInscripcion`. CONFIRMAR ASISTENCIA sigue usando
`URL_INSCRIPCION`: se conservó el nombre para no romper la configuración de UNAULA.

**Paquete enviado:** `cambios_landing_unaula_30sep.pdf` (antes y después con código y
capturas) y `landing_unaula_30sep.zip` (los 3 archivos). Copia en
`Claude outputs/` de la carpeta local.

**Decisión de diseño aprobada:** el mensaje del hero va a tamaño moderado,
`clamp(30px, 4.6vw, 66px)`. Se probó el titular grande de dos líneas que usan las
demás secciones y Arbo lo descartó por verse muy grande. La tipografía no se toca.

### `16-SEP` — Horario y vestuario · 16 sep 2026 · commit `5fab0be`

| # | Sección | Cambio |
|---|---|---|
| 1 | Sección 3, Datos del evento, tarjeta "Horario" | "Hora de inicio / Hora de finalización" → "Apertura de puertas y registro: 6:30 p. m. / El evento finaliza a las 2:00 a. m." |
| 2 | Preguntas frecuentes | Nueva, después de la de sustancias: "¿Hay código de vestuario?" (CASUAL ELEGANTE) |

Sin cambios en CSS ni JS. En ese commit también se subió `index-1.html`, una copia
suelta del `index.html` de ese día que la página no usa.

### Ajustes sin marcador — 9 sep 2026 (tarde) · commits `2a596e8`, `2ef5dc5`

Se hicieron después de la entrega y no llevan marcador en el código:

- **Favicon:** `assets/img/favicon.ico` y `assets/img/apple-touch-icon.png`, más dos
  `<link>` en el `<head>`.
- **Pregunta frecuente nueva:** "¿Se permite fumar, vapear o consumir sustancias
  psicoactivas?".

Falta confirmar si César los tiene. Si no, necesita las dos imágenes, además del
`index.html`.

### Entrega inicial — 9 sep 2026 · commit `4fe5725`

(Después solo cambió el README, hasta `51c7d22`.)

Sitio estático completo: `index.html`, `assets/css/estilos.css`, `assets/js/main.js` y
`assets/img/`. Se eliminó la consulta por cédula y los botones llevan a
`URL_INSCRIPCION`. Detalle en el README del repositorio.
