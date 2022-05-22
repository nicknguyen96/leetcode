
var MyHashSet = function() {
    this.Buckets = [];
    this.capacity = 100;
    this.Buckets.length = this.capacity;
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.add = function(key) {
    let pos = key%this.capacity;
    if (this.Buckets[pos] == null) {
        this.Buckets[pos] = new Bucket(key);
    } else {
        let curr = this.Buckets[pos];
        if(this.Buckets[pos].val == key){
            return;
        } else {
           while (curr.next != null){
               if (curr.next.val == key){
                   return;
               } else {
                   curr = curr.next;
               }
           }
           curr.next = new Bucket(key);
           return;
        }
    }
};

/** 
 * @param {number} key
 * @return {void}
 */
MyHashSet.prototype.remove = function(key) {
    let pos = key%this.capacity;
    let curr = this.Buckets[pos];
    if (curr == null) {
        return;
    } else {
        if (curr.val == key){
            this.Buckets[pos] = curr.next;
        } else {
            while (curr.next != null){
                if (curr.next.val == key){
                    curr.next = curr.next.next;
                    return;
                } else {
                    curr = curr.next;
                }
            }
            
        }
    }
};

/** 
 * @param {number} key
 * @return {boolean}
 */
MyHashSet.prototype.contains = function(key) {
    let pos = key%this.capacity;
    if (this.Buckets[pos] == null) {
        return false;
    } else {
        let curr = this.Buckets[pos];
        while (curr != null){
            if (curr.val == key) return true;
            curr = curr.next;
        }
        return false;
    }
};

class Bucket {
    constructor(val){
        this.val = val;
        this.next = null;
    }
}

/** 
 * Your MyHashSet object will be instantiated and called as such:
 * var obj = new MyHashSet()
 * obj.add(key)
 * obj.remove(key)
 * var param_3 = obj.contains(key)
 */
