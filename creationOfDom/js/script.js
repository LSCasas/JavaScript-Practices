const data = [
  {
    title: "Aprendiendo JavaScript",
    year: "2021",
    isbn: "979-8708179263",
    author: "Carlos Azaustre",
  },
  {
    title: "React.js Práctico",
    year: "2022",
    isbn: "TBD",
    author: "Carlos Azaustre",
  },
  {
    title: "Clean JavaScript",
    year: "2020",
    isbn: "979-8567583319",
    author: "Miguel A. Gómez",
  },
];

function getData() {
  return new Promise((resolve, reject) => {
    if (data.length === 0) {
      reject(new Error("Data vacio"));
    }
    setTimeout(() => {
      resolve(data);
    }, 2000); // Cambié a 2000 ms para pruebas rápidas
  });
}

async function fetchBooks() {
  try {
    const books = await getData();
    console.log(books);
  } catch (error) {
    console.error("Error al obtener los datos:", error.message);
  }
}

fetchBooks();
