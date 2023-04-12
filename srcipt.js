let personas = [
  { nombre: "Juan", edad: 19 },
  { nombre: "Juanito", edad: 16 },
  { nombre: "Elena", edad: 22 },
  { nombre: "Sandra", edad: 26 },
  { nombre: "Jose", edad: 18 },
  { nombre: "Carlos", edad: 17 },
  { nombre: "Amanda", edad: 13 },
  { nombre: "Juana", edad: 23 },
  { nombre: "Joselo", edad: 31 },
];

function mostrarTexto(array) {
  const mayores = array.filter((persona) => persona.edad > 18);
  const menores = array.filter((persona) => persona.edad < 18);

  if (mayores.length > 0 && menores.length > 0) {
    console.log(
      "Hay algunas personas que son mayores de edad y algunas que son menores de edad."
    );
  } else if (mayores.length > 0) {
    console.log("Todas las personas son mayores de edad");
  } else if (menores.length > 0) {
    console.log("Todas las personas son menores de edad");
  } else {
    console.log("Todas las personas tienen 18 años.");
  }
}
function mayores(array) {
  console.log("Estos son los nombres de las personas mayores de edad:");
  for (let f = 0; f < array.length; f++) {
    if (array[f].edad > 18) {
      console.log(`- ${array[f].nombre}`);
    }
  }
}
function cambiarNombreMayores(personas) {
  for (let f = 0; f < personas.length; f++) {
    if (personas[f].edad >= 18) {
      personas[f] = { ...personas[f], nombre: "Mayor" };
    }
  }
  console.log(personas);
}

function cambiarNombreMenores(personas) {
  for (let f = 0; f < personas.length; f++) {
    if (personas[f].edad < 18) {
      personas[f] = { ...personas[f], nombre: "Menor" };
    }
  }
  console.log(personas);
}
mostrarTexto(personas);
mayores(personas);
cambiarNombreMayores(personas);
cambiarNombreMenores(personas);
