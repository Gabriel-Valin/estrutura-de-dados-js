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

const pilha = new Pilha()
pilha.push(40)
pilha.push(50)
console.log(pilha.isEmpty())
console.log(pilha.peek())
console.log(pilha.pop())