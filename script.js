let items = [
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
        consigna: " Cierra tus ojos e imagina que vas llegando a la playa ¿Qué sucedió primero en tu mente?",
        opciones: [
            { texto: "Te imaginaste el mar, el cielo y viste el panorama en general. Quizá te fijaste primero en el hotel y su playa.", valor: "1" },
            { texto: "Escuchaste el sonido del mar y el graznido de las gaviotas, o el sonido de las palmeras con la brisa.", valor: "2" },
            { texto: "Sentiste el agua, la arena, el sol en tu piel, o quizá te vino a la mente el olor del mar.", valor: "3" },
        ]
    },
    {
        consigna: "Elegí una de las siguientes casas",
        opciones: [
            { icono: '<i class="fa-solid fa-house-chimney fa-2x" style="color: #002d92;"></i>', texto: "<strong>La primera casa</strong> está situada en un área tranquila y sin ruido y todo lo que escuchas cuando sales, son los sonidos de los pájaros cantando. Está tan bien construida, que no notas el ruido del vecino. El interior de ella resuena con un carácter armónico, tan agradable, que te preguntas cómo puedes dejar pasar esta oportunidad.", valor: "2" },
            { icono: '<i class="fa-solid fa-house-chimney fa-2x" style="color: #002d92;"></i>', texto: "<strong>La segunda casa</strong> es bastante pintoresca. Tiene un aspecto muy tradicional. Puedes ver que tiene una perspectiva novedosa del patio y de la vista del jardín. Tiene amplios ventanales para recibir mucha luz y poder disfrutar de una vista maravillosa. También te llaman la atención los brillantes colores del interior. Está claro que es una muy buena compra.", valor: "1" },
            { icono: '<i class="fa-solid fa-house-chimney fa-2x" style="color: #002d92;"></i>', texto: "<strong>La tercera casa</strong> no está solamente construida sólidamente, sino que tiene una sensación especial de calidez. No es frecuente que entres en contacto con un lugar que toca tantos aspectos importantes. Es bastante espaciosa para sentir que puedes moverte con libertad y al mismo tiempo, es suficientemente cálida para sentirte cómodo. dan ganas de disfrutarla de inmediato.", valor: "3" },
        ]
    },
];
let resultados = [
    {
        tipo: "visual",
        descripcion: '<strong>Visual:</strong> Tiendes a pensar en imágenes y a relacionarlas con ideas y conceptos. Ej. "Vi que me dijiste; Observo; Imagino".',
        resultadoImg: "Visual.jpg",
    },
    {
        tipo: "auditivo",
        descripcion: '<strong>Auditivo:</strong> Tiendes a recordar mejor la información siguiendo y rememorando una explicación oral. Ej."En otras palabras; te escucho; Oye".',
        resultadoImg: "Auditivo.jpg",
    },
    {
        tipo: "kinestésico",
        descripcion: '<strong>Kinestésico:</strong> Tu aprendizaje está relacionado a tus sensaciones y movimientos. Ej. "Siento, dame una mano; Lo tengo; Lo capto".',
        resultadoImg: "Kinestesico.jpg",
    },
];
const opcionesConteo = {
    1: 0,
    2: 0,
    3: 0,
};
const comenzarBtn = document.getElementById("btn-comenzar");
const botonSiguiente = document.getElementById('btn-siguiente');
const botonTerminar = document.getElementById('btn-terminar');
const botonConocerMas = document.getElementById("conocerMas");
const contenedor1 = document.querySelector(".contenedor-general1");
const contenedor2 = document.querySelector(".contenedor-general2");
const contenedorItem = document.querySelector(".contenedor-item");
let itemActual = 0; // Para llevar un seguimiento del ítem actual
let radioButtons = document.querySelectorAll('input[type="radio"]');

botonSiguiente.addEventListener('click', presionarSiguiente);
botonTerminar.addEventListener('click', presionarTerminar);
botonConocerMas.addEventListener('click', presionarConocerMas);

document.addEventListener("DOMContentLoaded", function () {
    // Agrega un evento/función de clic al botón "Comenzar".Oculta el primer contenedor y muestra el segundo.
    comenzarBtn.addEventListener("click", function () {
        contenedor1.classList.add("aleja");
        contenedor2.classList.add("aproxima");

        setTimeout(function () {
            contenedor1.style.display = "none";
            contenedor2.style.display = "flex";
            insertarItem();
        }, 800);
    });
});
//FUNCIÓN PARA INSERTAR CONTENIDO EN LA TARJETA
function insertarItem() {
    const totalItems = items.length;
    const tarjetaActual = items[itemActual]
    document.getElementById("p-consigna").textContent = tarjetaActual.consigna;
    let pPalabra = document.getElementById("p-palabra");
    pPalabra.textContent = tarjetaActual.palabra;
    const boxPalabra = document.querySelector(".box-palabra");
    const boxOpcionCasa = document.querySelector(".box-opcionCasa");
    const opciones = tarjetaActual.opciones;
    let contadorItems = document.getElementById("pContadorItem");
    contadorItems.textContent = itemActual + 1 + " / " + totalItems;
    for (let i = 0; i < opciones.length; i++) {
        const input = document.getElementById(`opcion${i + 1}`);
        const label = document.querySelector(`label[for=opcion${i + 1}]`);
        const pCasa = document.getElementsByClassName("pCasa");
        const boxOpciones = document.querySelector(".box-opciones");
        const pOpcionCasa = document.getElementById("p-opcionCasa");
        input.value = opciones[i].valor;
        label.innerHTML = opciones[i].texto;
        if (itemActual === totalItems - 1) {
            contenedorItem.classList.add("alargarItem");
            boxOpciones.style.height = "75%";
            //     // Establece el HTML con el ícono solo para la última pregunta
            //     boxOpcionCasa.classList.add("box-opcionCasa-on");
            //     label.innerHTML = opciones[i].icono;
            //     label.classList.add("labelCasa");
            //     pCasa[0].style.display = "flex";
            //     pCasa[1].style.display = "flex";
            //     pCasa[2].style.display = "flex";
            //     boxOpciones.style.cssText = "flex-direction: row; height: 150px; border: none;";
            //     // Pone todos los íconos en el color azul
            //     label.addEventListener("click", function () {
            //         const iconos = document.querySelectorAll('.fa-house-chimney');
            //         iconos.forEach(icono => {
            //             icono.style.color = '#002d92';
            //         });
            //         //Para poner el ícono seleccionado en blaco.
            //         const iconoCasa = label.querySelector('.fa-house-chimney');
            //         if (iconoCasa) {
            //             iconoCasa.style.color = 'white';
            //         }
            //         pOpcionCasa.textContent = opciones[i].texto; //Inyecta la opción
            //         boxOpcionCasa.classList.add("texto-aparece");
            //     });
            // } else {
            //     // Si no es la última pregunta, muestra el texto normalmente
            //     label.textContent = opciones[i].texto;
        };
    };
    if (itemActual >= totalItems - 2) {
        const boxConsigna = document.querySelector(".box-consigna");
        boxConsigna.style.height = "30%";
        boxPalabra.style.display = "none";
    };

};

//FUNCIÓN AL TOCAR EL BOTÓN SIGUIENTE: se inserta info. de nueva tarjeta, se des selecciona el input y se incrementa el itemActual y se hace la lógica del test.
function presionarSiguiente() {
    const contenedor2 = document.querySelector(".contenedor-general2");
    if (itemActual < items.length - 1 && validarClick(radioButtons)) {
        itemActual++;
        sumarValorElegido(); //Usamos esta función para sumar un +1 a la opción seleccionada.
        //Animación
        contenedor2.style.animation = "aleja .8s ease";
        setTimeout(function () {
            contenedor2.style.animation = "";
            insertarItem(); //se inserta el contenido
            // Animación de entrada
            setTimeout(function () {
                contenedor2.style.animation = "aproxima .8s ease";
            }, 600);
        }, 600);
    }
    setTimeout(function () {
        if (itemActual == items.length - 1) {
            botonSiguiente.style.display = "none";
            botonTerminar.style.display = "block";
        };
    }, 600);
};
//variables para botón conocer otros estilos:
const imgEstiloAlt1 = document.getElementById('estiloAlternativo1');
const imgEstiloAlt2 = document.getElementById('estiloAlternativo2');
const descripcionEstilo1 = document.querySelector(".estilo1");
const descripcionEstilo2 = document.querySelector(".estilo2");
const boxEstilo2 = document.getElementById('box-estilo2');
let otrosEstilos = document.querySelector(".otrosEstilos");

function presionarTerminar() {
    if (validarClick()) {
        sumarValorElegido();
        const boxItem = document.querySelector(".box-item");
        const boxResultado = document.querySelector(".box-resultado");
        const resultadoSpans = document.querySelectorAll(".spanResultadoImg");
        const imgResultado = document.getElementById("imgResultado");
        const imgResultadoB = document.getElementById("imgResultadoB");
        const imgResultadoC = document.getElementById("imgResultadoC");
        const pResultado = document.getElementById("resultadoDescripcion");
        const resultadoNro = document.querySelectorAll(".resultadoNro");
        const spanResultado = document.getElementById("spanResultado");
        const spanResultadoB = document.getElementById("spanResultadoB");
        const spanResultadoC = document.getElementById("spanResultadoC");
        const boxOtrosEstilos = document.querySelector(".box-otrosEstilos");
        for (let i = 0; i < 3; i++) {
            resultadoNro[i].textContent = opcionesConteo[i + 1];
        }

        resultadoNro.textContent = opcionesConteo[1] + " " + opcionesConteo[2] + " " + opcionesConteo[3];
        boxItem.style.display = "none";
        boxResultado.style.display = "flex";

        requestAnimationFrame(() => {
            boxResultado.style.opacity = 1;
            boxResultado.style.transform = "translateY(0)";
        });
        //Buscamos la opción que tenga el mayor número de selecciones
        let estiloElegido = null
        let maxValor = -Infinity;
        for (let opcion in opcionesConteo) {
            if (opcionesConteo[opcion] > maxValor) {
                maxValor = opcionesConteo[opcion];
                estiloElegido = opcion - 1;
            }
        }
        const resultadoTitulo = document.getElementById("resultado__titutlo");
        if (opcionesConteo[1] === opcionesConteo[2] && opcionesConteo[2] === opcionesConteo[3]) {
            //Usa todos los estilos por igual
            contenedorItem.classList.remove("alargarItem");
            contenedorItem.classList.add("achicarResultadoTres");
            //HASTA AQUÍ LOGICA 2 (icono casa seleccionable)
            resultadoTitulo.innerHTML = "Presentas una preponderancia equitativa hacia los estilos de aprendizaje " + resultados[0].tipo + ", " + resultados[1].tipo + " y " + resultados[2].tipo;
            imgResultado.src = resultados[0].resultadoImg;
            imgResultadoB.src = resultados[1].resultadoImg;
            imgResultadoC.src = resultados[2].resultadoImg;
            pResultado.innerHTML = resultados[0].descripcion + '<br>' + '<br>' + resultados[1].descripcion + '<br>' + '<br>' + resultados[2].descripcion;

            spanResultado.style.display = "inline";
            spanResultadoB.style.display = "inline";
            spanResultadoC.style.display = "inline";
            boxOtrosEstilos.style.display = "none"; //Se le quita el boton de otros estilos porque ya están todos

        } else if (opcionesConteo[1] === opcionesConteo[2] && opcionesConteo[1] !== opcionesConteo[3] && opcionesConteo[1] >= maxValor) {
            //Predominan los estilos visual y auditivo por igual
            contenedorItem.classList.remove("alargarItem");
            contenedorItem.classList.add("achicarResultadoUno");
            //HASTA AQUÍ LOGICA 2
            imgResultado.src = resultados[0].resultadoImg;
            imgResultadoB.src = resultados[1].resultadoImg;
            resultadoTitulo.innerHTML = "Presentas una preponderancia equitativa hacia los estilos de aprendizaje " + resultados[0].tipo + " y " + resultados[1].tipo;
            pResultado.innerHTML = resultados[0].descripcion + '<br>' + '<br>' + resultados[1].descripcion + '<br>';

            spanResultado.style.display = "inline";
            spanResultadoB.style.display = "inline";

            resultadoSpans.forEach(spanR => {
                spanR.style.maxWidth = "45%";
                spanR.style.paddingLeft = "2.5%";
                spanR.style.paddingRight = "2.5%";
            });
            //CONOCER MÁS: Se agrega imagen y descripción de estilo kinestésico
            descripcionEstilo1.innerHTML = resultados[2].descripcion;
            imgEstiloAlt1.src = resultados[2].resultadoImg;
            boxEstilo2.style.display = 'none';

        } else if (opcionesConteo[1] === opcionesConteo[3] && opcionesConteo[1] !== opcionesConteo[2] && opcionesConteo[1] >= maxValor) {
            //Predominan los estilos visual y kinestésico por igual
            contenedorItem.classList.remove("alargarItem");
            contenedorItem.classList.add("achicarResultadoUno");
            //HASTA AQUÍ LOGICA 2 (icono casa seleccionable)
            resultadoTitulo.innerHTML = "Presentas una preponderancia equitativa hacia los estilos de aprendizaje " + resultados[0].tipo + " y " + resultados[2].tipo;
            imgResultado.src = resultados[0].resultadoImg;
            imgResultadoC.src = resultados[2].resultadoImg;
            pResultado.innerHTML = resultados[0].descripcion + '<br>' + '<br>' + resultados[2].descripcion + '<br>';

            spanResultado.style.display = "inline";
            spanResultadoC.style.display = "inline";

            resultadoSpans.forEach(spanR => {
                spanR.style.maxWidth = "45%";
                spanR.style.paddingLeft = "2.5%";
                spanR.style.paddingRight = "2.5%";
            });
            descripcionEstilo1.innerHTML = resultados[1].descripcion;
            imgEstiloAlt1.src = resultados[1].resultadoImg;
            boxEstilo2.style.display = 'none';

        } else if (opcionesConteo[2] === opcionesConteo[3] && opcionesConteo[2] !== opcionesConteo[1] && opcionesConteo[2] >= maxValor) {
            //Predominan los estilos auditivo y kinestésico por igual.
            contenedorItem.classList.remove("alargarItem");
            contenedorItem.classList.add("achicarResultadoUno");
            //HASTA AQUÍ LOGICA 2 (icono casa seleccionable)
            resultadoTitulo.innerHTML = "Presentas una preponderancia equitativa hacia los estilos de aprendizaje " + resultados[1].tipo + " y " + resultados[2].tipo;
            imgResultadoB.src = resultados[1].resultadoImg;
            imgResultadoC.src = resultados[2].resultadoImg;
            pResultado.innerHTML = resultados[1].descripcion + '<br>' + '<br>' + resultados[2].descripcion + '<br>';

            spanResultadoB.style.display = "inline";
            spanResultadoC.style.display = "inline";

            resultadoSpans.forEach(spanR => {
                spanR.style.maxWidth = "45%";
                spanR.style.paddingLeft = "2.5%";
                spanR.style.paddingRight = "2.5%";
            });
            descripcionEstilo1.innerHTML = resultados[0].descripcion;
            imgEstiloAlt1.src = resultados[0].resultadoImg;
            boxEstilo2.style.display = 'none';
        } else {
            contenedorItem.classList.remove("alargarItem");
            contenedorItem.classList.add("achicarResultadoDos");
            //HASTA AQUÍ LOGICA 2
            resultadoTitulo.textContent = "Presentas una preponderancia hacia el estilo de aprendizaje " + resultados[estiloElegido].tipo;
            imgResultado.src = resultados[estiloElegido].resultadoImg;
            pResultado.innerHTML = resultados[estiloElegido].descripcion;

            spanResultado.style.display = "inline";
            spanResultadoB.style.display = "inline";
            spanResultadoC.style.display = "inline";

            resultadoSpans.forEach(spanR => {
                spanR.style.paddingLeft = 0;
                spanR.style.paddingRight = 0;
            });

            let opcionesEstilo = [0, 1, 2];
            let pepito = false;
            opcionesEstilo.forEach(opEstilo => {
                if (opEstilo != estiloElegido && pepito == false) {
                    descripcionEstilo1.innerHTML = resultados[opEstilo].descripcion;
                    imgEstiloAlt1.src = resultados[opEstilo].resultadoImg;
                    pepito = true;
                };
                if (opEstilo != estiloElegido && pepito == true) {
                    descripcionEstilo2.innerHTML = resultados[opEstilo].descripcion;
                    imgEstiloAlt2.src = resultados[opEstilo].resultadoImg;
                };
            });
        };
    };
}
function presionarConocerMas() {
    const separador = document.querySelector(".separador"); 
    contenedorItem.classList.add("achicarResultadoTres");
    otrosEstilos.style.display = "flex";
    separador.style.display = "flex";
    botonConocerMas.style.display = "none";
}

//FUNCIÓN VALIDAR SI HIZO CLICK
function validarClick() {
    let hizoClick = false;
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked == true) {
            hizoClick = true;
        }
    });
    if (hizoClick !== true) {
        alert("Debe seleccionar una opción para avanzar");
    };
    return hizoClick;
};
//FUNCIÓN SUMAR VALOR ELEGIDO
function sumarValorElegido() {
    let opcionSeleccionada;
    radioButtons.forEach((radioButton) => {
        if (radioButton.checked) {
            opcionSeleccionada = radioButton.value;
        };
    });
    if (opcionSeleccionada) {
        opcionesConteo[opcionSeleccionada]++;
        console.log("Se han elegido hasta ahora ", opcionesConteo, " véces cada opción.");
    };
    //Deseleccionamos los inputs radio para la próxima selección.
    radioButtons.forEach((radioButton) => {
        radioButton.checked = false;
    });
};
