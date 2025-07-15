const fs = require("fs");
const path = require("path");

const folder = "./";
const baseRem = 10;

function pxToRem(content) {
  return content.replace(/(\d+(\.\d+)?)px/g, (match, number) => {
    const pxValue = parseFloat(number);

    if (pxValue < baseRem) return match;

    const remValue = pxValue / baseRem;
    const formatted =
      remValue % 1 === 0 ? remValue : remValue.toFixed(2).replace(/\.?0+$/, "");
    return `${formatted}rem`;
  });
}

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
