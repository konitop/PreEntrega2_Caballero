let ListaJuegos = [
    {name: "League of Legends", price: "free", multiplayer: true, adult: false, platform: 1},
    {name: "Valorant", price: "free", multiplayer: true, adult: false, platform: 1},
    {name: "NieR Automata", price: "34.99", multiplayer: false, adult: true, platform: 3},
    {name: "Dark Souls", price: "20.00", multiplayer: true, adult: false, platform: 3},
    {name: "Minecraft", price: "25.00", multiplayer: true, adult: false, platform: 3},
    {name: "Five Nights At Freddy's", price: "5.00", multiplayer: false, adult: false, platform: 1},
    {name: "Bloodborne", price: "20.00", multiplayer: true, adult: true, platform: 2},
    {name: "Super Smash Bros", price: "50.00", multiplayer: true, adult: false, platform: 2},
    {name: "The Legend Of Zelda", price: "20.00", multiplayer: false, adult: false, platform: 2},
    {name: "Honkai Star Rail", price: "free", multiplayer: true, adult: false, platform: 3}
];
// Plataformas: 1(PC), 2(Console), 3(Both)

let carrito = []; // Array para almacenar los juegos agregados al carrito

// Función para mostrar resultados de juegos
function mostrarJuegos(juegos) {
    if (juegos.length === 0) {
        alert("No se encontraron juegos.");
    } else {
        let lista = juegos.map(juego => `USD$${juego.price} - ${juego.name}`).join("\n");
        alert(lista);
    }
}

// Función para ver el catálogo de juegos
function verCatalogo() {
    alert("¡Te damos la bienvenida al Catálogo de Juegos!");
    
    while (true) {
        let opcion = prompt(
            "Selecciona una opción:\n" +
            "1) Buscar juegos por nombre\n" +
            "2) Mostrar juegos gratuitos\n" +
            "3) Mostrar juegos por plataforma\n" +
            "4) Volver al menú principal"
        );

        switch (opcion) {
            case "1": // Buscar juegos por nombre
                let nombre = prompt("Escribe el nombre del juego:");
                if (nombre.trim() === "") {
                    alert("Error: Debes ingresar un nombre de juego.");
                } else {
                    let juegoEncontrado = ListaJuegos.filter(juego => juego.name.toLowerCase().includes(nombre.toLowerCase()));
                    mostrarJuegos(juegoEncontrado);
                }
                break;

            case "2": // Buscar juegos gratuitos
                let juegosGratis = ListaJuegos.filter(juego => juego.price === "free");
                mostrarJuegos(juegosGratis);
                break;

            case "3": // Buscar juegos por plataforma
                let plataforma = prompt("Introduce el número de la plataforma (1: PC, 2: Consola, 3: Ambas):");
                if (plataforma !== "1" && plataforma !== "2" && plataforma !== "3") {
                    alert("Error: Debes ingresar un número de plataforma válido (1, 2 o 3).");
                } else {
                    let juegosPorPlataforma = ListaJuegos.filter(juego => juego.platform == plataforma);
                    mostrarJuegos(juegosPorPlataforma);
                }
                break;

            case "4": // Volver al menú principal
                return;

            default: // Inválido
                alert("Opción Inexistente.");
                break;
        }
    }
}

// Función para ver el carrito
function verCarrito() {
    while (true) {
        let opcion = prompt(
            "Selecciona una opción:\n" +
            "1) VER los juegos en el carrito\n" +
            "2) AGREGAR un juego al carrito\n" +
            "3) QUITAR un juego del carrito\n" +
            "4) CALCULAR el total del carrito\n" +
            "5) VOLVER al menú principal"
        );

        switch (opcion) {
            case "1": // Ver carrito
                if (carrito.length === 0) {
                    alert("El carrito está vacío.");
                } else {
                    let listaCarrito = carrito.map(juego => `USD$${juego.price} - ${juego.name}`).join("\n");
                    alert(listaCarrito);
                }
                break;

            case "2": // Agregar al carrito
                let nombreAgregar = prompt("Escribe el nombre del juego para agregar al carrito:");
                let juegoAgregar = ListaJuegos.find(juego => juego.name.toLowerCase() === nombreAgregar.toLowerCase());
                if (juegoAgregar) {
                    carrito.push(juegoAgregar);
                    alert(`Se ha agregado ${juegoAgregar.name} al carrito.`);
                } else {
                    alert("El juego no se encuentra en el catálogo.");
                }
                break;

            case "3": // Quitar del carrito
                let nombreQuitar = prompt("Escribe el nombre del juego para quitar del carrito:");
                let posicion = carrito.findIndex(juego => juego.name.toLowerCase() === nombreQuitar.toLowerCase());
                if (posicion !== -1) {
                    let juegoQuitar = carrito.splice(posicion, 1)[0];
                    alert(`Se ha quitado ${juegoQuitar.name} del carrito.`);
                } else {
                    alert("El juego no está en el carrito.");
                }
                break;

            case "4": // Calcular Total
                let total = carrito.reduce((acumulado, juego) => acumulado + (juego.price === "free" ? 0 : parseFloat(juego.price)), 0);
                alert(`El total del carrito es $${total.toFixed(2)}`);
                break;

            case "5": // Volver al menú principal
                return;

            default: // Inválido
                alert("Opción Inexistente.");
                break;
        }
    }
}

// Función para el menú principal
function menuPrincipal() {
    while (true) {
        let opcion = prompt(
            "Selecciona una opción:\n" +
            "1) Ver Catálogo\n" +
            "2) Opciones del carrito\n" +
            "3) Salir"
        );

        switch (opcion) {
            case "1": // Ver el catálogo
                verCatalogo();
                break;

            case "2": // Ver el carrito
                verCarrito();
                break;

            case "3": // Salir
                alert("¡Gracias por visitarnos!");
                return;

            default: // Inválido
                alert("Opción Inexistente.");
                break;
        }
    }
}

// Iniciar el menú principal
menuPrincipal();