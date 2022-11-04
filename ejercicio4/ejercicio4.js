const Pizzas = [
  {
    nombre: "Napolitana",
    id: 1,
    ingredientes: ["Queso", "Salsa", "Tomate", "Ajo"],
    precio: 700,
  },
  {
    nombre: "Fugazzeta",
    id: 2,
    ingredientes: ["Queso", "Salsa", "Cebolla"],
    precio: 300,
  },
  {
    nombre: "Jamon y Morron",
    id: 3,
    ingredientes: ["Queso", "Salsa", "Jamon", "Morron"],
    precio: 600,
  },
  {
    nombre: "Muzzarela",
    id: 4,
    ingredientes: ["Queso", "Salsa"],
    precio: 400,
  },
  {
    nombre: "Jamon y Queso",
    id: 5,
    ingredientes: ["Queso", "Salsa", "Jamon"],
    precio: 450,
  },
  {
    nombre: "Especial",
    id: 6,
    ingredientes: ["Queso", "Salsa", "tomate", "ajo", "Jamon", "Piña"],
    precio: 900,
  },
];

//Punto a
console.log("Pizzas con ID Impar: ");
Pizzas.forEach((element) => {
  if (element.id % 2 != 0) console.log(element.nombre);
});

//Punto b
console.log(" ");
console.log("Hay pizzas a menos de $600? ");
if (Pizzas.some((element) => element.precio < 600)) {
  console.log("Si, hay pizzas a menos de $600");
} else {
  console.log("No, no hay pizzas a menos de $600");
}

//Punto c
console.log(" ");
console.log("Las pizzas y sus precios son: ");
Pizzas.forEach((element) =>
  console.log(
    "La Pizza " + element.nombre + " tiene precio de $" + element.precio
  )
);

//Punto d
console.log(" ");
console.log("Las pizzas y sus ingredientes son: ");
Pizzas.forEach((element) => {
  console.log(" ");
  console.log("La pizza " + element.nombre + " tiene de ingredientes: ");
  element.ingredientes.forEach((element2) => console.log(element2));
});

/*
//Punto a
console.log(" ");
console.log("Pizzas ID Impar: ");
for (let i = 0; i < Pizzas.length; i++) {
  if (Pizzas[i].id % 2 != 0) {
    console.log("Pizza " + Pizzas[i].nombre);
  }
}

//Punto b
console.log(" ");
let sino = false;
console.log(" Hay pizzas a menos de $600? ");
for (let i = 0; i < Pizzas.length; i++) {
  if (Pizzas[i].precio < 600) {
    sino = true;
  }
}
if (sino == true) {
  console.log("Si, hay pizzas a menos de $600");
}
else {
  console.log("No, no hay pizzas a menos de $600");
}

//Punto c
console.log(" ");
console.log("Las pizzas son: ");
for (let i = 0; i < Pizzas.length; i++) {
  console.log(
    "La Pizza " + Pizzas[i].nombre + " tiene precio de $" + Pizzas[i].precio
  );
}

//Punto d
console.log(" ");
console.log("Las pizzas y sus ingredientes son: ");
for (let i = 0; i < Pizzas.length; i++) {
  console.log("La Pizza " + Pizzas[i].nombre + " tiene de ingredientes: ");
  for (let j = 0; j < Pizzas[i].ingredientes.length; j++) {
    console.log(Pizzas[i].ingredientes[j]);
  }
  console.log(" ");
}
*/
