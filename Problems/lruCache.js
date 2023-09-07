"use strict";
class ListNode {
    constructor(key = null, data = null) {
        this.key = key;
        this.data = data;
        this.next = null;
        this.prev = null;
    }
}
class LRUCache {
    constructor(totalSize) {
        this.totalSize = totalSize;
        this.head = new ListNode();
        this.tail = new ListNode();
        this.keys = {};
        this.size = 0;
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }
    put(key, value) {
        let node = null;
        if (this.keys[key]) {
            node = this.keys[key];
            node.prev.next = node.next;
            node.next.prev = node.prev;
            node.data = value;
        }
        else {
            if (this.size === this.totalSize) {
                const marked = this.head.next;
                this.head.next = marked.next;
                marked.next.prev = this.head;
                delete this.keys[(marked === null || marked === void 0 ? void 0 : marked.key) || ''];
                this.size--;
                console.log("Removing ", marked === null || marked === void 0 ? void 0 : marked.key, 'for', key);
            }
            node = new ListNode(key, value);
            this.keys[key] = node;
            this.size++;
        }
        const prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev = node;
        node.prev = prev;
        prev.next = node;
    }
    get(key) {
        if (this.keys[key]) {
            const node = this.keys[key];
            node.prev.next = node.next;
            node.next.prev = node.prev;
            const prev = this.tail.prev;
            node.next = this.tail;
            this.tail.prev = node;
            node.prev = prev;
            prev.next = node;
            return node.data;
        }
        return null;
    }
    print() {
        console.log(Object.keys(this.keys));
        let curr = this.head;
        while (curr) {
            if (curr.key)
                console.log(curr.key, '===>', curr.data);
            curr = curr.next;
        }
    }
}
const list1 = new LRUCache(5);
list1.put('a', '1');
list1.put('b', '2');
list1.put('c', '3');
list1.put('d', '4');
list1.put('a', '4');
console.log(list1.get('b'));
list1.put('e', '5');
list1.put('f', '6');
list1.print();
// console.log(list1)
