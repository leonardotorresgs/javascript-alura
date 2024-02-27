import fs from 'fs';
// const chalk = require('chalk');
import chalk from 'chalk';

function trataErro(erro) {
  throw new Error(chalk.red(erro.code, 'Não há arquivo no diretório'));
}

function pegaArquivo(caminhoDoArquivo) {
  const encoding = 'utf-8';
  fs.promisses
    .readFile(caminhoDoArquivo, encoding)
    .then((texto) => console.log(chalk.green(texto)))
    .catch(trataErro)
}

// function pegaArquivo(caminhoDoArquivo) {
//   const encoding = 'utf-8';
//   fs.readFile(caminhoDoArquivo, encoding, (erro, texto) => {
//     if (erro) {
//       trataErro(erro);
//     }
//     console.log(chalk.green(texto));
//   })
// }

pegaArquivo('./arquivos/texto.md');