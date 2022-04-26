# Deques

- A estrutura de dados Deque é uma combinação de Pilhas e Filas, por que? Em um Deque pode ser inserido e removido elementos tanto do começo quanto do fim implementos os dois princípios (LIFO & FIFO).

> Você está digitando codificando em sua IDE e decide dar um CTRL+Z duas vezes para desfazer suas últimas duas ações. Como você acha que o computador sabe quais operações devem ser desfeitas? Através de uma lista de operações, então, quando você apertar CTRL+Z basicamente você vai estar falando para o computador desfazer a operação efetuada (pop()).


### Classe Deque
```
export class Deque {
  constructor() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  addFront(element) {
    if (this.isEmpty()) {
      this.addBack(element);
    }

    if (this.lowestCount > 0) {
      this.lowestCount--;
      this.items[this.lowestCount] = element;
    }

    for (let i = this.count; i > 0; i--) {
      this.items[i] = this.items[i - 1];
    }

    this.count++;
    this.lowestCount = 0;
    this.items[0] = element;
  }

  addBack(element) {
    this.items[this.count] = element;
    this.count++;
  }

  removeFront() {
    if (this.isEmpty()) {
      return undefined;
    }
    const result = this.items[this.lowestCount];
    delete this.items[this.lowestCount];
    this.lowestCount++;
    return result;
  }

  removeBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    this.count--;
    const result = this.items[this.count];
    delete this.items[this.count];
    return result;
  }

  peekFront() {
    if (this.isEmpty()) {
      return undefined;
    }

    return this.items[this.lowestCount];
  }

  peekBack() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.count - 1];
  }

  isEmpty() {
    return this.count - this.lowestCount === 0;
  }

  size() {
    return this.count - this.lowestCount;
  }

  clear() {
    this.count = 0;
    this.lowestCount = 0;
    this.items = {};
  }

  toString() {
    if (this.isEmpty()) return '';

    let stackElement = ``;
    for (let i = 1; i < this.count; i++) {
      stackElement += `${this.items[i]},`;
    }

    return stackElement
  }
} 
```

### PitStop da Mercedez

```
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

```