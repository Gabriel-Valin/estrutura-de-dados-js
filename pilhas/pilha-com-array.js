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

const pilha = new Pilha()
pilha.push(10)
pilha.push(12)
pilha.push(14)
console.log(pilha.peek()) // 14
console.log(pilha.isEmpty())
console.log(pilha.size())
pilha.pop()
pilha.clear()
