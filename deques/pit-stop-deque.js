import { Deque } from "./deque.js";

const pitStop = new Deque();
console.log('[===== PitStop da Marcedez =====]')
console.log(pitStop.isEmpty())

// Os carros chegam em sequencia no pitstop
pitStop.addBack('Carro Mercedez 1')
pitStop.addBack('Carro Mercedez 2')
console.log(pitStop.toString())

// Logo em seguida chega mais 1 carro
pitStop.addBack('Carro Mercedez 3')
console.log(pitStop.toString())
console.log(pitStop.size())

// Os carros 1 e 3 tiveram um problema menor e sairam mais rapido do pitstop
pitStop.removeFront()
pitStop.removeBack()
console.log(pitStop.toString())

// Logo ao sair o carro 1 da pane e volta ao pitstop com prioridade
pitStop.addFront('Carro Mercedez 1')
console.log(pitStop.toString())
