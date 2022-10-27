(function() {
    var napolitana = {
        nombre: "Napolitana",
        id: 1,
        ingredientes: ["Queso", "Salsa", "Tomate", "Ajo"],
        precio: "700"

    }
    var fugazzeta = {
        nombre: "Fugazzeta",
        id: 2,
        ingredientes: ["Queso", "Salsa", "Cebolla"],
        precio: "300"

    }
    var jym = {
        nombre: "Jamon y Morron",
        id: 3,
        ingredientes: ["Queso", "Salsa", "Jamon", "Morron"],
        precio: "600"

    }
    var muzzarela = {
        nombre: "Muzzarela",
        id: 4,
        ingredientes: ["Queso", "Salsa"],
        precio: "400"

    }
    var jamon = {
        nombre: "Jamon y Queso",
        id: 5,
        ingredientes: ["Queso", "Salsa", "Jamon"],
        precio: "450"

    }
    var especial = {
        nombre: "Especial",
        id: 6,
        ingredientes: ["Queso", "Salsa", "tomate", "ajo", "Jamon", "Piña"],
        precio: "900"

    }
    var Pizzas = [napolitana, fugazzeta, jym, muzzarela, jamon, especial];

    //Punto a
    console.log(" ");
    console.log("Pizzas ID Impar: ");
    for (var i=0; i<Pizzas.length; i++) {
        if ( Pizzas[i].id % 2 != 0) {
            console.log("Pizza " + Pizzas[i].nombre);
        }
    }

    //Punto b
    console.log(" ");
    var sino = false;
    console.log("Pizzas a menos de $600: ");
    for (var i=0; i<Pizzas.length; i++) {
        if ( Pizzas[i].precio < 600 ) {
            sino = true;
        }
    }
    if ( sino == true ) {
        console.log("Si, hay pizzas a menos de $600");
    }

    //Punto c
    console.log(" ");
    console.log("Las pizzas son: ");
    for (var i=0; i<Pizzas.length; i++) {
        console.log("La Pizza " + Pizzas[i].nombre + " tiene precio de $" + Pizzas[i].precio);
    }

    //Punto d
    console.log(" ");
    console.log("Las pizzas y sus ingredientes son: ");
    for (var i=0; i<Pizzas.length; i++) {
        console.log("La Pizza " + Pizzas[i].nombre + " tiene de ingredientes: ");
        for (var j=0; j<Pizzas[i].ingredientes.length; j++) {
            console.log(Pizzas[i].ingredientes[j]);
        }
        console.log(" ");
    }

}())