const fileInput = document.getElementById('file-input');
const fileButton = document.getElementById('file-button');


fileButton.addEventListener('click', () => {
  fileInput.click();
});

fileInput.addEventListener('change', () => {
  const selectedFile = fileInput.files[0];
  if (selectedFile) {
    console.log('Archivo seleccionado:', selectedFile);
    // Aquí puedes realizar las operaciones que desees con el archivo seleccionado
  }
});
