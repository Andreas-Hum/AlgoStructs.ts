import Node from "./Nodes/DoublyLinkedListNode";

/**
 * A class representing a doubly linked list.
 * 
 * @template T - The type of elements in the linked list.
 * 
 * @description
 * A doubly linked list is a sequence of elements in which each element points to both its predecessor and successor. 
 * It allows for efficient insertion and removal of elements from any position in the list.
 * 
 * The class provides the following methods:
 * 1. The `add` method adds one or more values to the end of the linked list.
 * 2. The `remove` method removes the first occurrence of the specified value from the linked list.
 * 3. The `contains` method checks if the linked list contains the specified value.
 * 4. The `isEmpty` method checks if the linked list is empty.
 * 5. The `size` method gets the number of elements in the linked list.
 * 6. The `clear` method removes all elements from the linked list.
 * 7. The `get` method gets the value at the specified index.
 * 8. The `set` method sets the value at the specified index.
 * 9. The `toArray` method converts the linked list to an array.
 * 10. The `Symbol.iterator` method implements the iterable interface for the linked list.
 * 
 * @example
 * const compareNumbers: (a: number, b: number) => number = (a: number, b: number) => a - b;
 * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>(compareNumbers);
 * list.add(1, 2, 3);
 * console.log(list.size()); // Output: 3
 * console.log(list.get(1)); // Output: 2
 * list.remove(2);
 * console.log(list.contains(2)); // Output: false
 */
export class DoublyLinkedList<T> {
    private _head: Node<T> | null;
    private _tail: Node<T> | null;
    private _size: number;
    private _compare: (a: T, b: T) => number;

    /**
     * Creates an instance of DoublyLinkedList.
     * @param {(a: T, b: T) => number} compare - The comparison function for elements.
     * 
     * @remarks
     * The comparison function should return:
     * - A negative number if the first argument is less than the second.
     * - Zero if the first argument is equal to the second.
     * - A positive number if the first argument is greater than the second.
     */
    constructor(compare: (a: T, b: T) => number) {
        this._head = null;
        this._tail = null;
        this._size = 0;
        this._compare = compare;
    }

    /**
     * Adds one or more values to the end of the linked list.
     * @param {...T[]} values - The values to add.
     * @returns {number} - The new size of the linked list.
     * 
     * @complexity
     * Time complexity: O(1) - For each value added.
     * Space complexity: O(1) - For each value added.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * list.add(1, 2, 3);
     * console.log(list.size()); // Output: 3
     */
    public add(...values: T[]): number {
        for (const value of values) {
            const new_node = new Node(value);

            if (this._size === 0) {
                this._head = new_node;
                this._tail = new_node;
            } else {
                if (this._tail) {
                    this._tail.setNext(new_node);
                    new_node.setPrev(this._tail);
                    this._tail = new_node;
                }
            }

            this._size++;
        }

        return this._size;
    }

    /**
     * Removes the first occurrence of the specified value from the linked list.
     * @param {T} value - The value to remove.
     * @returns {T | null} - The removed value, or null if the value was not found.
     * 
     * @complexity
     * Time complexity: O(n) - Where n is the number of elements in the list.
     * Space complexity: O(1) - Constant space operation.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * list.add(1, 2, 3);
     * console.log(list.remove(2)); // Output: 2
     * console.log(list.size()); // Output: 2
     */
    public remove(value: T): T | null {
        if (this._head === null) {
            return null;
        }

        let current: Node<T> | null = this._head;

        while (current !== null) {
            if (this._compare(current.get(), value) === 0) {
                if (current === this._head) {
                    this._head = current.getNext();
                    if (this._head) {
                        this._head.setPrev(null);
                    }
                } else {
                    current.getPrev()?.setNext(current.getNext());
                }

                if (current === this._tail) {
                    this._tail = current.getPrev();
                    if (this._tail) {
                        this._tail.setNext(null);
                    }
                } else {
                    current.getNext()?.setPrev(current.getPrev());
                }

                this._size--;
                return current.get();
            }
            current = current.getNext();
        }

        return null;
    }

    /**
     * Checks if the linked list contains the specified value.
     * @param {T} value - The value to check for.
     * @returns {boolean} - True if the value is found, otherwise false.
     * 
     * @complexity
     * Time complexity: O(n) - Where n is the number of elements in the list.
     * Space complexity: O(1) - Constant space operation.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * list.add(1, 2, 3);
     * console.log(list.contains(2)); // Output: true
     * console.log(list.contains(4)); // Output: false
     */
    public contains(value: T): boolean {
        if (this._head === null) {
            return false;
        }

        let current: Node<T> | null = this._head;

        while (current !== null) {
            if (this._compare(current.get(), value) === 0) {
                return true;
            }
            current = current.getNext();
        }

        return false;
    }

    /**
     * Checks if the linked list is empty.
     * @returns {boolean} - True if the linked list is empty, otherwise false.
     * 
     * @complexity
     * Time complexity: O(1) - Constant time operation.
     * Space complexity: O(1) - Constant space operation.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * console.log(list.isEmpty()); // Output: true
     * list.add(1);
     * console.log(list.isEmpty()); // Output: false
     */
    public isEmpty(): boolean {
        return this._head === null;
    }

    /**
     * Gets the size of the linked list.
     * @returns {number} - The number of elements in the linked list.
     * 
     * @complexity
     * Time complexity: O(1) - Constant time operation.
     * Space complexity: O(1) - Constant space operation.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * list.add(1, 2, 3);
     * console.log(list.size()); // Output: 3
     */
    public size(): number {
        return this._size;
    }

    /**
     * Clears the linked list.
     * 
     * @complexity
     * Time complexity: O(n) - Where n is the number of elements in the list.
     * Space complexity: O(1) - Constant space operation.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * list.add(1, 2, 3);
     * list.clear();
     * console.log(list.size()); // Output: 0
     * console.log(list.isEmpty()); // Output: true
     */
    public clear(): void {
        let current: Node<T> | null = this._head;
        while (current !== null) {
            let next: Node<T> | null = current.getNext();
            current.setNext(null);
            current.setPrev(null);
            current = next;
        }
        this._head = null;
        this._tail = null;
        this._size = 0;
    }

    /**
     * Gets the value at the specified index.
     * @param {number} index - The index of the value to get.
     * @returns {T | null} - The value at the specified index, or null if the index is out of bounds.
     * 
     * @complexity
     * Time complexity: O(n) - Where n is the number of elements in the list.
     * Space complexity: O(1) - Constant space operation.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * list.add(1, 2, 3);
     * console.log(list.get(1)); // Output: 2
     * console.log(list.get(3)); // Output: null
     */
    public get(index: number): T | null {
        if (index < 0 || index >= this._size || this._head === null) {
            return null;
        }

        let current: Node<T> | null = this._head as Node<T> | null;
        for (let i: number = 0; i < index; i++) {
            if (current === null) {
                return null;
            }
            current = current.getNext();
        }

        return current?.get() as T;
    }

    /**
     * Sets the value at the specified index.
     * @param {number} index - The index of the value to set.
     * @param {T} value - The value to set.
     * @returns {boolean} - True if the value was set, otherwise false.
     * 
     * @complexity
     * Time complexity: O(n) - Where n is the number of elements in the list.
     * Space complexity: O(1) - Constant space operation.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * list.add(1, 2, 3);
     * console.log(list.set(1, 4)); // Output: true
     * console.log(list.get(1)); // Output: 4
     * console.log(list.set(3, 5)); // Output: false
     */
    public set(index: number, value: T): boolean {
        if (index < 0 || index >= this._size || this._head === null) {
            return false;
        }

        let current: Node<T> | null = this._head as Node<T> | null;
        for (let i: number = 0; i < index; i++) {
            if (current === null) {
                return false;
            }
            current = current.getNext();
        }

        if (current !== null) {
            current.set(value);
            return true;
        }

        return false;
    }

    /**
     * Converts the linked list to an array.
     * @returns {T[]} - An array containing all elements of the linked list.
     * 
     * @complexity
     * Time complexity: O(n) - Where n is the number of elements in the list.
     * Space complexity: O(n) - Where n is the number of elements in the list.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * list.add(1, 2, 3);
     * console.log(list.toArray()); // Output: [1, 2, 3]
     */
    public toArray(): T[] {
        if (this._head === null) {
            return [];
        }

        const list_to_array: T[] = [];
        let current: Node<T> | null = this._head;

        while (current) {
            list_to_array.push(current.get());
            current = current.getNext();
        }

        return list_to_array;
    }

    /**
     * Implements the iterable interface for the linked list.
     * @returns {IterableIterator<T>} - An iterator for the linked list.
     * 
     * @complexity
     * Time complexity: O(n) - Where n is the number of elements in the list.
     * Space complexity: O(1) - Constant space operation.
     * 
     * @example
     * const list: DoublyLinkedList<number> = new DoublyLinkedList<number>((a, b) => a - b);
     * list.add(1, 2, 3);
     * for (const value of list) {
     *     console.log(value); // Output: 1, 2, 3
     * }
     */
    *[Symbol.iterator](): IterableIterator<T> {
        let current = this._head;
        while (current !== null) {
            yield current.get();
            current = current.getNext();
        }
    }
}
