class ListNode {
  constructor(val, next) {
    this.val = val === undefined ? 0 : val;
    this.next = next === undefined ? null : next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }
  add(val) {
    if (this.tail) {
      this.tail.next = new ListNode(val);
      this.tail = this.tail.next;
    }
    if (!this.head) {
      this.head = new ListNode(val);
      this.tail = this.head;
    }
  }
  print() {
    let curr = this.head;
    let str = "";
    while (curr) {
      str += ` ${curr.val}`;
      curr = curr.next;
    }
    console.log(str);
  }

  reverse() {
    let curr = this.head;
    let prev = null;
    while (curr) {
      let future = curr.next;
      curr.next = prev;
      prev = curr;
      curr = future;
    }
    this.head = prev;
  }
}

function reverseLinkedListInBetween(head, left, right) {
  let toFlip = [];
  let curr = head;
  let i = 1;
  while (i <= right) {
    if (i >= left) {
      toFlip.push(curr);
    }
    curr = curr.next;
    i++;
  }
  for (let j = 0; j < Math.floor(toFlip.length / 2); j++) {
    const temp = toFlip[j].val;
    toFlip[j].val = toFlip[toFlip.length - 1 - j].val;
    toFlip[toFlip.length - 1 - j].val = temp;
  }
  return head;
}

function reverseInBetween(head, left, right) {
  let current = head,
    start = head,
    position = 1;

  while (position < left) {
    start = current;
    current = current.next;
    position++;
  }

  let reversedList = null,
    tail = current;

  while (position >= left && position <= right) {
    const next = current.next;
    current.next = reversedList;
    reversedList = current;
    current = next;
    position++;
  }
  start.next = reversedList;
  tail.next = current;

  return left > 1 ? head : reversedList;
}

var reverseList = function (head) {
  let [prev, current] = [null, head];
  while (current != null) {
    let future = current.next;
    current.next = prev;

    prev = current;
    current = future;
    console.log("=========\n\nfuture", future);
    console.log("prev", prev);
    console.log("current", current, "\n\n==========");
  }
  return prev;
};

// 1--2--3--4--5
//    2     4
const revInBetween = (li, start, end) => {
  let [left, current, idx, str] = [null, li, 1, null];
  while (idx <= end) {
    const future = current.next;

    if (idx === start - 1) {
      str = current;
      left = future;
    }
    if (idx > start && idx <= end) {
      current.next = left;
      left = current;
      current = future;
    }
    current = future;
    idx++;
  }
  str.next.next = current;
  str.next = left;
  return li;
};

const list = new LinkedList();
list.add(1);
list.add(2);
list.add(3);
list.add(4);
list.add(5);
// list.print();
// reverseLinkedList(list.head,2,4);
// list.head = reverseList(list.head);
// list.reverse();
// reverseInBetween(list.head, 2, 4);
revInBetween(list.head, 2, 4);
list.print();
