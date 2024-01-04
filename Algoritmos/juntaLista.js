const { edFolha, edGalho } = require("./arrays")

function juntaLista(lista1, lista2) {

  let listaFinal = []
  let [atualLista1, atualLista2, atualFinal] = [0, 0, 0]

  while (atualLista1 < lista1.length && atualLista2 < lista2.length) {

    let itemLista1 = lista1[atualLista1]
    let itemLista2 = lista2[atualLista2]

    if (itemLista1.preco < itemLista2.preco) {

      listaFinal[atualFinal] = itemLista1
      atualLista1++
    } else {

      listaFinal[atualFinal] = itemLista2
      atualLista2++
    }
    atualFinal++
  }

  while (atualLista1 < lista1.length) {
    listaFinal[atualFinal] = lista1[atualLista1]
    atualLista1++
    atualFinal++
  }

  while (atualLista2 < lista2.length) {
    listaFinal[atualFinal] = lista2[atualLista2]
    atualLista2++
    atualFinal++
  }
  return listaFinal
}

console.log(juntaLista(edFolha, edGalho))

