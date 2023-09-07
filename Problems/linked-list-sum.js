class ListNode{
    constructor(val , next){
        this.val = (val===undefined ? 0 : val)
        this.next = (next===undefined ? null : next)
    }
}

class LinkedList{
    constructor(head){
        this.head = head || null;
        this.tail = null;
    }
    add(val){
        if(this.tail){
            this.tail.next = new ListNode(val);
            this.tail = this.tail.next;
        }
        if(!this.head){
            this.head = new ListNode(val);
            this.tail = this.head;
        }
    }
    print(){
        let curr = this.head;
        let str = '';
        while(curr){
            str += ` ${curr.val}`;
            curr = curr.next;
        }
        console.log(str)
    }

    reverse(){
        let curr = this.head;
        let prev = null;
        while(curr){
            let future = curr.next;
            curr.next = prev;
            prev = curr;
            curr = future; 
        }
        this.head = prev;
    }
}

var addTwoNumbers = function(l1, l2) {
    let i = 0;
    const add = (n1,n2,carry)=>{
    
        if(!n1?.val && !n2?.val && !carry){
            return null;
        }
        let sum = ( n1?.val || 0) + (n2?.val ||0) + (carry || 0);
        const rest = sum >= 10 ? 1 : 0;
        sum = sum >=10 ? sum-10 : sum;
        const node = new ListNode(sum , add(n1?.next , n2?.next , rest));
        return node;
    }
    return add(l1,l2);
};

const list1 = new LinkedList();
list1.add(2);
list1.add(4);
list1.add(3);
const list2 = new LinkedList();
list2.add(5);
list2.add(6);
list2.add(4);

// console.log(list2)
new LinkedList(addTwoNumbers(list1.head,list2.head)).print()

const list11 = new LinkedList();
list11.add(9);
list11.add(9);
list11.add(9);
list11.add(9);
list11.add(9);
list11.add(9);
list11.add(9);
const list22 = new LinkedList();
list22.add(9);
list22.add(9);
list22.add(9);
list22.add(9);

// console.log(list2)
new LinkedList(addTwoNumbers(list11.head,list22.head)).print()