
const users = [
    {
      name: "Alice",
      lastname: "Johnson",
      age: 28,
      gender: "Female",
      country: "USA",
    },
    {
      name: "Bob",
      lastname: "Smith",
      age: 32,
      gender: "Male",
      country: "Canada",
    },
    {
      name: "Carlos",
      lastname: "Gomez",
      age: 24,
      gender: "Male",
      country: "Mexico",
    },
    {
      name: "Daniela",
      lastname: "Martinez",
      age: 30,
      gender: "Female",
      country: "Colombia",
    },
    {
      name: "Erik",
      lastname: "Svensson",
      age: 29,
      gender: "Male",
      country: "Sweden",
    },
    {
      name: "Fiona",
      lastname: "O'Donnell",
      age: 35,
      gender: "Female",
      country: "Ireland",
    },
    {
      name: "Gautam",
      lastname: "Patel",
      age: 27,
      gender: "Male",
      country: "India",
    },
    {
      name: "Hana",
      lastname: "Kim",
      age: 22,
      gender: "Female",
      country: "South Korea",
    },
    {
      name: "Ivan",
      lastname: "Petrov",
      age: 34,
      gender: "Male",
      country: "Russia",
    },
    {
      name: "Julia",
      lastname: "Santos",
      age: 25,
      gender: "Female",
      country: "Brazil",
    },
  ];
  
  /*
      1.- Necesitamos una lista con únicamente los nombres completos de cada usuario
      2.- Necesitamos una lista con únicamente aquellos usuarios con género "Male"
      3.- Necesitamos una lista con únicamente aquellos usuarios con género "Female"
      4.- Necesitamos saber la edad promedio de los usuarios
      5.- Necesitamos saber la mayor edad
      6.- Necesitamos saber la menor edad
  */

//1. Lista de Nombres
      const obtenerListaNombres = (miArray) =>  miArray.map(miArray => `${miArray.name} ${miArray.lastname}`);
    
    const listaNombres = obtenerListaNombres(users);
    console.log(listaNombres);
    

    //2. Lista con genero Masculino 
    const obtenerNombresMasculinos = (miArray) => {
      return miArray
          .filter(miArray => miArray.gender === "Male")
          .map(miArray => `${miArray.name} ${miArray.lastname}`);
  };
  
  const listaNombresMasculinos = obtenerNombresMasculinos(users);
  console.log(listaNombresMasculinos);

      //3. Lista con genero Femenino
      const obtenerNombresFemeninos = (miArray) => {
        return miArray
            .filter(miArray => miArray.gender === "Female")
            .map(miArray => `${miArray.name} ${miArray.lastname}`);

            
    };
    
    const listaNombresFemeninos = obtenerNombresFemeninos(users);
    console.log(listaNombresFemeninos);


    //4. Promedio de las edades
    const calcularPromedioEdades = (miArray) => miArray.reduce((total, user) => total + user.age, 0);
  const promedioEdades = calcularPromedioEdades(users);
  console.log("la edad promedio es: ", promedioEdades/users.length)
      

      
//5. Edad Mayor
const encontrarEdadMayor = (miArray) => {
  return users.reduce((maxEdad, miArray) => {
      return Math.max(maxEdad, miArray.age);
  }, 0);
};

const edadMayor = encontrarEdadMayor(users);
console.log("la edad mayor es: ", edadMayor);

//6. Edad Menor
const encontrarEdadMenor = (miArray) => {
  return users.reduce((maxEdad, miArray) => {
      return Math.min(maxEdad, miArray.age);
  }, Infinity);
};

const edadMenor = encontrarEdadMenor(users);
console.log("la edad menor es: ", edadMenor);
