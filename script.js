const subir = document.getElementById("subir");
const text = document.getElementById("text");
const archivo = "archivo.md";
subir.addEventListener("click", async () => {
  event.preventDefault();

  async function setTextAsync(value, delay) {
    return new Promise((resolve) => {
      setTimeout(() => {
        text.innerHTML = value;
        resolve();
      }, delay);
    });
  }

  await setTextAsync("Subiendo...", 2000);
  if (is_valid_file(archivo)) {
    await setTextAsync("Subido", 2000);
    await setTextAsync("Cargado", 2000);
    document.getElementById('archivo').innerHTML= `Has seleccionado el archivo ${archivo}`;
  } else {
    await setTextAsync("Error", 2000);
    document.getElementById('archivo').innerHTML= `Has seleccionado el archivo ${archivo}`;
  }
});

const is_valid_file = (file) => {
  if (file.split(".")[1] === "txt") {
    return true;
  } else {
    return false;
  }
};
