/* 
Simulador sobre venta de PC gamer ya armada
dando distintas opciones de gama incluyendo un listado de los componentes en cada opción.
*/

let ingreso = true;


function registro() {

    if (ingreso) {
        let recibirUsuario = prompt("Ingrese su nombre");
        alert("¡Hola " + recibirUsuario + "!.");

    }
    if (ingreso) {
        console.log("Ha ingresado un usuario");
    } else {
        console.log("Ha ocurrido un error");
    }

};




function menu() {

    let option = prompt(
        "Por favor seleccione una opción: \n1 - PC Gamer gama extrema.  \n2 - PC Gamer gama alta.   \n3 - PC Gamer gama media.   \n4 - PC Gamer gama baja.  \n Presione 5 para salir"
    )
    switch (option) {
        case "1":
            alert("Seleccionaste la PC gama extrema");
            alert("Su PC posee: \n Motherboard Asus ROG STRIX Z790 \n Intel I9 13900K \n RTX 4090 Asus ROG STRIX \n Coolmaster Asus \n 32gb ram DDR5 5600MHZ \n 2tb SSD Samsung 980 Pro Evo Plus \n Fuente Corsair 1200W \n Gabinete Corsair");
            alert("Muchas gracias por su compra! \n Nos pondremos en contacto proximamente")
            break;

        case "2":
            alert("Seleccionaste la PC gama alta");
            alert("Su PC posee: \n Motherboard Aorus Extreme Z690 \n Intel I9 12900K \n RTX 3090 TI AORUS MASTER \n Coolmaster Gibabyte \n 32gb ram DDR4 4800MHZ \n 2tb SSD Samsung 980 Pro Evo Plus \ Fuente Corsair 1000W \n Gabinete Aorus");
            alert("Muchas gracias por su compra! \n Nos pondremos en contacto proximamente")
            break;

        case "3":
            alert("Seleccionaste la PC gama media");
            alert("Su PC posee: \n Motherboard Gigabyte H610M \n Intel I5 11600K \n RTX 3060 Msi \n Coolmaster Thermaltake \n 16gb ram DDR4 3200MHZ \n 512gb SSD KINGSTON FURY \n Fuente Corsair 450W \n Gabinete Spectra ");
            alert("Muchas gracias por su compra! \n Nos pondremos en contacto proximamente")
            break;

        case "4":
            alert("Seleccionaste la PC gama baja");
            alert("Su PC posee: \n Motherboard Asus H410M \n Intel I5 9400F \n GTX 1650 EVGA \n Coolmaster Thermaltake \n 8gb ram DDR4 3200MHZ \n 256gb SSD Kingston \n Sata III 1000gb \n Fuente Sentey 400W \n Gabinete sujeto a disponibilidad");
            alert("Muchas gracias por su compra! \n Nos pondremos en contacto proximamente")

            break;

        case "5":
            break;


        case "6":
        default:
            prompt ("Ha ocurrido un error. \n Ingrese cualquier tecla para continuar");

            return menuEterno();
            

    }


};


function menuEterno() {
   
        return menu();

};


registro();
menu();


