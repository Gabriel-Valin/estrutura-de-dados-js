# Pilhas

- Como o proprio nome ja diz, pilha é uma estrutura de dados onde a coleção de itens se alocam um em cima do outro em seu espaço físico.
- Nos navegadores a pilha pode ser notada através da técnica utilizada para voltar à página anterior e se tratando de memória RAM é vista pelo armazenamento de váriaveis e chamada de métodos.
- Essa estrutura de dados obedece restritamente ao princípio <b>[LIFO](https://pt.wikipedia.org/wiki/LIFO) (Last In First Out)</b>.

### Event Loop
- Se você utiliza NodeJS no seu dia a dia provavelmente deve conhecer o Event Loop e como ele processa sua Pilha de funções, caso conheça o nome Event Loop mas não sabe o que ele faz, confira esse artigo. [Node.js: o que é esse Event Loop, afinal?](https://imasters.com.br/front-end/node-js-o-que-e-esse-event-loop-afinal)

### Criação de uma classe representando uma Pilha (com Array)

### Metódos:
	- push(elemento(s)): Adiciona um nóvo elemento ao TOPO da Pilha.
	- pop: Remove o elemento que está no TOPO da Pilha e nos retorna o mesmo.
	- peek: APENAS devolve o elemento do TOPO da Pilha.
	- isEmpty: Retorna `true` se a Pilha não conter nenhum elemento e `false` caso o tamanho for maior que 0.
	- clear: Remove todos os elementos da Pilha.
	- size: Retorna o número de elementos da Pilha.


```
class Pilha {
  constructor() {
    this.items = [];
  }

	push(element) {
		this.items.push(element);
	}

	pop() {
		return this.items.pop();
	}

	peek() {
		return this.items[this.items.length - 1];
	}

	isEmpty() {
		return this.items.length === 0;
	}

	clear() {
		this.items = [];
	}

	size() {
		return this.items.length;
	}
}
```

> Quando trabalhamos com métodos de arrays normalmente temos que iterar até chegarmos em nosso "target" isso significa que temos uma complexidade de tempo [O(n)](https://pt.wikipedia.org/wiki/Grande-O).

### Melhor experiência acessando diretamente nosso target.

```
class Pilha {
	constructor() {
		this.count = 0;
		this.items = {};
	}

	push(element) {
		this.items[this.count] = element;
		this.count++;
	}

	size() {
		return this.count;
	}

	isEmpty() {
		return this.count === 0;
	}

	peek() {
		if (this.isEmpty()) {
			return undefined;
		}
		return this.items[this.count - 1];
	}

	clear() {
		this.count = 0;
		this.items = {};
	}

	pop() {
		if (this.isEmpty()) {
			return undefined;
		}
		this.count--;
		const result = this.items[this.count];
		delete this.items[this.count];
		return result;
	}
}
```