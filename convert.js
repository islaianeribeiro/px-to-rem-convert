const fs = require("fs");
const path = require("path");

// Caminho da pasta com os arquivos CSS
const folder = "./";

// Função para converter px para rem com 1rem = 10px
function pxToRem(content) {
  return content.replace(/(\d+(\.\d+)?)px/g, (_, number) => {
    const value = parseFloat(number) / 10;
    return `${
      value % 1 === 0 ? value : value.toFixed(2).replace(/\.?0+$/, "")
    }rem`;
  });
}

// Lê todos os arquivos da pasta
fs.readdir(folder, (err, files) => {
  if (err) {
    console.error("Erro ao ler a pasta:", err);
    return;
  }

  files.forEach((file) => {
    if (file.endsWith(".css") && file !== "convert.js") {
      const filePath = path.join(folder, file);
      fs.readFile(filePath, "utf8", (errorReading, content) => {
        if (errorReading) {
          console.error(`Erro ao ler ${file}:`, errorReading);
          return;
        }

        const newContent = pxToRem(content);

        fs.writeFile(filePath, newContent, "utf8", (errorWriting) => {
          if (errorWriting) {
            console.error(`Erro ao escrever ${file}:`, errorWriting);
            return;
          }

          console.log(`✔ ${file} convertido com sucesso.`);
        });
      });
    }
  });
});
