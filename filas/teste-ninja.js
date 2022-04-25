import { Fila } from "./fila.js";

const testeNinja = (partipantes) => {
  const fila = new Fila();
  const eliminados = [];
  const tempoAleatorio = Math.floor(Math.random() * 59);

  for (let i = 0; i < partipantes.length; i++) {
    fila.enqueue(partipantes[i]);
  }

  while (fila.size() > 1) {
    for (let i = 0; i < tempoAleatorio; i++) {
      fila.enqueue(fila.dequeue());
    }

    eliminados.push(fila.dequeue())
  }

  return {
    eliminados,
    vencedor: fila.dequeue()
  }
}

const participantes = ['Sasuke', 'Naruto', 'Sakura', 'Neji', 'Gaara', 'Konohamaru'];
const resultado = testeNinja(participantes);

console.log("")
console.log("[======== TESTE DE AGILIDADE EM KONOHA ========]")
console.log("")

resultado.eliminados.forEach(participante => {
  console.log(`         Ninja ${participante} foi eliminado.`);
});

console.log(`         ${resultado.vencedor} foi o ninja vencedor.`)
console.log("")
