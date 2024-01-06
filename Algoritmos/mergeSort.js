const livros = require("./listaLivros");

function mergeSort(lista) {

  if (lista.length > 1) {

    const meio = Math.floor(lista.length / 2);
    let part1 = mergeSort(lista.slice(0, meio));
    let part2 = mergeSort(lista.slice(meio))

    lista = ordena(part1, part2);
  }
  return lista
}

function ordena(part1, part2) {

  let listaFinal = [];
  let [atualPart1, atualPart2] = [0, 0];
  while (atualPart1 < part1.length && atualPart2 < part2.length) {

    let itemPart1 = part1[atualPart1];
    let itemPart2 = part2[atualPart2];

    if (itemPart1.preco < itemPart2.preco) {

      listaFinal.push(itemPart1);
      atualPart1++;
    } else {

      listaFinal.push(itemPart2);
      atualPart2++;
    }

  }
  return listaFinal.concat(atualPart1 < part1.length ? part1.slice(atualPart1) : part2.slice(atualPart2))
}

console.log(mergeSort(livros))