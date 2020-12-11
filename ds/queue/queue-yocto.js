/* https://github.com/sindresorhus/yocto-queue 

Tiny queue data structure

You should use this package instead of an array if you do a lot of Array#push() and Array#shift() on large arrays, since Array#shift() has linear time complexity O(n) while Queue#dequeue() has constant time complexity O(1). That makes a huge difference for large arrays.
*/

class Node {
  /// value;
  /// next;

  constructor(value) {
    this.value = value;

    // TODO: Remove this when targeting Node.js 12.
    this.next = undefined;
  }
}

class Queue {
  // TODO: Use private class fields when targeting Node.js 12.
  // #_head;
  // #_tail;
  // #_size;

  constructor() {
    this.clear();
  }

  enqueue(value) {
    const node = new Node(value);

    if (this._head) {
      this._tail.next = node;
      this._tail = node;
    } else {
      this._head = node;
      this._tail = node;
    }

    this._size++;
  }

  dequeue() {
    const current = this._head;
    if (!current) {
      return;
    }

    this._head = this._head.next;
    this._size--;
    return current.value;
  }

  clear() {
    this._head = undefined;
    this._tail = undefined;
    this._size = 0;
  }

  get size() {
    return this._size;
  }

  *[Symbol.iterator]() {
    let current = this._head;

    while (current) {
      yield current.value;
      current = current.next;
    }
  }
}

module.exports = Queue;
