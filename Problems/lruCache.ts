class ListNode{
    next : ListNode | null = null;
    prev : ListNode | null = null;
    constructor(public key : string | null = null, public data : string | null = null ){}
}


class LRUCache{
    private head = new ListNode();
    private tail = new ListNode();
    private keys : Record<string,any> = {};
    private size : number = 0;
    constructor(private totalSize : number){
        this.head.next = this.tail;
        this.tail.prev = this.head;
    }

    public put(key : string, value : string){
        let node = null;
        if(this.keys[key]){
            node = this.keys[key];
            node.prev.next = node.next;
            node.next.prev =node.prev;
            node.data = value;

        }else{
            if(this.size === this.totalSize){
                const marked = this.head.next;
                this.head.next = marked!.next;
                marked!.next!.prev = this.head;
                delete this.keys[marked?.key || ''];
                this.size--;
                console.log("Removing ", marked?.key , 'for', key)
            }
             node = new ListNode(key, value);
             this.keys[key] = node;
             this.size++;
        }
        const prev = this.tail.prev;
        node.next = this.tail;
        this.tail.prev = node;
        node.prev = prev;
        prev!.next = node;
    }

    get(key : string){
        if(this.keys[key]){
            const node = this.keys[key];
            node.prev.next = node.next;
            node.next.prev =node.prev;
            const prev = this.tail.prev;
            node.next = this.tail;
            this.tail.prev = node;
            node.prev = prev;
            prev!.next = node;
            return node.data;
        }
        return null;
    }

    print(){
        console.log(Object.keys(this.keys))
        let curr : ListNode | null = this.head;
        while(curr){
            if(curr.key)
                console.log(curr.key, '===>', curr.data);
            curr = curr.next;

        }
    }
}


const list1 = new LRUCache(5);
list1.put('a','1');
list1.put('b','2');
list1.put('c','3');
list1.put('d','4');
list1.put('a','4');
console.log(list1.get('b'));
list1.put('e','5');
list1.put('f','6');
list1.print();
// console.log(list1)
