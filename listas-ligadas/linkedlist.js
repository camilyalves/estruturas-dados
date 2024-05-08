class Node {
    constructor (data) {
        this.data = data;
        this.next = null;
    }
}

class linkedList {
    constructor() {
        this.head = null;
    }
    // Método para adicionar nó
    prepend(data) {
        const newNode = new Node(data);
        newNode.next = list.head;
        this.head = newNode;
    }
}

const list = new linkedList();
list.prepend(1);
list.prepend(2);
list.prepend(3);
console.log(list)
/* Saída:
LinkedList {  
head: Node { data: 3, next: Node { data: 2, next: [Node] } }
}
*/