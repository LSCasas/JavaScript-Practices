let data = [
    ["Israel", "Salinas", 34],
    ["Charles", "Silva", 27],
    ["Naomi", "Lopez", 27],
    ["David", "Moranchel", 28]
  ];
  
  /*
      1. Necesitamos una lista con los nombres completos de las personas que se encuentran en la data
      2.- Necesitamos saber cual es la mayor y la menor edad de las personas en la lista
      3.- Necesitamos reestructurar la data para que quede de la siguiente forma:
  
      let restructuredData = [
          {
              name:
              lastname:
              age:
          }
      ]
  */

      const obtenerNombresCompletos = (miArray) =>  miArray.map(persona => [`${persona[0]} ${persona[1]}`]);

    const nombresCompletos = obtenerNombresCompletos(data);
    console.log(nombresCompletos);
    







    
    const obtenerDatosOrdenadosPorEdad = (miArray) => {
        return miArray
            .map(([nombre, apellido, edad]) => ({ nombre: `${nombre} ${apellido}`, edad }))
            .sort((a, b) => b.edad - a.edad);
    };
    
    const datosOrdenadosPorEdad = obtenerDatosOrdenadosPorEdad(data);
    console.log(datosOrdenadosPorEdad);
    





    const reestructurarInformacion = (miArray) => {
        return miArray.map(([nombre, apellido, edad]) => {
            return {
                name: nombre,
                lastname: apellido,
                age: edad
            };
        });
    };
    
    const informacionReestructurada = reestructurarInformacion(data);
    console.log(informacionReestructurada);