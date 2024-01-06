const { edFolha, edGalho } = require("./arrays")

function juntaLista(lista1, lista2) {

  let listaFinal = []
  let [atualLista1, atualLista2,] = [0,0]

  while (atualLista1 < lista1.length && atualLista2 < lista2.length) {

    let itemLista1 = lista1[atualLista1]
    let itemLista2 = lista2[atualLista2]

    if (itemLista1.preco < itemLista2.preco) {

      listaFinal.push(itemLista1) 
      atualLista1++
    } else {

      listaFinal.push(itemLista2) 
      atualLista2++
    }
  }

  listaFinal.concat(atualLista1<lista1.length ? lista1.slice(atualLista1) : lista2.slice(atualLista2))
  
  return listaFinal
}

console.log(juntaLista(edFolha, edGalho))

module.exports = juntaLista;

