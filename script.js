/* ============================================================
   TEST DE MEDIOS DE REPRESENTACIÓN – script.js
   Consultora Saladino
   ============================================================ */

// ── DATOS ──────────────────────────────────────────────────
const items = [
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Revelar",
        opciones: [
            { texto: "Escuchas algo que te hace comprender.", valor: "2" },
            { texto: "Algo oculto se te muestra o piensas en fotografías.", valor: "1" },
            { texto: "Una sorpresa inesperada que te emociona.", valor: "3" },
        ]
    },
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Monótono",
        opciones: [
            { texto: "Sientes lo mismo y lo mismo.", valor: "3" },
            { texto: "Un sonido repetitivo.", valor: "2" },
            { texto: "Gris.", valor: "1" },
        ]
    },
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Concreto",
        opciones: [
            { texto: "Definido y claro, una construcción.", valor: "1" },
            { texto: "Pesado, duro, estable.", valor: "3" },
            { texto: "Pocas palabras.", valor: "2" },
        ]
    },
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Acento",
        opciones: [
            { texto: "Un idioma con acento, de un extranjero.", valor: "2" },
            { texto: "Intensidad, mayor emoción.", valor: "3" },
            { texto: "Color intenso, el tilde encima de una letra.", valor: "1" },
        ]
    },
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Perspectiva",
        opciones: [
            { texto: "Un paisaje, un ángulo para ver algo.", valor: "1" },
            { texto: "Una opinión distinta, nueva.", valor: "2" },
            { texto: "Sentir algo de una manera distinta.", valor: "3" },
        ]
    },
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Silencio",
        opciones: [
            { texto: "Soledad, un cierto vacío.", valor: "3" },
            { texto: "Ausencia de sonido, nada.", valor: "2" },
            { texto: "Negro, labios cerrados.", valor: "1" },
        ]
    },
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Mudo",
        opciones: [
            { texto: "El rostro de un mudo, alguien que no puede hablar.", valor: "1" },
            { texto: "Sensación de no poder emitir palabras.", valor: "3" },
            { texto: "Simplemente no se escuchan palabras.", valor: "2" },
        ]
    },
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Inspeccionar",
        opciones: [
            { texto: "Mover cosas, buscar.", valor: "3" },
            { texto: "Escuchar atentamente, recordar lo dicho.", valor: "2" },
            { texto: "Aguzar la vista y mirar el detalle.", valor: "1" },
        ]
    },
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Imaginación",
        opciones: [
            { texto: "Colores y paisajes espectaculares.", valor: "1" },
            { texto: "Sonidos y melodías especiales.", valor: "2" },
            { texto: "Sensaciones maravillosas, sueños.", valor: "3" },
        ]
    },
    {
        consigna: "¿Cuáles de las opciones te representa mejor esta palabra?",
        palabra: "Tiniebla",
        opciones: [
            { texto: "Opresión, frío, soledad.", valor: "3" },
            { texto: "Negro, poca visibilidad.", valor: "1" },
            { texto: "Un silencio y calma total.", valor: "2" },
        ]
    },
    {
        consigna: "Cerrá tus ojos e imaginá que vas llegando a la playa ¿Qué sucedió primero en tu mente?",
        opciones: [
            { texto: "Te imaginaste el mar, el cielo y viste el panorama en general. Quizá te fijaste primero en el hotel y su playa.", valor: "1" },
            { texto: "Escuchaste el sonido del mar y el graznido de las gaviotas, o el sonido de las palmeras con la brisa.", valor: "2" },
            { texto: "Sentiste el agua, la arena, el sol en tu piel, o quizá te vino a la mente el olor del mar.", valor: "3" },
        ]
    },
    {
        consigna: "Elegí una de las siguientes casas",
        opciones: [
            { icono: '<i class="fa-solid fa-house-chimney fa-2x" style="color: #002d92;"></i>', texto: "<strong>La primera casa</strong> está situada en un área tranquila y sin ruido y todo lo que escuchás cuando salís, son los sonidos de los pájaros cantando. Está tan bien construida, que no notás el ruido del vecino. El interior de ella resuena con un carácter armónico, tan agradable, que te preguntás cómo podés dejar pasar esta oportunidad.", valor: "2" },
            { icono: '<i class="fa-solid fa-house-chimney fa-2x" style="color: #002d92;"></i>', texto: "<strong>La segunda casa</strong> es bastante pintoresca. Tiene un aspecto muy tradicional. Podés ver que tiene una perspectiva novedosa del patio y de la vista del jardín. Tiene amplios ventanales para recibir mucha luz y poder disfrutar de una vista maravillosa. También te llaman la atención los brillantes colores del interior. Está claro que es una muy buena compra.", valor: "1" },
            { icono: '<i class="fa-solid fa-house-chimney fa-2x" style="color: #002d92;"></i>', texto: "<strong>La tercera casa</strong> no está solamente construida sólidamente, sino que tiene una sensación especial de calidez. No es frecuente que entres en contacto con un lugar que toca tantos aspectos importantes. Es bastante espaciosa para sentir que podés moverte con libertad y al mismo tiempo, es suficientemente cálida para sentirte cómodo. Dan ganas de disfrutarla de inmediato.", valor: "3" },
        ]
    },
];
const resultados = [
    {
        tipo: "visual",
        descripcion: `<strong>Procesamiento mental:</strong> Pensás principalmente mediante imágenes que se suceden con rapidez en tu cerebro, por lo que podés impacientarte con personas que van más despacio.<br><br>` +
            `<strong>Aprendizaje:</strong> Tendés a pensar en imágenes y a relacionarlas con ideas y conceptos. Necesitás que te dejen ver lo que te están diciendo para asimilar verdaderamente la información.<br><br>` +
            `<strong>Voz y ritmo:</strong> Hablás rápidamente y en un tono más alto para poder seguir la velocidad de tus imágenes mentales.<br><br>` +
            `<strong>Vocabulario:</strong> Usás palabras como "mirar", "foco" o "perspectiva" y frases como "ya veo lo que querés decir" o "el futuro parece brillante".`,
        resultadoImg: "visual-style.png",
    },
    {
        tipo: "auditivo",
        descripcion: `<strong>Procesamiento mental:</strong> Tenés una voz interior que crea un diálogo continuo con el que probás argumentaciones, ensayás respuestas y reflexionás.<br><br>` +
            `<strong>Aprendizaje:</strong> Tendés a recordar mejor la información rememorando una explicación oral. Para aprender necesitás escuchar las ideas de forma alta y clara.<br><br>` +
            `<strong>Voz y ritmo:</strong> Tu tono de voz es claro, expresivo y resonante.<br><br>` +
            `<strong>Vocabulario:</strong> Preferís palabras como "sonido", "ritmo" o "armonioso" y te expresás con frases como "en la misma onda" o "me suena a chino".`,
        resultadoImg: "auditivo-style.png",
    },
    {
        tipo: "kinestésico",
        descripcion: `<strong>Procesamiento mental:</strong> Basás tus actuaciones a partir de tus sentimientos y sensaciones en cada situación.<br><br>` +
            `<strong>Aprendizaje:</strong> Tu aprendizaje está relacionado a tus sensaciones y movimientos. Para comprender realmente un tema, necesitás poder sentir los mensajes.<br><br>` +
            `<strong>Voz y ritmo:</strong> Hablás lentamente, con largas pausas, y tu voz tiene un tono más profundo.<br><br>` +
            `<strong>Vocabulario:</strong> Elegís palabras como "tocar", "sólido" o "presión" y usás frases como "estaremos en contacto", "lo siento en el alma" o "bases firmes".`,
        resultadoImg: "kinestesico-style.png",
    },
];



// ── ESTADO ─────────────────────────────────────────────────
const opcionesConteo = { 1: 0, 2: 0, 3: 0 };
let itemActual = 0;

// ── REFERENCIAS DOM ────────────────────────────────────────
const comenzarBtn       = document.getElementById("btn-comenzar");
const botonSiguiente    = document.getElementById("btn-siguiente");
const botonTerminar     = document.getElementById("btn-terminar");
const botonConocerMas   = document.getElementById("conocerMas");
const contenedor1       = document.querySelector(".contenedor-general1");
const contenedor2       = document.querySelector(".contenedor-general2");
const contenedorItem    = document.querySelector(".contenedor-item");
const progressBar       = document.getElementById("progressBar");
const errorMsg          = document.getElementById("errorMsg");
const radioButtons      = document.querySelectorAll('input[type="radio"]');

// ── EVENTOS ────────────────────────────────────────────────
document.addEventListener("DOMContentLoaded", function () {
    comenzarBtn.addEventListener("click", function () {
        contenedor1.classList.add("anim-salida");
        setTimeout(function () {
            contenedor1.style.display = "none";
            contenedor2.style.display = "flex";
            insertarItem();
        }, 500);
    });
});

botonSiguiente.addEventListener("click", presionarSiguiente);
botonTerminar.addEventListener("click", presionarTerminar);
botonConocerMas.addEventListener("click", presionarConocerMas);
document.getElementById("btn-reintentar").addEventListener("click", reintentar);
document.getElementById("btn-descargar-img").addEventListener("click", descargarImagen);
document.getElementById("btn-descargar-pdf").addEventListener("click", descargarPDF);

// Ocultar mensaje de error al seleccionar una opción
radioButtons.forEach(rb => {
    rb.addEventListener("change", ocultarError);
});

// ── FUNCIONES PRINCIPALES ──────────────────────────────────

/**
 * Inserta el contenido del ítem actual en la tarjeta.
 */
function insertarItem() {
    const totalItems   = items.length;
    const tarjetaActual = items[itemActual];

    // Actualizar consigna y palabra
    document.getElementById("p-consigna").textContent = tarjetaActual.consigna;
    const pPalabra  = document.getElementById("p-palabra");
    const boxPalabra = document.querySelector(".box-palabra");
    pPalabra.textContent = tarjetaActual.palabra || "";

    // Actualizar barra de progreso
    const progreso = ((itemActual) / totalItems) * 100;
    progressBar.style.width = progreso + "%";

    // Actualizar contador
    document.getElementById("pContadorItem").textContent = (itemActual + 1) + " / " + totalItems;

    // Insertar opciones
    const opciones   = tarjetaActual.opciones;
    const boxOpciones = document.querySelector(".box-opciones");
    const boxConsigna = document.querySelector(".box-consigna");

    for (let i = 0; i < opciones.length; i++) {
        const input = document.getElementById(`opcion${i + 1}`);
        const label = document.querySelector(`label[for=opcion${i + 1}]`);
        input.value = opciones[i].valor;
        label.innerHTML = opciones[i].texto;
    }

    // Ajustes para los últimos dos ítems (sin palabra clave)
    if (itemActual >= totalItems - 2) {
        boxConsigna.style.paddingBottom = "0.5rem";
        boxPalabra.style.display = "none";
    } else {
        boxPalabra.style.display = "";
        boxConsigna.style.paddingBottom = "";
    }

    // Activar modo casa (íconos) para el último ítem
    if (itemActual === totalItems - 1) {
        activarModoCasa(opciones);
    }

    // Ocultar error al cambiar de ítem
    ocultarError();
}

/**
 * Lógica del botón "Siguiente".
 */
function presionarSiguiente() {
    if (itemActual < items.length - 1 && validarClick()) {
        sumarValorElegido();

        // Fade out con transition (sin parpadeo)
        contenedor2.classList.add("is-transitioning");

        setTimeout(function () {
            itemActual++;
            insertarItem();

            // Pequeño reflow forzado para que la transición de entrada
            // empiece desde opacity:0 y no salte directamente a 1
            void contenedor2.offsetWidth;
            contenedor2.classList.remove("is-transitioning");
        }, 320);

        // Mostrar botón Terminar en el último ítem.
        // Nota: este timeout corre a 350ms, DESPUÉS de que el timeout de 320ms
        // ya incrementó itemActual, por eso comparamos directo (no +1).
        setTimeout(function () {
            if (itemActual === items.length - 1) {
                botonSiguiente.style.display = "none";
                botonTerminar.style.display = "inline-flex";
            }
        }, 350);
    }
}

/**
 * Genera el HTML de un bloque de descripción con encabezado del nombre del estilo.
 * Se usa cuando se muestran múltiples estilos juntos para diferenciarlos visualmente.
 * @param {Object} resultado - Objeto del estilo en resultados
 * @returns {string} HTML del bloque
 */
function bloqueEstilo(resultado) {
    const nombre = resultado.tipo.charAt(0).toUpperCase() + resultado.tipo.slice(1);
    return `<div class="desc-bloque">
        <p class="desc-bloque__titulo">${nombre}</p>
        <div class="desc-bloque__contenido">${resultado.descripcion}</div>
    </div>`;
}

/**
 * Lógica del botón "Terminar Test".
 */
function presionarTerminar() {
    if (!validarClick()) return;

    sumarValorElegido();

    // Actualizar progreso al 100%
    progressBar.style.width = "100%";

    const boxItem      = document.querySelector(".box-item");
    const boxResultado = document.querySelector(".box-resultado");
    const imgResultado  = document.getElementById("imgResultado");
    const imgResultadoB = document.getElementById("imgResultadoB");
    const imgResultadoC = document.getElementById("imgResultadoC");
    const pResultado    = document.getElementById("resultadoDescripcion");
    const resultadoNros = document.querySelectorAll(".resultadoNro");
    const spanResultado  = document.getElementById("spanResultado");
    const spanResultadoB = document.getElementById("spanResultadoB");
    const spanResultadoC = document.getElementById("spanResultadoC");
    const resultadoSpans = document.querySelectorAll(".spanResultadoImg");
    const boxOtrosEstilos = document.querySelector(".box-otrosEstilos");
    const imgEstiloAlt1   = document.getElementById("estiloAlternativo1");
    const imgEstiloAlt2   = document.getElementById("estiloAlternativo2");
    const descripcionEstilo1 = document.querySelector(".estilo1");
    const descripcionEstilo2 = document.querySelector(".estilo2");
    const boxEstilo2      = document.getElementById("box-estilo2");

    // Mostrar puntajes numéricos
    for (let i = 0; i < 3; i++) {
        resultadoNros[i].textContent = opcionesConteo[i + 1];
    }

    // Cambiar vista: ítem → resultado
    boxItem.style.display = "none";
    boxResultado.style.display = "flex";
    requestAnimationFrame(() => {
        boxResultado.style.opacity = 1;
        boxResultado.style.transform = "translateY(0)";
    });

    // Determinar estilo predominante
    let estiloElegido = null;
    let maxValor = -Infinity;
    for (let opcion in opcionesConteo) {
        if (opcionesConteo[opcion] > maxValor) {
            maxValor = opcionesConteo[opcion];
            estiloElegido = opcion - 1;
        }
    }

    const resultadoTitulo = document.getElementById("resultado__titutlo");
    const c1 = opcionesConteo[1], c2 = opcionesConteo[2], c3 = opcionesConteo[3];

    if (c1 === c2 && c2 === c3) {
        // Todos los estilos por igual
        resultadoTitulo.innerHTML =
            "Presentas una preponderancia equitativa hacia los estilos de aprendizaje " +
            resultados[0].tipo + ", " + resultados[1].tipo + " y " + resultados[2].tipo;
        imgResultado.src  = resultados[0].resultadoImg;
        imgResultadoB.src = resultados[1].resultadoImg;
        imgResultadoC.src = resultados[2].resultadoImg;
        pResultado.innerHTML =
            bloqueEstilo(resultados[0]) +
            bloqueEstilo(resultados[1]) +
            bloqueEstilo(resultados[2]);
        spanResultado.style.display  = "inline-block";
        spanResultadoB.style.display = "inline-block";
        spanResultadoC.style.display = "inline-block";
        boxOtrosEstilos.style.display = "none";

    } else if (c1 === c2 && c1 !== c3 && c1 >= maxValor) {
        // Visual y Auditivo por igual
        resultadoTitulo.innerHTML =
            "Presentas una preponderancia equitativa hacia los estilos de aprendizaje " +
            resultados[0].tipo + " y " + resultados[1].tipo;
        imgResultado.src  = resultados[0].resultadoImg;
        imgResultadoB.src = resultados[1].resultadoImg;
        pResultado.innerHTML =
            bloqueEstilo(resultados[0]) +
            bloqueEstilo(resultados[1]);
        spanResultado.style.display  = "inline-block";
        spanResultadoB.style.display = "inline-block";
        descripcionEstilo1.innerHTML = resultados[2].descripcion;
        imgEstiloAlt1.src = resultados[2].resultadoImg;
        boxEstilo2.style.display = "none";

    } else if (c1 === c3 && c1 !== c2 && c1 >= maxValor) {
        // Visual y Kinestésico por igual
        resultadoTitulo.innerHTML =
            "Presentas una preponderancia equitativa hacia los estilos de aprendizaje " +
            resultados[0].tipo + " y " + resultados[2].tipo;
        imgResultado.src  = resultados[0].resultadoImg;
        imgResultadoC.src = resultados[2].resultadoImg;
        pResultado.innerHTML =
            bloqueEstilo(resultados[0]) +
            bloqueEstilo(resultados[2]);
        spanResultado.style.display  = "inline-block";
        spanResultadoC.style.display = "inline-block";
        descripcionEstilo1.innerHTML = resultados[1].descripcion;
        imgEstiloAlt1.src = resultados[1].resultadoImg;
        boxEstilo2.style.display = "none";

    } else if (c2 === c3 && c2 !== c1 && c2 >= maxValor) {
        // Auditivo y Kinestésico por igual
        resultadoTitulo.innerHTML =
            "Presentas una preponderancia equitativa hacia los estilos de aprendizaje " +
            resultados[1].tipo + " y " + resultados[2].tipo;
        imgResultadoB.src = resultados[1].resultadoImg;
        imgResultadoC.src = resultados[2].resultadoImg;
        pResultado.innerHTML =
            bloqueEstilo(resultados[1]) +
            bloqueEstilo(resultados[2]);
        spanResultadoB.style.display = "inline-block";
        spanResultadoC.style.display = "inline-block";
        descripcionEstilo1.innerHTML = resultados[0].descripcion;
        imgEstiloAlt1.src = resultados[0].resultadoImg;
        boxEstilo2.style.display = "none";

    } else {
        // Un único estilo predominante
        resultadoTitulo.textContent =
            "Presentas una preponderancia hacia el estilo de aprendizaje " +
            resultados[estiloElegido].tipo;
        imgResultado.src = resultados[estiloElegido].resultadoImg;
        pResultado.innerHTML = resultados[estiloElegido].descripcion;
        spanResultado.style.display = "inline-block";

        // Llenar "conocer otros estilos"
        let primerEstiloAsignado = false;
        [0, 1, 2].forEach(indiceEstilo => {
            if (indiceEstilo !== estiloElegido) {
                if (!primerEstiloAsignado) {
                    descripcionEstilo1.innerHTML = resultados[indiceEstilo].descripcion;
                    imgEstiloAlt1.src = resultados[indiceEstilo].resultadoImg;
                    primerEstiloAsignado = true;
                } else {
                    descripcionEstilo2.innerHTML = resultados[indiceEstilo].descripcion;
                    imgEstiloAlt2.src = resultados[indiceEstilo].resultadoImg;
                }
            }
        });
    }
}

/**
 * Muestra otros estilos de aprendizaje al hacer clic en "Conocer otros estilos".
 */
function presionarConocerMas() {
    const separador   = document.querySelector(".separador");
    const otrosEstilos = document.querySelector(".otrosEstilos");
    otrosEstilos.style.display  = "flex";
    separador.style.display     = "flex";
    botonConocerMas.style.display = "none";
}

// ── UTILIDADES ─────────────────────────────────────────────

/**
 * Valida que el usuario haya seleccionado una opción.
 * Muestra un mensaje inline si no lo hizo.
 * @returns {boolean}
 */
function validarClick() {
    const seleccionado = Array.from(radioButtons).some(rb => rb.checked);
    if (!seleccionado) {
        mostrarError();
    }
    return seleccionado;
}

/**
 * Muestra el mensaje de error inline.
 */
function mostrarError() {
    errorMsg.classList.add("visible");
}

/**
 * Oculta el mensaje de error inline.
 */
function ocultarError() {
    errorMsg.classList.remove("visible");
}

/**
 * Suma +1 al estilo correspondiente a la opción seleccionada
 * y deselecciona todos los radio buttons.
 */
function sumarValorElegido() {
    let opcionSeleccionada;
    radioButtons.forEach(rb => {
        if (rb.checked) opcionSeleccionada = rb.value;
    });
    if (opcionSeleccionada) {
        opcionesConteo[opcionSeleccionada]++;
    }
    // Deseleccionar para la próxima pregunta
    radioButtons.forEach(rb => { rb.checked = false; });
}

// ── MODO CASA ──────────────────────────────────────────────

/**
 * Configura el último ítem (casas) para mostrar íconos en lugar
 * de texto en los labels, y muestra la descripción al seleccionar.
 * @param {Array} opciones - Las opciones del ítem de casas.
 */
function activarModoCasa(opciones) {
    const boxOpciones   = document.querySelector(".box-opciones");
    const boxOpcionCasa = document.querySelector(".box-opcionCasa");
    const pOpcionCasa   = document.getElementById("p-opcionCasa");
    const boxPCasa      = document.querySelector(".box-pCasa");

    // Layout horizontal
    boxOpciones.classList.add("box-opciones--casas");

    // Mostrar letras A, B, C
    boxPCasa.classList.add("visible");

    // Configurar cada label con solo el ícono de casa
    for (let i = 0; i < opciones.length; i++) {
        const label = document.querySelector(`label[for=opcion${i + 1}]`);
        label.innerHTML = '<i class="fa-solid fa-house-chimney fa-2x"></i>';
        label.classList.add("labelCasa");

        const input = document.getElementById(`opcion${i + 1}`);
        input.addEventListener("change", function () {
            // Actualizar texto descriptivo de la casa elegida
            pOpcionCasa.innerHTML = opciones[i].texto;
            // Mostrar el div si estaba oculto
            boxOpcionCasa.style.display = "flex";
            // Forzar reflow para que la transición de opacidad funcione
            void boxOpcionCasa.offsetWidth;
            boxOpcionCasa.style.opacity = "1";
        });
    }

    // Preparar el div de descripción (visible pero transparente)
    boxOpcionCasa.style.display  = "flex";
    boxOpcionCasa.style.opacity  = "0";
}

// ── REINTENTAR ─────────────────────────────────────────────

/**
 * Reinicia el test recargando la página.
 */
function reintentar() {
    window.location.reload();
}

// ── DESCARGA DE RESULTADOS ─────────────────────────────────

/**
 * Captura el área de resultado y lo descarga como imagen PNG.
 */
async function descargarImagen() {
    const areaResultado   = document.getElementById("area-resultado");
    const accionesResultado = document.getElementById("resultado-acciones");

    // Ocultar botones para una captura limpia
    accionesResultado.style.visibility = "hidden";

    try {
        const canvas = await html2canvas(areaResultado, {
            scale: 2,
            backgroundColor: "#ffffff",
            useCORS: true,
            logging: false,
        });
        const link = document.createElement("a");
        link.download = "resultado-test-medios-representacion.png";
        link.href = canvas.toDataURL("image/png");
        link.click();
    } finally {
        accionesResultado.style.visibility = "";
    }
}

/**
 * Captura el área de resultado y lo descarga como PDF.
 */
async function descargarPDF() {
    const areaResultado    = document.getElementById("area-resultado");
    const accionesResultado = document.getElementById("resultado-acciones");

    accionesResultado.style.visibility = "hidden";

    try {
        const canvas = await html2canvas(areaResultado, {
            scale: 2,
            backgroundColor: "#ffffff",
            useCORS: true,
            logging: false,
        });

        const imgData = canvas.toDataURL("image/png");
        const { jsPDF } = window.jspdf;

        // Convertir px a mm (a 96 dpi: 1px = 0.2645 mm)
        const pxToMm    = 0.2645;
        const widthMm   = (canvas.width  / 2) * pxToMm;
        const heightMm  = (canvas.height / 2) * pxToMm;

        const pdf = new jsPDF({
            orientation: heightMm > widthMm ? "portrait" : "landscape",
            unit: "mm",
            format: [widthMm, heightMm],
        });

        pdf.addImage(imgData, "PNG", 0, 0, widthMm, heightMm);
        pdf.save("resultado-test-medios-representacion.pdf");
    } finally {
        accionesResultado.style.visibility = "";
    }
}

