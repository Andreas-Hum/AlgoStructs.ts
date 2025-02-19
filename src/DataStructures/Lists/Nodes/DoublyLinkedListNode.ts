/**
 * Represents a node in a doubly linked list.
 * 
 * @template T - The type of the value stored in the node.
 */
export default class Node<T> {
    private _val: T;
    private _next: Node<T> | null;
    private _prev: Node<T> | null;

    /**
     * Creates an instance of a Node.
     * 
     * @param {T} val - The value to store in the node.
     */
    constructor(val: T) {
        this._val = val;
        this._next = null;
        this._prev = null;
    }

    /**
     * Sets the value of the node.
     * 
     * @param {T} val - The new value to store in the node.
     */
    public set(val: T): void {
        this._val = val;
    }

    /**
     * Gets the value of the node.
     * 
     * @returns {T} - The value stored in the node.
     */
    public get(): T {
        return this._val;
    }

    /**
     * Sets the next node in the list.
     * 
     * @param {Node<T> | null} node - The node to set as the next node.
     */
    public setNext(node: Node<T> | null): void {
        this._next = node;
    }

    /**
     * Gets the next node in the list.
     * 
     * @returns {Node<T> | null} - The next node in the list, or null if there is no next node.
     */
    public getNext(): Node<T> | null {
        return this._next;
    }

    /**
     * Sets the previous node in the list.
     * 
     * @param {Node<T> | null} node - The node to set as the previous node.
     */
    public setPrev(node: Node<T> | null): void {
        this._prev = node;
    }

    /**
     * Gets the previous node in the list.
     * 
     * @returns {Node<T> | null} - The previous node in the list, or null if there is no previous node.
     */
    public getPrev(): Node<T> | null {
        return this._prev;
    }
}